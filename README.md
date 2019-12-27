# react-app

# package.json
<details>
<summary>package.json 追加配置</summary>

```javascript
{
  "prettier": { // 代码格式化 prettier 的配置，自行查阅如何在编辑工具上安装和使用 prettier
    "printWidth": 120,
    "singleQuote": true,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "parser": "babylon",
    "semi": true,
    "requirePragma": false
  },
  "homepage": "./" // 打包后资源引用路径
}
```

</details>