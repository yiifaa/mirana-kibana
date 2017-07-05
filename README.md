# Kibana 5.4.4汉化定制版
----------------------

## 1. 目标
1. 汉化，并添加国际化文件；
2. 添加主题支持；
3. 重新调整格局；
4. 添加ECharts支持；
5. 简化二次难度；
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
