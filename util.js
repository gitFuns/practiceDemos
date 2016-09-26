var util = (function () {
    var isStandardBrowser = 'getComputedStyle' in window; //是否为标准浏览器

    /*把类数组转换为数组*/
    function listToArray(oList) {
        var result = [];
        if (isStandardBrowser) {
            result = Array.prototype.slice.call(oList);
        } else {
            for (var i = 0, len = oList.length; i < len; i++) {
                result.unshift(oList[i]);
            }
        }

        return result;
    }

    /*把json字符串转为json对象*/
    function jsonParser(jsonStr) {
        if (isStandardBrowser) {
            return window.JSON.parse(jsonStr);
        } else {
            return eval('(' + jsonStr + ')');
        }
    }

    /*获取元素下的所有子元素节点*/
    function children(curEle) {
        var result = [];

        if (isStandardBrowser) {
            result = this.listToArray(curEle.children);
        } else {
            var nodeList = curEle.childNodes;
            for (var i = 0, len = nodeList.length; i < len; i++) {
                if (nodeList[i].nodeType === 1) {
                    result.push(nodeList[i]);
                    nodeList = null; //释放内存 important
                }
            }
        }

        return result;
    }

    /*获取上一个哥哥元素节点*/
    function prev(curEle) {
        if (isStandardBrowser) {
            return curEle.previousElementSibling;
        } else {
            var prevNode = curEle.previousSibling;
            while (prevNode && prevNode.nodeType !== 1) {
                prevNode = prevNode.previousSibling;
            }

            return prevNode;
        }
    }

    /*获取下一个弟弟元素节点*/
    function next(curEle) {
        if (isStandardBrowser) {
            return curEle.nextElementSibling;
        } else {
            var nextNode = curEle.nextSibling;
            while (nextNode && nextNode.nodeType !== 1) {
                nextNode = nextNode.nextSibling;
            }

            return nextNode;
        }
    }

    /*获取所有的哥哥元素节点*/
    function prevAll(curEle) {
        var result = [];
        var prevEle = this.prev(curEle);
        while (prevEle) {
            result.unshift(prevEle); //注意使用unshift不使用push的原因
            prevEle = this.next(prevEle);
        }

        return result;
    }

    /*获取所有的弟弟元素节点*/
    function nextAll(curEle) {
        var result = [];
        var nextEle = this.next(curEle);
        while (nextEle) {
            result.push(nextEle);
            nextEle = this.next(nextEle);
        }

        return result;
    }

    /*获取相邻的两个元素节点*/
    function sibling(curEle) {
        var result = [],
            prevAll = this.prevAll(curEle),
            nextAll = this.nextAll(curEle);
        prevAll.length > 0 ? result.push(prevAll[prevAll.length - 1]) : null;
        nextAll.length > 0 ? result.push(nextAll[0]) : null;

        return result;
    }

    /*获取所有的兄弟节点*/
    function siblings(curEle) {
        return this.prevAll(curEle).concat(this.nextAll(curEle));
    }

    /*当前元素索引*/
    function index(curEle) {
        return this.prevAll(curEle).length;
    }

    /*获取元素的第一个子元素节点*/
    function firstChild(curEle) {
        var childList = this.children(curEle);

        return childList.length > 0 ? childList[0] : null;
    }

    /*获取元素的最后一个元素子节点*/
    function lastChild(curEle) {
        var childList = this.children(curEle);

        return childList.length > 0 ? childList[childList.length - 1] : null;
    }

    /*向指定容器的末尾追加元素 原生js完美支持*/
    function append(newEle, container) {
        container.appendChild(newEle);
    }

    /*向指定容器的开头追加元素 把新的元素添加到容器中第一个子元素前面*/
    function prepend(newElement, container) {
        var firstChild = this.firstChild(container);
        if (firstChild) {
            container.insertBefore(firstChild);
        } else {
            container.appendChild(newElement);
        }
    }

    /*把新元素追加到指定元素的前面 注意与原生内置insertBefore的区别*/
    function insertBefore(newElement, oldElement) {
        oldElement.parentNode.insertBefore(newElement, oldElement);
    }

    /*把新元素追加到指定元素的后面 原生js没有这个方法*/
    function insertAfter(newElement, oldElement) {
        var nextElement = this.next(oldElement);
        if (nextElement) {
            this.insertBefore(newElement, oldElement)
        } else {
            oldElement.parentNode.appendChild(newElement);
        }
    }

    /*获取默认上下文中的类名为className的元素集合*/
    function getElementsByClassName(className, context) {
        var result = [];
        context = context || document;
        if (isStandardBrowser) {
            result = listToArray(context.getElementsByClassName(className));
        } else {
            var classNameArray = className.replace(/(^ +| +$)/g, '').split(/ +/g);
                nodeList = context.getElementsByTagName('*');
            for (var i = 0; i < nodeList.length; i++) {
                var flag = true, curNode = nodeList[i];
                for (var k = 0; k < classNameArray.length; k++) {
                    var reg = new RegExp('(^| +)' + classNameArray[k] + '( +|$)');
                    if (!reg.test(curNode.className)) {
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    result.push(curNode);
                }
            }
        }

        return result;
    }

    /*获取某个元素的样式值*/
    function css(curEle, attr, value) {
        if (typeof value === 'undefined') {
            if (!isStandardBrowser) {
                return curEle.currentStyle[attr];
            }

            return window.getComputedStyle(curEle, null)[attr];
        }

        curEle.style[attr] = value;
    }

    return {
        css: css,
        jsonParser: jsonParser,
        getElementsByClassName: getElementsByClassName
    };
})();






























