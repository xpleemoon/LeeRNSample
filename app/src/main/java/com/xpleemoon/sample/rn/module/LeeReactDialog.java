package com.xpleemoon.sample.rn.module;

import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 自定义原生dialog模块
 *
 * @author xpleemoon
 */
public class LeeReactDialog extends ReactContextBaseJavaModule {
    public LeeReactDialog(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LeeDialog";
    }

    @ReactMethod
    public void show(String title, String msg) {
        new AlertDialog.Builder(getCurrentActivity())
                .setTitle(title)
                .setMessage(msg)
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                })
                .show();
    }
}
