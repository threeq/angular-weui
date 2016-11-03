/**
 *
 * @Date 16/10/6
 * @User three
 */

(function (app) {
    /**
     * 调用微信js api 演示图片预览
     */
    app.factory('PreviewImages', ['WuWxJsSdk', function (WuWxJsSdk) {
        return {
            show: function (current, imgList) {
                WuWxJsSdk.previewImage({
                                           current: current,
                                           urls: imgList
                                       });
            }
        }
    }]);
    /**
     * 调用微信js api 演示图片预览指令
     */
    app.directive('previewImages', ['PreviewImages', function (PreviewImages) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var box = element;
                var selector = attrs.preview? attrs.preview : 'img';
                var attrName = attrs.attrName? attrs.attrName : 'src';

                element.on('click', selector, function (e) {
                    var src = $(this),
                        imgList = [];
                    box.find(selector).each(function (index,item) {
                        imgList.push(item.attr(attrName));
                    });

                    PreviewImages.show(src.attr(attrName), imgList);

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            }
        }
    }]);

    /**
     * h5 实现预览功能
     */
    app.directive('gallery', ['$timeout','IdWorkerFactory', function ($timeout,IdWorkerFactory) {

        var galleryIdWorker = IdWorkerFactory.new('weui-gallery_swiper');

        return {
            restrict: 'EA',
            //replace: true,
            templateUrl: 'weui/template/gallery/gallery.html',
            scope: {
                images: "="
            },
            link: function (scope, element, attrs) {

                var galleryId = galleryIdWorker();
                element.attr("id", galleryId);
                element.addClass("weui-gallery");

                element.show();
                //scope.clickElement = function () {
                //    element.hide();
                //};

                ///**
                // * 用户操作回调
                // */
                //scope.clickBtn = function (e) {
                //    scope.action && scope.action({
                //                                     image: scope.image
                //                                 });
                //    e.preventDefault();
                //};

                /**
                 * 显示缩略图
                 * @type {boolean}
                 */
                scope.showThumb = false;
                if(angular.isArray(scope.images) && scope.images.length>0) {

                    if(scope.images[0].hasOwnProperty('thumb')) {
                        scope.showThumb = true;
                    }

                    initSwiper();
                }

                scope.imageStyle = function (image) {
                  return {
                      'background-image': 'url('+image.url+')'
                  }
                };

                function initSwiper() {

                    $timeout(function () {
                        console.log('#'+galleryId+' .swiper-images');

                        var galleryTop = new Swiper('#'+galleryId+' .swiper-images', {
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            spaceBetween: 10,
                            effect: 'coverflow',
                            grabCursor: true,
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            coverflow: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows : true
                            }
                        });

                        if(scope.showThumb) {
                            var galleryThumbs = new Swiper('#'+galleryId+' .gallery-thumbs', {
                                spaceBetween: 10,
                                centeredSlides: true,
                                slidesPerView: 'auto',
                                touchRatio: 0.2,
                                slideToClickedSlide: true
                            });
                            galleryTop.params.control = galleryThumbs;
                            galleryThumbs.params.control = galleryTop;
                        }

                    },10)
                }

            }
        }
    }])
})(angular.module('ng.weui.gallery'));

