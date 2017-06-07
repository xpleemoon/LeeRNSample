package com.xpleemoon.sample.rn;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.xpleemoon.sample.LeeSampleApplication;
import com.xpleemoon.sample.rn.module.LeeReactDialog;
import com.xpleemoon.sample.rn.module.LeeReactToast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 用于注册自定义模块，这个package需要在{@link LeeSampleApplication#getReactNativeHost()}返回对象的getPackages()方法中提供
 * <pre>
 * protected List<ReactPackage> getPackages() {
 *     return Arrays.<ReactPackage>asList(
 *          new MainReactPackage(),
 *          new AnExampleReactPackage()); // <-- 添加这一行，类名替换成你的Package类的名字.
 * }
 * </pre>
 *
 * @author xpleemoon
 */
public class LeeReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new LeeReactToast(reactContext)); // 添加toast模块
        modules.add(new LeeReactDialog(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
