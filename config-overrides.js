/* config-overrides.js */

const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}, // 全局 less 变量，会覆盖项目内同名变量，可用于主题定制
  })
);
