package com.xpleemoon.sample.rn.call;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * RN调用原生
 *
 * @author xpleemoon
 */
public class LeeRNCallNativeActivity extends ReactActivity {
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "LeeCallNative";
    }
}
