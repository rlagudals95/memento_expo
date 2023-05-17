import WebView from "react-native-webview";

export interface MessagePacket {
  type: string;
  body: any;
}

export const postMessage = (
  webview: React.RefObject<WebView>,
  message: MessagePacket
) => {
  webview.current?.postMessage(JSON.stringify(message));
};
