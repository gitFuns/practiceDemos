var count,
    bannerEle = document.getElementById('banner'),
    bannerInner = util.getElementsByClassName('inner')[0],
    bannerTip = util.getElementsByClassName('banner-tip')[0],
    oLis = bannerTip.getElementsByTagName('li'),
    bannerLeft = document.getElementById('banner-left'),
    bannerRight = document.getElementById('banner-right');

/*实现数据绑定 ajax请求数据 ajax四部曲*/
var banners = null,
    xhr = new XMLHttpRequest();
xhr.open('GET', 'banner.json?_=' + Math.random(), false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        banners = util.jsonParser(xhr.responseText);
    }
};
xhr.send(null);

/*拼接字符串绑定数据*/
var htmlStr = '', tipStr = '';
if (banners) {
    for (var i = 0; i < banners.length; i++) {
        htmlStr += '<div><img src="" lazy-img=' + banners[i].img + '/ ></div>';
        if (i == 0) {
            tipStr += '<li class="bg"></li>';
        } else {
            tipStr += '<li></li>';
        }
    }
    htmlStr += '<div><img src="" lazy-img=' + banners[0].img + '/ ></div>';
}

bannerInner.innerHTML = htmlStr;
bannerTip.innerHTML = tipStr;
count = banners.length + 1;
bannerInner.style.width = count * 1000 + 'px';

/*实现图片的延迟加载  是统一全部延迟500ms加载*/
var imgList = bannerInner.getElementsByTagName('img');

function lazyImg() {
    for (var i = 0, len = imgList.length; i < len; i++) {
        ~function (i) {
            var curImg = imgList[i],
                oImg = new Image();
            oImg.src = curImg.getAttribute('lazy-img');
            oImg.onload = function () { //异步编程
                curImg.src = this.src;
                curImg.style.display = 'block';
                oImg = null;
            };
        }(i);
    }
}

window.setTimeout(lazyImg, 500);

/*
var step = 0,
    autoTimer = window.setInterval(autoMove, 2000);

function autoMove() {
    if (step >= count - 1) {
        step = 0;
        bannerInner.style.left = 0;
    }

    step++;
    bannerInner.timer = window.setInterval(function () {
        var duration = 500,
            interval = 10,
            target = -1000 * step,
            moveStep = -1000 / duration * 10,
            curLeft = parseFloat(util.css(bannerInner, 'left'));

        curLeft = curLeft + moveStep;
        if (curLeft <= target) {
            bannerInner.style.left = target + 'px';
            clearInterval(bannerInner.timer);
            return;
        }

        bannerInner.style.left = curLeft + 'px';
    }, 10);
}
*/

var step = 0,
    autoTimer = window.setInterval(autoMove, 2000);

function autoMove() {
    if (step >= (count - 1)) {
        step = 0;
        bannerInner.style.left = 0;
    }
    step++;
    changeTip(step);
    animate(bannerInner, {left: -step * 1000}, 500);
}

function changeTip(step) {
    step === 4 ? step = 0 : null;
    for (var i = 0, len = oLis.length; i < len; i++) {
        var curLi = oLis[i];
        i === step ? curLi.className = 'bg' : curLi.className = '';
    }
}

~function () {
    for (var i = 0, len = oLis.length; i < len; i++) {
        var curLi = oLis[i];
        curLi.index = i;
        curLi.onclick = function () {
            step = this.index;
            changeTip(step);
            animate(bannerInner, {left: -step * 1000}, 500);
        };
    }
}();


bannerEle.onmouseover = function () {
    window.clearInterval(autoTimer);
    bannerLeft.style.display = 'block';
    bannerRight.style.display = 'block';
};

bannerEle.onmouseout = function () {
    autoTimer = window.setInterval(autoMove, 2000);
    bannerLeft.style.display = 'none';
    bannerRight.style.display = 'none';
};

bannerLeft.onclick = function () {
    if (step <= 0) {
        step = count - 1;
        util.css(bannerInner, 'left', -step * 1000 + 'px');
    }
    step--;
    changeTip(step);
    animate(bannerInner, {left: -step * 1000}, 500);
};

bannerRight.onclick = autoMove;












