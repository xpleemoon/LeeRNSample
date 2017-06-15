package com.xpleemoon.sample.rn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.xpleemoon.sample.rn.config.LeeRNPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by xplee on 2017/6/7.
 */

public class LeeApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new LeeRNPackage()/*注册自定义模块*/
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost/*不能写成匿名类*/;
    }
}
