package com.xpleemoon.sample.rn;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.xpleemoon.sample.rn.call.LeeRNCallNativeActivity;
import com.xpleemoon.sample.rn.comm.LeeRNCommActivity;

import butterknife.ButterKnife;
import butterknife.OnClick;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
    }

    @OnClick(R.id.start_rn_call_native)
    void rnCallNative() {
        Intent intent = new Intent(this, LeeRNCallNativeActivity.class);
        startActivity(intent);
    }

    @OnClick(R.id.start_comm)
    void communication() {
        Intent intent = new Intent(this, LeeRNCommActivity.class);
        startActivity(intent);
    }
}
