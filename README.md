# angular-weui

weui的angular组件版本。同时封装微信jssdk接口为angular服务。依赖：
> angular 1.x
>
> weui: [https://github.com/weui/weui](https://github.com/weui/weui)
>
> jquery
>
> 微信jssdk 1.1.0

# TODO list

1. [x] 核心组件
> * 浏览器检测组件

1. [x] actionsheet 组件
1. [x] dialog 组件
1. [x] toast 组件
1. [x] wu-click 组件：防止重复点击
1. [x] 进度条组件
1. [ ] loading 组件
1. [ ] 图片预览组件

1. [ ] 表单组件
> * 图片上传
> * 文本输入
> * 单选
> * 多选
> * 开关按钮
> * 文本域
> * 选择

# api说明

### WuBrowserChecker

客户端检测.支持android/ios/window版本微信客户端,mac/linux/window平台上的各种浏览器检测.
同时会在window作用域中创建一个weui_client_browser_checker对象存放客户端信息

WuBrowserChecker.engine   // 呈现引擎信息

WuBrowserChecker.browser  // 浏览器信息

WuBrowserChecker.system   // 系统平台信息


### WuActionSheet

WuActionSheet是一个angular服务，只提供一个方法：`open(options)`

#### WuActionsSheet open 方法

##### options参数

* btnGroups *(Type: Array)* - 按钮组配置列表。每个按钮组提供 `action` *`(Type:String, Default: cancel)`* 和 `buttons`参数：`action`指定点击过后执行结果通知时的通道，取值只能是`ok`或`cancel`；`buttons`指定一组中包含的按钮对象，每个对象包含的属性有`title`和`value`,`title`按钮显示信息，`value`按钮点击时的返回值
* 返回值：返回一个angular的 WuActionSheet 实例。提供有result，close等方法，对用户点击结果和 WuActionSheet 进行控制

##### Example

```javascript
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
```
### WuDialog

WuDialog是个angular服务，提供弹框服务。提供的方法有：`open(options)`、`alert(options)`、`confirm(options)`

#### WuDialog open 方法

```javascript
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
```

#### WuDialog alert 方法

```javascript
WuDialog.alert({
    title: '提示框',
    content: '<div style="color: red;">xxxx Alert内容<div>'
}).result.then(function () {
        console.log('ok');
    }, function () {
        console.log('close alert')
    });
```

#### WuDialog confirm 方法

```javascript
WuDialog.confirm({
    title: '确认框',
    content: '<div style="color: red;">xxxx确认内容<div>'
}).result.then(function () {
        console.log('ok');
    }, function () {
        console.log('cancel')
    });
```

### WuToast

WuDialog是个angular服务，提供消息提醒服务。提供的方法有：`message(options)`、`complete(options)`、`loading(options)`

#### WuToast message 方法

```javascript
var loadingObj = WuToast.message({
    message:'test asdfasdf sdfasdf asdfsadfv sdfsad asfsadf sdfasfda sdfasfasdf message show'
    time: 2000
});

// 或者手多关闭
setTimeout(function () {
 loadingObj.close();
}, 1000)
```

#### WuToast complete 方法

```javascript
WuToast.complete({
    time:1000
});
```

#### WuToast loading 方法

```javascript
var loadingObj = WuToast.loading({
                message:'数据加载中'
            });
setTimeout(function () {
    loadingObj.close();
}, 1000)
```

### wu-progress

wu-progress 是一个angular指令，提供进度条显示。

```html
<h1>wuProgress </h1>
<input type="text" data-ng-model="wuProgress">

<div wu-progress="wuProgress"></div>
<div wu-progress="wuProgress" wu-color="'#ff33dd'" wu-height="12"></div>
```

### wu-click

wu-click 是一个angular指令，提供事件点击服务，可以防止用户快速点击按钮。

```html
<h1>button test</h1>
<a href="javascript:;" class="weui_btn weui_btn_default" data-wu-click="testCtrl.wuButtonTest()">按钮</a>
<a href="javascript:;" class="weui_btn weui_btn_default" wu-interval="2000" wu-click="testCtrl.wuButtonTest1(testCtrl.testVar)">按钮</a>
```

# angular-weui 开发

1. 克隆 angular-weui 工程

```
git clone git@github.com:threeq/angular-weui.git

cd angular-weui
```

2. 安装工程依赖库

```
# npm 环境依赖
npm intall

# 使用 bower 安装angular-weui依赖库
npm run bower
```

3. 启动工程

```
npm run dev
```

这时会自动启动浏览器打开 demo 界面,如果没有打开可以自己打开浏览器输入地址: http://localhost:3002/test.html

4. 工程打包

```
npm run dist
```
