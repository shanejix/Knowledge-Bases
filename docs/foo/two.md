# ubuntu 18.04 space small

- 下载字体文件
> https://github.com/tonsky/FiraCode#download-v1206–how-to-install–troubleshooting–news–updates
  
-  打开ttf文件夹，双击安装完所有的字体文件
-  打开VSCODE的settings.json文件
> home><user>>.config>code>User>setting.json

-  添加字体文件配置

```js
	// 以下两行必须
   "editor.fontFamily": "'Fira Code'",
   "editor.fontLigatures": true,
    //下面四行分别设置不同粗细的字体，选择一种
    // "editor.fontWeight": "300",// Light
   // "editor.fontWeight": "400", // Regular
   "editor.fontWeight": "500", // Medium
   // "editor.fontWeight": "600", // Bold

```