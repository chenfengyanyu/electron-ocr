# electron-ocr
OCR(Optical Character Recognition), Electron, Tools

## 项目预览
![demo](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/screen.gif)

## 功能介绍
- 图片上传：实现拖拽
<!-- ![上传页](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/sc0.png) -->
- 图片预览：上传完成，直接进入预览页，同时执行文字识别，成功后返回结果，并拷贝入粘贴板，可语音播报
<!-- ![预览页](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/sc1.png) -->
- 菜单页：简单的导航列表，持续扩充
<!-- ![菜单页](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/sc5.png) -->
- 在线演示功能：提供了更多的图片，便于演示效果
<!-- ![图片示例](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/sc6.gif) -->
- 繁体字识别：繁体字需要调用付费接口，所以需要单独处理，增加了繁体校准功能
<!-- ![繁体字图片](https://github.com/chenfengyanyu/electron-ocr/blob/master/temp/sc4.png) -->
- 大图裁切：为了精准识别，需要将图片化繁为简
- ...

## 技术方案
- electron
- electron-compile
- electron-reload
- react
- react-router@4
- react-motion
- ES6/ES7
- Promise
- Surperagent
- Less
- eslint
- cropper
- Material-UI
- ...

## 使用说明
1.`clone` 项目
```bash
git clone https://github.com/chenfengyanyu/electron-ocr.git
```

2.安装依赖包，建议使用淘宝镜像 `cnpm` 安装
```bash
cnpm i
```

3.项目根目录创建文件 `config.js`，代码参考 `config.sample.js`
因为使用了[百度 `AI` 文字识别](https://login.bce.baidu.com/?account=&redirect=http%3A%2F%2Fconsole.bce.baidu.com%2Fiam%2F)接口，所以需要获得接口使用的 `Key` 值。
```bash
const Keys = {
  ak: 'BGGSqHB2FoTiXpPIziVLCjzv', // 您的 Api Key
  sk: 'ojvVMC7yW2GPuQ7kATDVr4RCzNyw19sZ' // 您的 Secret Key
}

export default Keys;
```

4.完成上述过程，启动程序
```bash
npm run start
```

5.项目打包
因为要下载打包的二进制文件，所以会很慢，而且打包过程会占用较大系统内存。
```bash
npm run package
```

## 注意事项
1. 暂时只支持 OS X 系统的打包，其他系统稍后支持。
2. 项目还有很多细节未完成，暂不提供下载。

## 欢迎加入
项目还在持续开发中，更多的细节需要处理，欢迎大家加入，打造最好用以及最聪明的识图软件桌面应用！
