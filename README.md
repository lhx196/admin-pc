# react-admin 

以create-react-app --typescript生成模板，进行一系列二次配置集成<br>
其中包括：react-router-dom动态配置、less-loader加载、react-app-rewired + customize-cra 拓展配置、mobx状态管理配置

## 目录结构

- src
	- configs - 脚手架相关配置文件
		- routers.tsx - 路由配置，生成相应的路由字典
	- pages - 开发相关的页面文件
	- store - 状态管理工具，本项目以mobx做状态管理
	- type - typescript类型定义，以及引用第三方库声明（第三方库已有d.ts声明文件）
	- App.less - 全局样式定义
  - App.tsx - 项目入口，主要用于状态的注入，和路由定义
	- react-app-env.d.ts - 全局声明

## 致谢

本人学习过程中脚手架搭建以及二次配置的思路来源，感谢大神参考项目以及指导

- [dyb881/react-app](https://github.com/dyb881/react-app)
- [dyb881/create-react-app](https://github.com/dyb881/create-react-app)

感谢现有的相关项目:

- [create-react-app](https://github.com/facebook/create-react-app)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [customize-cra](https://github.com/arackaf/customize-cra)
- [antd](https://ant.design/docs/react/introduce-cn)
- [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)
- [lodash](https://www.lodashjs.com/docs/latest)
- [less](http://lesscss.org)
- [less-loader](https://webpack.docschina.org/loaders/less-loader)
- [normalize.css](https://github.com/necolas/normalize.css)