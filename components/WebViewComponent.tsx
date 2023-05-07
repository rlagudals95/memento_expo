import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { DEVICE_SIZE } from '../config/constants';


const styles = StyleSheet.create({
    container: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height
    },
});

export default function WebViewComponent() {

    return (
        <>
            <WebView
                style={styles.container}
                originWhitelist={['*']}
                source={{ uri: `http://192.168.0.16:3000` }}
            />
        </>
    );
}



