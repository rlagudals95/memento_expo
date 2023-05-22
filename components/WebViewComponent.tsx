import React, { useRef, useEffect, useCallback } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { DEVICE_SIZE } from '../config/constants';
import { getMetroServerUrl } from '../config/web';
import { MessageType, postMessage } from '../helper/messageHelper';
import { AsyncStorageService } from '../helper/AsyncStorageService';

const styles = StyleSheet.create({
    container: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height
    },
});

export default function WebViewComponent() {

    const webViweRef = useRef<WebView>(null);


    const onMessage = useCallback((e: WebViewMessageEvent) => {
        const event = JSON.parse(e.nativeEvent.data)
        const type: MessageType = event.type;
        const data = event.body;
        console.log('onMessage', event);
        if (type === MessageType.auth) {
            AsyncStorageService.setData("userInfo", data);
        }
    }, [])

    const onLoadStart = useCallback(() => {

        if (!webViweRef.current) return;
        AsyncStorageService.getData("userInfo").then((userInfo) => {
            postMessage(webViweRef, { type: MessageType.auth, body: { userInfo } });
        });
    }, [])


    return (
        <>
            <WebView
                style={styles.container}
                originWhitelist={['*']}
                source={{ uri: getMetroServerUrl() }}
                bounces={false}
                javaScriptEnabled={true}
                ref={webViweRef}
                onMessage={onMessage}
                onLoadStart={onLoadStart}
                domStorageEnabled={true}
            />
        </>
    );
}



