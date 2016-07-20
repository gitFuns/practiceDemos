var jQuery;

jQuery.extend = jQuery.fn.extend = function () {
    var src, copyIsArray, copy, name, options, clone,
        target = arguments[0] || {}, /*合并的目标对象*/
        i = 1, length = arguments.length, deep = false;

    if(typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }

    if(typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }

    if(length === i) {
        target = this;
        --i;
    }
};