var build = require('../lib/regexpbuilderjs/regexpbuilder.js'),
    str = '<img src="http://yyz-test.img-cn-shenzhen.aliyuncs.com/l2-eSnNeIHvH4DTFFw.jpg" alt="" />' +
          '<img src="http://yyz-test.img-cn-shenzhen.aliyuncs.com/cBMWfPXxjoCBGa_UY3.jpg" alt="" /><p>不错啊</p>';



var regExp = build.find().getRegExp();