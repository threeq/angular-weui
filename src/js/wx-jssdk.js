/**
 *  微信基本js接口
 */
(function (app, window) {
    app.factory('WuWxJsSdk',['$q', function ($q) {
        /**
         * 获取微信js接口对象
         * @param reject <Function>  如果没有js接口对象，调用通知方法
         * @returns {*}   false 或 js接口对象
         */
        function checkWxObj(reject) {
            if(!window.wx) {
                reject({
                    errMsg: '没有js接口对象，请确认是否引入微信js文件'
                });
                return false;
            }
            return window.wx;
        }

        /**
         * 构建接口参数回调
         * @param params  <Object>    参数
         * @param resolve <Function>  成功回调
         * @param reject  <Function>  失败回调
         * @param config  <Object>  失败回调
         * @returns {*}
         */
        function builderParamsCb(params, resolve, reject) {
            params.success = function(res) {
                resolve(res);
            };
            params.fail = function(res) {
                reject(res)
            };
            params.complete = function (res) {

            };
            params.cancel = function () {
                reject({
                    errMsg: '用户取消'
                })
            };
            params.trigger = function () {

            };
            return params;
        }

        var __server = {
            // 权限验证配置
            config: function () {
                return $q(function (resolve, reject) {
                    var wxObj = checkWxObj(reject);
                    if(wxObj) {
                        wxObj.config.apply(window, arguments);
                        wxObj.ready(function(){
                            // 权限配置成功
                            resolve({
                                errMsg: 'config:ok'
                            })
                        });
                        wxObj.error(function(res){
                            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                            reject(res)
                        });
                    }
                });
            }
        };

        // 封装原有js接口
        var jsApiList = [
            //openEnterpriseContact
            'checkJsApi',

            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareWeibo',

            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',

            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'onVoicePlayEnd',
            'uploadVoice',
            'downloadVoice',
            'translateVoice',

            'getNetworkType',

            'openLocation',
            'getLocation',

            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',

            'scanQRCode',

            'startSearchBeacons', //complete
            'stopSearchBeacons', //complete
            'onSearchBeacons',    //complete

            'openProductSpecificView', // 微小店商品页

            'chooseCard',  // 卡券
            'addCard',
            'openCard',
            'consumeAndShareCard',

            'chooseWXPay' // 支付

        ];
        for(var i=0; i<jsApiList.length; i++) {
            var apiName = jsApiList[i];
            __server[apiName] = function (params) {
                    return $q(function (resolve, reject) {
                        var wxObj = checkWxObj(reject);
                        if(wxObj) {
                            wxObj[apiName](builderParamsCb(params, resolve, reject));
                        }
                    });
                };
        }

        // TODO 增加自己的业务逻辑接口

        return __server;
    }]);

})(angular.module('weui.jssdk'), window);