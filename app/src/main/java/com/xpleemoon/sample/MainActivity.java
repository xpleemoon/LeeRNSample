package com.xpleemoon.sample;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.xpleemoon.sample.rn.CommunicationActivity;
import com.xpleemoon.sample.rn.R;

import butterknife.ButterKnife;
import butterknife.OnClick;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
    }

    @OnClick(R.id.native_rn_communication)
    void communication() {
        Intent intent = new Intent(this, CommunicationActivity.class);
        startActivity(intent);
    }
}
