/**
 *
 * @Date 2016/11/3
 * @User three
 */

(function (app) {
    app.controller('TestGalleryCtrl',['WuActionSheet','WuDialog','WuToast', function (WuActionSheet,WuDialog,WuToast) {

        this.previewImages = [
            {
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },{
                thumb:'images/pic_article.png',
                url:'images/pic_article.png'
            },
        ];
    }])
})(angular.module('test',['ng.weui']));