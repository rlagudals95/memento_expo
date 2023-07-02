import React, { useRef, useEffect, useCallback, useState } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { DEVICE_SIZE } from '../config/constants';
import { getMetroServerUrl } from '../config/web';
import { MessageType } from '../helper/messageHelper';
import { AsyncStorageService } from '../helper/AsyncStorageService';


const styles = StyleSheet.create({
    container: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height
    },
});

export default function WebViewComponent() {

    const [uri, setUri] = useState("");

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setUri("http://mementomori.prod.s3-website.ap-northeast-2.amazonaws.com/");
        } else {
            setUri("http://mementomori.prod.s3-website.ap-northeast-2.amazonaws.com/")
        }
    }, [])

    const webViweRef = useRef<WebView>(null);

    const onMessage = useCallback((e: WebViewMessageEvent) => {
        const event = JSON.parse(e.nativeEvent.data)
        const type: MessageType = event.type;
        const data = event.body;

        if (type === MessageType.setUserInfo) {
            AsyncStorageService.setData("userInfo", data);
        }

        if (type === MessageType.hasUserInfo) {
            AsyncStorageService.getData("userInfo").then((userInfo) => {
                webViweRef.current?.postMessage(JSON.stringify({ type: MessageType.hasUserInfo, body: { ...userInfo } }))
            });
        }

        if (type === MessageType.removeUserInfo) {
            AsyncStorageService.removeData('userInfo')
        }

    }, [])


    return (
        <>
            <WebView
                style={styles.container}
                originWhitelist={['*']}
                source={{ uri }}
                bounces={false}
                javaScriptEnabled={true}
                ref={webViweRef}
                onMessage={onMessage}
                domStorageEnabled={true}
            />
        </>
    );
}



