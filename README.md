# electron-ocr
OCR(Optical Character Recognition), Electron, Tools

## 创建项目
github 新建仓库

## clone 初始化之后，安装 electron
```bash
npm install electron —save-dev
```

## 修改package.json
```json
"main": "main.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
注意启动项 main

## 启动
```bash
npm run start
```
看到 helloworld 就表示成功了

## 安装依赖
安装electron 相关依赖 
```bash
npm install electron-prebuilt electron-reload electron-packager --save-dev
```
安装 babel 相关依赖：
```bash
npm install babel babelify babel-preset-es2015 babel-preset-react 
babel-plugin-transform-es2015-spread --save-dev
```
如果提示 npm WARN babelify@8.0.0 requires a peer of babel-core@6 || 7 || ^7.0.0-alpha || ^7.0.0-beta || ^7.0.0-rc but none was installed.
安装：
```bash
npm install babel-core@6 --save-dev
```

安装 npm install  browserify watchify –save-dev
安装 npm install react react-dom react-tap-event-plugin  –save
安装 npm install  material-ui —save

## 修改配置
vi .babelrc 写入如下代码
```json
{
    "presets": [
        "es2015",
        "react"
    ],

    "plugins": [
        "transform-object-rest-spread"
    ]
}
```
通过 presets 和 plugins 两个子项，我们告知 babel 转换 ES6 和 React JSX 风格的代码，另外还需转换 ES6 中的 spread 语法。


未完待续。。。