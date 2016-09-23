var util = (function () {
    var flag = 'getComputedStyle' in window;

    //获取元素的所有子节点
    function children(curEle) {
        var result = [];
        if (!flag) {
            var nodeList = curEle.childNodes;
            for (var i = 0, len = nodeList.length; i < len; i++) {
                var curNode = nodeList[i];
                curNode.nodeType === 1 ? result[result.length] = curNode : null;
            }
            nodeList = null;
        } else {
            result = [].slice().call(curEle.children);
        }
    }

    //获取上一个哥哥元素节点
    function prev(curEle) {
        if (flag) {
            return curEle.previousElementSibling; //标准浏览器
        }

        //上一个哥哥节点 判断是否为元素节点 不是继续向上找 如果没有哥哥元素节点 返回 NULL
        var pre = curEle.previousSibling;
        while (pre && prev.nodeType !== 1) {
            pre = pre.previousSibling;
        }

        return pre;
    }

    //获取下一个弟弟元素节点
    function next(curEle) {
        if (flag) {
            return curEle.nextElementSibling;
        }

        var nex = curEle.nextSibling;
        while (nex && nex.nodeType !== = 1) {
            nex = nex.nextSibling;
        }

        return nex;
    }

    //获取所有的哥哥元素节点
    function prevAll(curEle) {
        var ary = [];
        var pre = this.prev(curEle);
        while (pre) {
            ary.unshift(pre); //保证数组顺序
            pre = this.prev(pre);
        }

        return ary;
    }

    //获取所有的弟弟元素节点
    function nextAll(curEle) {
        var ary = [];
        var nex = this.next(curEle);
        while (nex) {
            ary.push(nex); //保证数组顺序
            nex = this.next(nex);
        }

        return ary;
    }

    //获取相邻的两个元素节点
    function sibling(curEle) {
        var pre = this.prev(curEle);
        var next = this.next(curEle);
        var ary = [];
        pre ? ary.push(prev) : null;
        next ? ary.push(next) : null;

        return ary;
    }

    //获取所有的兄弟节点
    function siblings(curEle) {
        return this.prevAll(curEle).concat(this.nextAll(curEle));
    }

    //当前元素索引
    function index(curEle) {
        return this.prevAll(curEle).length;
    }

    //firstChilde获取元素的第一个子元素节点
    function firstChild(curEle) {
        var chs = this.children(curEle);

        return chs.length > 0 ? chs[0] : null;
    }

    //lastChild获取元素的最后一个元素子节点
    function lastChild(curEle) {
        var chs = this.children(curEle);

        return chs.length > 0 ? chs[chs.length - 1] : null;
    }

    //append 向指定容器的末尾追加元素
    function append(newEle, container) {
        container.appendChild(newEle);
    }

    //prepend 向指定容器的开头追加元素 把新的元素添加到容器中第一个子元素前面
    function prepend(newElem, container) {
        var firstEle = this.firstChilde(container);
        if (firstEle) {
            container.insertBefore(newElem, first);
        } else {
            container.appendChild(newElem);
        }
    }

    //insertBefore 把新元素追加到指定元素的前面 注意与原生内置insertBefore的区别
    function insertBefore(newEle, oldEle) {
        oldEle.parentNode.insertBefore(newEle, oldEle);
    }

    //insertAfter 把新元素追加到指定元素的后面 原生js没有这个方法
    //追加到oldEle弟弟元素节点的前面 若不存在直接 appendChild
    function insertAfter(newEle, oldEle) {
        var nex = this.next(oldEle);
        if (nex) {
            oldEle.parentNode.insertBefore(newEle, nex);
        } else {
            oldEle.parentNode.appendChild(newEle);
        }
    }

    //addClass
    function addClass(curEle, className) {
    }

    //removeClass
    //hasClass
    function hasClass(curEle, className) {

    }

    return {
        prev: prev,
        next: next,
        preAll: prevAll,
        nextAll: nextAll,
        sibling: sibling,
        siblings: siblings,
        index: index,
        firstChild: firstChild,
        lastChild: lastChild,
        append: append,
        prepend: prepend,
        insertBefore: insertBefore,
        insertAfter: insertAfter
    };
})();