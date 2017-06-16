# LeeRNSample

## 使用步骤

1. 切换到LeeRNSample工程中的RN目录：cd xxx/LeeRNSample/RN
2. 创建node模块：npm init
3. 创建node_modules目录并下载相应RN环境：npm install --save react react-native react-navigation
4. bundle离线包打入到assets（可以在离线的环境下使用）：npm run-script bundle-android
5. 启动packager：npm start
6. 把APK安装到设备：gradle命令执行或者Android Studio运行
