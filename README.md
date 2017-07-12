# Kibana 5.4.4汉化定制版
----------------------

## 1. 目标
1. 汉化，并添加国际化文件；
2. 添加主题支持；
3. 重新调整格局；
4. 添加ECharts支持；
5. 简化二次开发难度；
6. 添加路由支持；

## 2017-07-05
### 服务器端
1. Server采用[hapi.js](https://hapijs.com/);
2. Kibana的主页为src\ui\views\ui_app.jade;
3. Babel在optimize/babel/helpers.js中；
4. webpack的配置信息在src\optimize\base_optimizer.js中；
5. 代码节选：
```javascript
//  src\ui\ui_app.js
this.templateName = this.spec.templateName || 'ui_app';
//  菜单配置信息
this.navLink = this.uiExports.navLinks.new({
    id: this.id,
    title: this.title,
    order: this.order,
    description: this.description,
    icon: this.icon,
    url: this.spec.url || `/app/${this.id}`
});
```
### 客户端
1. Kibana采用插件的方式注册应用，系统自动扫描src\core_plugins文件夹发现所有的插件；
2. kibana、timelion都为内置的插件，既包含服务器端代码，也包含客户端代码；
3. Angular的初始化与组件引用尽在src\ui\public\chrome\chrome.js


## 2017-07-06
1. 切换到开发模式，并准备翻译文件；
2. 找到客户端文件入口；
3. 弄清桶与指标之间的关系；

## 2017-07-07
1. 时间格式关键文件：src\ui\settings\defaults.js，src\ui\public\timepicker\timepicker.js，utilities\visual_regression.js
2. 国际化文件散落在JS文件、HTML文件与i18n配置文件中，核心位置src\core_plugins\kibana\translations\zh.json[通用提示信息]
3. 国际化文件，个性化定义(含标题名称、日期、索引及字段翻译配置信息)，src\ui\translations\zh.json；

## 2017-07-10
1. 汉化日志检索页；
2. 汉化日期选择器；
3. 汉化查询条件组件；
4. 汉化表格组件；(支持表头、内容、字段、明细等)
5. 将源数据内容格式化为JSON字符串；

## 2017-07-11
1. 样式文件存放位置ui_framework\components\view\_view.scss
2. 修改程序连接位置：src\ui\public\chrome\directives\global_nav\global_nav.html
3.
