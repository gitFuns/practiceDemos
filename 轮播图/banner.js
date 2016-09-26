(function () {
    var bannerEle = document.getElementById('banner'),
        bannerInner = bannerEle.getElementsByClassName('inner')[0],
        bannerTip = bannerEle.getElementsByClassName('banner-tip')[0];

    /*实现数据绑定 ajax请求数据 ajax四部曲*/
    var banners = null,
        xhr = new XMLHttpRequest();
    xhr.open('GET', 'banner.json?_=' + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            banners = JSON.parse(xhr.responseText);
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
    }

    bannerInner.innerHTML = htmlStr;
    bannerTip.innerHTML = tipStr;
    bannerInner.style.width = banners.length * 1000 + 'px';


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

    var step = 0,
        autoTimer = window.setInterval(autoMove, 4000);

    function autoMove() {
        step++;

        var duration = 1000, interval = 10, target = -1000 * step,
            moveStep = -1000 / duration * 10;
        bannerInner.timer = window.setInterval(function () {
            var curLeft = window.getComputedStyle(bannerInner, null).left;
            curLeft = moveStep + parseFloat(curLeft);
            if (curLeft <= target) {
                bannerInner.style.left = target + 'px';
                clearInterval(bannerInner.timer);
            }

            bannerInner.style.left = curLeft + 'px';
        }, 10);
    }

    window.setTimeout(lazyImg, 200);
})();