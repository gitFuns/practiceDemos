/**
 * 该版本在PC端运行 基本功能运行正常 但是在移动端运行不正常 暂不知原因
 */

/*rem*/
document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 100 + 'px';

~function () {
    var $banner = $('.banner'),
        $wrapper = $('.wrapper'),
        $imgList = $banner.find('img'),
        $tip = $('.tip'),
        activeIndex = 1,
        timer = null,
        count = $imgList.length;

    $banner.css('width', $imgList.length * 6.4 + 'rem');

    /**
     * 判断是否发生移动 标准是 30px 此处为提高用户响应体验 改为 0px
     * @param strX 起始 X
     * @param strY 起始 Y
     * @param endX 结束 X
     * @param endY 结束 Y
     */
    function isMove(strX, strY, endX, endY) {
        return Math.abs(endX - strX) > 10 || Math.abs(endY - strY) > 10
    }

    function getDirection(strX, strY, endX, endY) {
        var offsetX = endX - strX,
            offsetY = endY - strY;
        if (Math.abs(offsetX) > Math.abs(offsetY)) {
            return endX > strX ? 'right' : 'left';
        }

        return endY > strY ? 'down' : 'up';
    }

    $banner.on('touchstart', function (ev) {
        var point = ev.touches[0];
        this['strX'] = point.clientX;
        this['strY'] = point.clientY;
        this['strL'] = $(this).css('left');
        this['isMove'] = false;
        this['changeX'] = null;
    });

    $banner.on('touchmove', function (ev) {
        var point = ev.touches[0],
            endX = point.clientX,
            endY = point.clientY;
        if (isMove(this['strX'], this['strY'], endX, endY)) {
            var direction = this['direction'] = getDirection(this['strX'], this['strY'], endX, endY);
            if (direction === 'left' || direction === 'right') {
                this['isMove'] = true;
                this['changeX'] = endX - this['strX'];

                $(this)[0].style.WebkitTransitionDuration = '0s';
                $(this)[0].style.TransitionDuration = '0s';
                $(this).css('left', (parseFloat(this['strL']) + this['changeX']) + 'px');
            }
        }
    });

    $banner.on('touchend', function (ev) {
        if (Math.abs(this['changeX']) >= document.documentElement.clientWidth / 4) {
            if (this['direction'] === 'left') {
                activeIndex++;
                if (activeIndex === count - 1) {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        activeIndex = 1;
                        $banner[0].style.WebkitTransitionDuration = '0s';
                        $banner[0].style.TransitionDuration = '0s';
                        $banner.css('left', -activeIndex * document.documentElement.clientWidth + 'px');
                        $tip.find('span').eq(Math.abs(activeIndex) - 1).addClass('active').siblings().removeClass('active');
                        clearTimeout(timer);
                    }, 500);
                }
            } else if (this['direction'] === 'right') {
                activeIndex--;
                if (activeIndex === 0) {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        activeIndex = count - 2;
                        $banner[0].style.WebkitTransitionDuration = '0s';
                        $banner[0].style.TransitionDuration = '0s';
                        $banner.css('left', -activeIndex * document.documentElement.clientWidth + 'px');
                        $tip.find('span').eq(Math.abs(activeIndex) - 1).addClass('active').siblings().removeClass('active');
                        clearTimeout(timer);
                    }, 500);
                }
            }
        }
        $(this)[0].style.WebkitTransitionDuration = '.5s';
        $(this)[0].style.TransitionDuration = '.5s';
        $(this).css('left', -activeIndex * document.documentElement.clientWidth + 'px');
        $tip.find('span').eq(Math.abs(activeIndex) - 1).addClass('active').siblings().removeClass('active');
    });
}();


