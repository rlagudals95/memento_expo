import React, { useRef } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { DEVICE_SIZE } from '../config/constants';
import { getMetroServerUrl } from '../config/web';
import { MessageType } from '../helper/messageHelper';

const styles = StyleSheet.create({
    container: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height
    },
});

export default function WebViewComponent() {

    const webViweRef = useRef<WebView>(null);


    const onMessage = (e: WebViewMessageEvent) => {
        const event = JSON.parse(e.nativeEvent.data)
        const type: MessageType = event.type;
        const data = event.body;

        console.log('onMessage', event);

        console.log()

    }

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
                domStorageEnabled={true}
            />
        </>
    );
}



