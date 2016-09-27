/**
 * Created by three on 15/9/7.
 */

(function (app) {
    app.controller('TestCtrl',['WuActionSheet','WuDialog','WuToast', function (WuActionSheet,WuDialog,WuToast) {

        this.actionSheet = function () {
            WuActionSheet.open({
                btnGroups:[
                    {
                        action: 'Ok',
                        buttons:[
                            {
                                title:'11',
                                value:'11'
                            },
                            {
                                title:'22',
                                value:'22'
                            },
                            {
                                title:'33',
                                value:'33'
                            },
                            {
                                title:'44',
                                value:'44'
                            }
                        ]
                    },
                    {
                        action: 'Cancel',
                        buttons:[
                            { title: 'cancel1', value: 'cancel1'}
                        ]
                    },
                    {
                        action: 'Close',
                        buttons:[
                            { title: 'cancel11', value: 'cancel1'}
                        ]
                    }
                ]
            }).result.then(function (btn) {
                    console.log(btn)
                }, function (cancel) {
                    console.log(cancel)
                });
        };

        this.confirm = function () {
            WuDialog.confirm({
                title: '确认框',
                content: '<div style="color: red;">xxxx确认内容<div>'
            }).result.then(function () {
                    console.log('ok');
                }, function () {
                    console.log('cancel')
                });
        };

        this.alert = function () {
            WuDialog.alert({
                title: '提示框',
                content: '<div style="color: red;">xxxx Alert内容<div>'
            }).result.then(function () {
                    console.log('ok');
                }, function () {
                    console.log('close alert')
                });
        };

        this.dialog = function () {
            WuDialog.open({
                title:'自定义按钮',
                content:'自定义按钮测试',
                buttons:[
                    { action:'ok', title:'btn1', class: 'default', value:'btn1' },
                    { action:'ok', title:'btn2', class: 'primary', value:'btn2' },
                    { action:'cancel', title:'btn3', class: 'default', value:'btn3' },
                    { action:'cancel', title:'btn4', class: 'primary', value:'btn4' }
                ]
            }).result.then(function () {
                    console.log("OK: ", arguments[0])
                },function () {
                    console.log("Cancel: ", arguments[0])
                })
        };

        this.toastComplete = function () {
            WuToast.complete({
                time:1000
            });
        };

        this.toastLoading = function () {
            var loadingObj = WuToast.loading({
                message:'数据加载中'
            });
            setTimeout(function () {
                loadingObj.close();
            }, 1000)
        };
        this.toastMessage = function () {
            var loadingObj = WuToast.message({
                message:'test asdfasdf sdfasdf asdfsadfv sdfsad asfsadf sdfasfda sdfasfasdf message show'
            });
        };

        this.wuButtonTest = function () {
            console.log('xxxxxxxxxxxxxxx');
        };

        this.testVar = 'nihao'

        this.wuButtonTest1 = function (data) {
            console.log('000000000000000', data);
        };

    }])
})(angular.module('test',['weui']));