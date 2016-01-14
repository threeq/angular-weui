/**
 * Created by three on 15/7/7.
 */

describe('components：localize test', function() {
    var $compile;
    var $rootScope;
    var $filter;
    var httpBackend;
    var __localize;
    // Load the myApp module, which contains the directive
    beforeEach(angular.mock.module('ng.poler'));
    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_,_$filter_,$httpBackend, localize){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $filter = _$filter_;
        httpBackend = $httpBackend;
        __localize = localize;

        __localize.configLang('zh_CN',{
            hello:"你好",
            change:"我改变了"
        }).configLang("en_US",{
            hello:"hello US",
            change:"changed US"
        }).configLang('server', "/lang/server_lang.json");

    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('localize 配置测试', function () {

        __localize.configLang();

        httpBackend.when('GET','/lang/error_lang.json').respond(404,"没有语言文件");
        __localize.configLang('error_lang', '/lang/error_lang.json');
        var p = __localize.setLang('error_lang');
        httpBackend.flush();
        p.then(function (data) {
            //expect().to
            console.log('测试失败：获取语言失败', data)
        }, function (error) {
            console.log('测试成功：获取语言失败', error)
        });

        httpBackend.when('GET','/lang/500.json').respond(500,"没有语言文件");
        __localize.configLang('500', '/lang/500.json');
        var p = __localize.setLang('500');
        httpBackend.flush();
        p.then(function (data) {
            //expect().to
            console.log('测试失败：获取语言失败', data)
        }, function (error) {
            console.log('测试成功：获取语言失败', error)
        });

        __localize.configLang('error_lang1', true);
        __localize.setLang('error_lang1').then(function (data) {
            //expect().to
            console.log('测试失败：获取语言失败', data)
        }, function (error) {
            console.log('测试成功：获取语言失败', error)
        });

        __localize.configLang('error_lang2', [1,2,4]);
        __localize.setLang('error_lang2').then(function (data) {
            //expect().to
            console.log('测试失败', data)
        }, function (error) {
            console.log('测试成功', error)
        });

        __localize.configLang('error_lang3', new Date());
        __localize.setLang('error_lang3').then(function (data) {
            //expect().to
            console.log('测试失败', data)
        }, function (error) {
            console.log('测试成功', error)
        });

        __localize.configLang('error_lang4', function () {

        });
        __localize.setLang('error_lang4').then(function (data) {
            //expect().to
            console.log('测试失败', data)
        }, function (error) {
            console.log('测试成功', error)
        });

        __localize.configLang('success_lang5', function () {
            return {a:'a',b:'b'};
        });
        __localize.setLang('success_lang5').then(function (data) {
            //expect().to
            console.log('测试成功', data)
        }, function (error) {
            console.log('测试失败', error)
        });


        __localize.configLang('success_lang6', function () {
            return '/lang/success_lang6.json';
        });
        httpBackend.when('GET','/lang/success_lang6.json').respond(200, {
            success:'test'
        });
        __localize.setLang('success_lang6').then(function (data) {
            //expect().to
            console.log('测试成功', data)
        }, function (error) {
            console.log('测试失败', error)
        });
        httpBackend.flush();
    });

    it('localize service 语言翻译测试', function() {
        var hello_CN;
        var world_CN;
        __localize.setLang("zh_CN");
        hello_CN = __localize.localizeText("hello");
        world_CN = __localize.localizeText("world");
        expect(hello_CN).toEqual("你好");
        expect(world_CN).toEqual("world");

        __localize.setLang('en_US');
        hello_CN = __localize.localizeText("hello");
        world_CN = __localize.localizeText("world");
        expect(hello_CN).toEqual("hello US");
        expect(world_CN).toEqual("world");

        __localize.setLang('bbb');

        httpBackend.when('GET','/lang/server_lang.json').respond(200, {
            hello:"hello Server",
            change:"changed Server"
        });
        __localize.setLang('server');
        httpBackend.flush();

        hello_CN = __localize.localizeText("hello");
        world_CN = __localize.localizeText("world");
        expect(hello_CN).toEqual("hello Server");
        expect(world_CN).toEqual("world");

    });

    it('localize 指令 语言翻译测试', function () {


        $rootScope.test='hello';
        var helloElement = $compile('<span localize="test"></span>');
        var worldElement = $compile('<span localize="\'world\'"></span>');

        var hello1Element = $compile('<localize data="test"></localize>');
        var world1Element = $compile('<localize data="\'world\'"></localize>');

        var hello2Element = $compile('<span localize>{{test}}</span>');
        var world2Element = $compile('<span localize>world</span>');

        var hello3Element = $compile('<localize>{{test}}</localize>');
        var world3Element = $compile('<localize>world</localize>');

        var input1Element = $compile('<input localize placeholder="{{test}}">');
        var input2Element = $compile('<input localize placeholder="world">');
        var input3Element = $compile('<input localize="test">');
        var input4Element = $compile('<input localize="\'world\'" placeholder="xdfasfsadf">');
        var input5Element = $compile('<input >');
        var input6Element = $compile('<input placeholder="">');

        expect(helloElement($rootScope).html()).toEqual('hello');
        expect(worldElement($rootScope).html()).toEqual('world');

        expect(hello1Element($rootScope).html()).toEqual('hello');
        expect(world1Element($rootScope).html()).toEqual('world');

        expect(hello2Element($rootScope).html()).toEqual('hello');
        expect(world2Element($rootScope).html()).toEqual('world');

        expect(hello3Element($rootScope).html()).toEqual('hello');
        expect(world3Element($rootScope).html()).toEqual('world');

        expect(input1Element($rootScope).attr('placeholder')).toEqual('hello');
        expect(input2Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input3Element($rootScope).attr('placeholder')).toEqual('hello');
        expect(input4Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input5Element($rootScope).attr('placeholder')).toBeUndefined();
        expect(input6Element($rootScope).attr('placeholder')).toEqual('');


        __localize.setLang('zh_CN');
        expect(helloElement($rootScope).html()).toEqual('你好');
        expect(worldElement($rootScope).html()).toEqual('world');
        expect(hello1Element($rootScope).html()).toEqual('你好');
        expect(world1Element($rootScope).html()).toEqual('world');
        expect(hello2Element($rootScope).html()).toEqual('你好');
        expect(world2Element($rootScope).html()).toEqual('world');
        expect(hello3Element($rootScope).html()).toEqual('你好');
        expect(world3Element($rootScope).html()).toEqual('world');

        expect(input1Element($rootScope).attr('placeholder')).toEqual('你好');
        expect(input2Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input3Element($rootScope).attr('placeholder')).toEqual('你好');
        expect(input4Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input5Element($rootScope).attr('placeholder')).toBeUndefined();
        expect(input6Element($rootScope).attr('placeholder')).toEqual('');

        __localize.setLang('en_US');
        expect(helloElement($rootScope).html()).toEqual('hello US');
        expect(worldElement($rootScope).html()).toEqual('world');
        expect(hello1Element($rootScope).html()).toEqual('hello US');
        expect(world1Element($rootScope).html()).toEqual('world');
        expect(hello2Element($rootScope).html()).toEqual('hello US');
        expect(world2Element($rootScope).html()).toEqual('world');
        expect(hello3Element($rootScope).html()).toEqual('hello US');
        expect(world3Element($rootScope).html()).toEqual('world');

        expect(input1Element($rootScope).attr('placeholder')).toEqual('hello US');
        expect(input2Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input3Element($rootScope).attr('placeholder')).toEqual('hello US');
        expect(input4Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input5Element($rootScope).attr('placeholder')).toBeUndefined();
        expect(input6Element($rootScope).attr('placeholder')).toEqual('');


        $rootScope.test = "change";
        expect(helloElement($rootScope).html()).toEqual('changed US');
        expect(worldElement($rootScope).html()).toEqual('world');
        expect(hello1Element($rootScope).html()).toEqual('changed US');
        expect(world1Element($rootScope).html()).toEqual('world');
        expect(hello2Element($rootScope).html()).toEqual('changed US');
        expect(world2Element($rootScope).html()).toEqual('world');
        expect(hello3Element($rootScope).html()).toEqual('changed US');
        expect(world3Element($rootScope).html()).toEqual('world');

        expect(input1Element($rootScope).attr('placeholder')).toEqual('changed US');
        expect(input2Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input3Element($rootScope).attr('placeholder')).toEqual('changed US');
        expect(input4Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input5Element($rootScope).attr('placeholder')).toBeUndefined();
        expect(input6Element($rootScope).attr('placeholder')).toEqual('');


        __localize.setLang('zh_CN');
        expect(helloElement($rootScope).html()).toEqual('我改变了');
        expect(worldElement($rootScope).html()).toEqual('world');
        expect(hello1Element($rootScope).html()).toEqual('我改变了');
        expect(world1Element($rootScope).html()).toEqual('world');
        expect(hello2Element($rootScope).html()).toEqual('我改变了');
        expect(world2Element($rootScope).html()).toEqual('world');
        expect(hello3Element($rootScope).html()).toEqual('我改变了');
        expect(world3Element($rootScope).html()).toEqual('world');

        expect(input1Element($rootScope).attr('placeholder')).toEqual('我改变了');
        expect(input2Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input3Element($rootScope).attr('placeholder')).toEqual('我改变了');
        expect(input4Element($rootScope).attr('placeholder')).toEqual('world');
        expect(input5Element($rootScope).attr('placeholder')).toBeUndefined();
        expect(input6Element($rootScope).attr('placeholder')).toEqual('');

    });

    it('localize 过滤器 语言翻译测试', inject(function ($interpolate) {
        $rootScope.test='hello';
        var text;
        var localizeFilter = $filter('localize');
        var localizeInterpolate = $interpolate('{{test|localize}}');
        text = localizeFilter('hello');
        expect(text).toEqual('hello');
        expect(localizeInterpolate($rootScope)).toEqual('hello');

        __localize.setLang('zh_CN');
        text = localizeFilter('hello');
        expect(text).toEqual('你好');
        expect(localizeInterpolate($rootScope)).toEqual('你好');


        __localize.setLang('en_US');
        text = localizeFilter('hello');
        expect(text).toEqual('hello US');
        expect(localizeInterpolate($rootScope)).toEqual('hello US');

        $rootScope.test='change';

        expect(localizeInterpolate($rootScope)).toEqual('changed US');
    }))
});
