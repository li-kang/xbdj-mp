# xbdj-mp
鲜宝到家小程序

### 安装 MPX
在已有文件夹内创建mpx工程：(当前文件夹名就是项目名)

```shell
mpx init .
```

启动服务，mpx会将源码编译成小程序识别的代码，并监听文件变化进行重编译

```shell
npm install
npm run watch
```

配置小程序根目录，在`project.config`添加配置

```json
"miniprogramRoot": "dist/",
```

用小程序 IDE 打开项目
