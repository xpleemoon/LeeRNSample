package com.xpleemoon.sample.rn.module;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * RN与原生通信模块
 *
 * @author xpleemoon
 */
public class LeeReactCommunication extends ReactContextBaseJavaModule {
    private AtomicInteger mCallbackAtomicInteger = new AtomicInteger();
    private AtomicInteger mPromiseAtomicInteger = new AtomicInteger();

    public LeeReactCommunication(ReactApplicationContext reactContext) {
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
}
