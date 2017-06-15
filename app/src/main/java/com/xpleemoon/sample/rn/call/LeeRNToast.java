package com.xpleemoon.sample.rn.call;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * 自定义原生Toast模块
 *
 * @author xpleemoon
 */
public class LeeRNToast extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public LeeRNToast(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 一个可选的方法getContants返回了需要导出给JavaScript使用的常量。<br/>
     * 它并不一定需要实现，但在定义一些可以被JavaScript同步访问到的预定义的值时非常有用。
     *
     * @return 返回时间显示长短标记
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 这个函数用于返回一个字符串名字，这个名字在JavaScript端标记这个模块。
     * <ul>
     * <li>RN已经内置了一个名为ToastAndroid的模块</li>
     * <li>模块名前的RCT前缀会被自动移除。</li>
     * </ul>
     *
     * @return 这里我们把这个模块叫做MyToastAndroid，这样就可以在JavaScript中通过React.NativeModules.MyToastAndroid访问到这个模块
     */
    @Override
    public String getName() {
        return "LeeToast";
    }

    /**
     * {@link ReactMethod}注解的方法，表明该方法会被导出给JS使用
     * <ul>
     * <li>方法的返回类型必须为void</li>
     * <li>React Native的跨语言访问是异步进行的，所以想要给JavaScript返回一个值的唯一办法是使用回调函数或者发送事件</li>
     * </ul>
     * <p>
     * 参数类型在@ReactMethod注明的方法中，会被直接映射到它们对应的JavaScript类型:
     * <ul>
     * <li>Boolean -> Bool</li>
     * <li>Integer -> Number</li>
     * <li>Double -> Number</li>
     * <li>Float -> Number</li>
     * <li>String -> String</li>
     * <li>Callback -> function</li>
     * <li>ReadableMap -> Object</li>
     * <li>ReadableArray -> Array</li>
     * <ul>
     *
     * @param message
     * @param duration
     */
    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
