import { WebView,  } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { DEVICE_SIZE } from '../config/constants';
import { getMetroServerUrl } from '../config/web';

import React from 'react';
import { useWebView } from './useWebview';


const styles = StyleSheet.create({
    container: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height
    },
});

export function WebViewComponent() {

    const { handleOnMessage, webViweRef, uri } = useWebView();

    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri }}
            bounces={false}
            javaScriptEnabled={true}
            ref={webViweRef}
            onMessage={handleOnMessage}
            domStorageEnabled={true}
        />
    );
}



