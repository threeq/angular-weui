/**
 *
 * @Date 2016/11/3
 * @User three
 */

(function(window, app, undefined) {

    'use strict';

    app
        .directive('wuSwiperContainer', ['IdWorkerFactory', function (IdWorkerFactory) {
            var IdWorker = IdWorkerFactory('wuSwiperContainer');
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    onReady: '&',
                    slidesPerView: '=',
                    slidesPerColumn: '=',
                    spaceBetween: '=',
                    parallax: '=',
                    parallaxTransition: '@',
                    paginationIsActive: '=',
                    paginationClickable: '=',
                    showNavButtons: '=',
                    showScrollBar: '=',
                    loop: '=',
                    autoplay: '=',
                    initialSlide: '=',
                    containerCls: '@',
                    wrapperCls: '@',
                    paginationCls: '@',
                    slideCls: '@',
                    direction: '@',
                    swiper: '=',
                    overrideParameters: '='
                },
                controller: function($scope, $element, $timeout) {
                    var uuid = IdWorker();

                    $scope.swiper_uuid = uuid;

                    // directive defaults
                    var params = {
                        slidesPerView: $scope.slidesPerView || 1,
                        slidesPerColumn: $scope.slidesPerColumn || 1,
                        spaceBetween: $scope.spaceBetween || 0,
                        direction: $scope.direction || 'horizontal',
                        loop: $scope.loop || false,
                        initialSlide: $scope.initialSlide || 0,
                        showNavButtons: false
                    };

                    if (!angular.isUndefined($scope.autoplay) && typeof $scope.autoplay === 'number') {
                        params = angular.extend({}, params, {
                            autoplay: $scope.autoplay
                        });
                    }

                    if ($scope.paginationIsActive === true) {
                        params = angular.extend({}, params, {
                            paginationClickable: $scope.paginationClickable || true,
                            pagination: '#paginator-' + $scope.swiper_uuid
                        });
                    }

                    if ($scope.showNavButtons === true) {
                        params.nextButton = '#nextButton-' + $scope.swiper_uuid;
                        params.prevButton = '#prevButton-' + $scope.swiper_uuid;
                    }

                    if ($scope.showScrollBar === true) {
                        params.scrollbar = '#scrollBar-' + $scope.swiper_uuid;
                    }

                    if ($scope.overrideParameters) {
                        params = angular.extend({}, params, $scope.overrideParameters);
                    }

                    $timeout(function() {
                        var swiper = null;

                        if (angular.isObject($scope.swiper)) {
                            $scope.swiper = new Swiper($element[0].firstChild, params);
                            swiper = $scope.swiper;
                        } else {
                            swiper = new Swiper($element[0].firstChild, params);
                        }

                        //If specified, calls this function when the swiper object is available
                        if (!angular.isUndefined($scope.onReady)) {
                            $scope.onReady({
                                               swiper: swiper
                                           });
                        }
                    });
                },

                link: function(scope, element) {

                    var uuid = scope.swiper_uuid;

                    var paginatorId = "paginator-" + uuid;
                    var prevButtonId = "prevButton-" + uuid;
                    var nextButtonId = "nextButton-" + uuid;
                    var scrollBarId = 'scrollBar-' + uuid;

                    var containerElement = element[0];

                    angular.element(containerElement.querySelector('.swiper-pagination'))
                        .attr('id', paginatorId);

                    angular.element(containerElement.querySelector('.swiper-button-next'))
                        .attr('id', nextButtonId);

                    angular.element(containerElement.querySelector('.swiper-button-prev'))
                        .attr('id', prevButtonId);

                    angular.element(element[0].querySelector('.swiper-scrollbar'))
                        .attr('id', scrollBarId);
                },

                template: '<div class="swiper-container {{containerCls}}">' +
                          '<div class="parallax-bg" data-swiper-parallax="{{parallaxTransition}}" ng-show="parallax"></div>' +
                          '<div class="swiper-wrapper {{wrapperCls}}" ng-transclude></div>' +
                          '<div class="swiper-pagination {{paginationCls}}"></div>' +
                          '<div class="swiper-button-next" ng-show="showNavButtons"></div>' +
                          '<div class="swiper-button-prev" ng-show="showNavButtons"></div>' +
                          '<div class="swiper-scrollbar" ng-show="showScrollBar"></div>' +
                          '</div>'
            };
        }])
        .directive('wuSwiperSlide', [function SwiperSlide() {
            return {
                restrict: 'E',
                require: '^ksSwiperContainer',
                transclude: true,
                scope: {
                    sliderCls: '@',
                },
                template: '<div class="swiper-slide {{sliderCls}}" ng-transclude></div>',
                replace: true
            };
        }]);

})(window, angular.module('ng.weui.swiper'), undefined);