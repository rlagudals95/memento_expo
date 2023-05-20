import WebView from "react-native-webview";

export interface MessagePacket {
  type: MessageType;
  body: any;
}

export enum MessageType {
  auth = "auth",
}
export const postMessage = (
  webview: React.RefObject<WebView>,
  message: MessagePacket
) => {
  webview.current?.postMessage(JSON.stringify(message));
};
