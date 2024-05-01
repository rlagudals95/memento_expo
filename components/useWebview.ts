import { useCallback, useEffect, useRef, useState } from "react";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { MessageType } from "../helper/message.helper";
import { AsyncStorageService } from "../service/asyncStorage.service";
import { getMetroServerUrl } from "../config/web";

export const useWebView = () => {
    
    const webViweRef = useRef<WebView>(null);
    
    const handleOnMessage = useCallback((e: WebViewMessageEvent) => {
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
    }, []);


    const [uri, setUri] = useState("");

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setUri(getMetroServerUrl());
        } else {
            setUri("http://memento-fe-cra.s3-website-us-east-1.amazonaws.com")
        }
    }, [])

    return {
        webViweRef,
        handleOnMessage,
        uri
    }
}