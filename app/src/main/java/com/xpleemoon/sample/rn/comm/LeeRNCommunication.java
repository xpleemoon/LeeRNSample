package com.xpleemoon.sample.rn.comm;

import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * RN与原生通信模块
 *
 * @author xpleemoon
 */
public class LeeRNCommunication extends ReactContextBaseJavaModule {
    public static final String EVENT_RESULT = "result";
    private AtomicInteger mCallbackAtomicInteger = new AtomicInteger();
    private AtomicInteger mPromiseAtomicInteger = new AtomicInteger();
    private AtomicInteger mSendEventAtomicInteger = new AtomicInteger();

    public LeeRNCommunication(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LeeCommunication";
    }

    @ReactMethod
    public void callback(String rnMsg, final Callback callback) {
        callback.invoke(rnMsg + "->" + mCallbackAtomicInteger.incrementAndGet());
    }

    @ReactMethod
    public void promise(String rnMsg, final Promise promise) {
        promise.resolve(rnMsg + "->" + mPromiseAtomicInteger.incrementAndGet());
    }

    @ReactMethod
    public void showSendEvent() {
        new AlertDialog.Builder(getCurrentActivity())
                .setTitle("Send Event")
                .setMessage("点击确定按钮，原生向RN发送事件，实现原生的主动通信发起")
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                        WritableMap params = Arguments.createMap();
                        params.putString(EVENT_RESULT, "Send Event->" + mSendEventAtomicInteger.incrementAndGet());
                        ReactContext reactContext = getReactApplicationContext();
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                .emit("onReceiveEvent", params);
                    }
                })
                .setNegativeButton("取消", null)
                .show();
    }
}
