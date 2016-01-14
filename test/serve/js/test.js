/**
 * Created by three on 15/9/7.
 */

(function (app) {
    app.controller('TestCtrl',['WuActionSheet','WuDialog',function (WuActionSheet,WuDialog) {

        this.actionSheet = function () {
            WuActionSheet.open({
                btnGroups:[
                    {
                        class:'weui_actionsheet_menu',
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
                    console.log('cancel')
                });
        }
    }])
})(angular.module('test',['weui']));