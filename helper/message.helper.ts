import WebView from "react-native-webview";

export interface MessagePacket {
  type: MessageType;
  body: any;
}

export enum MessageType {
  auth = "auth",
  hasUserInfo = "hasUserInfo",
  setUserInfo = "setUserInfo",
  removeUserInfo = "removeUserInfo"
}
export const postMessage = (
  webview: React.RefObject<WebView>,
  message: MessagePacket
) => {
  webview.current?.postMessage(JSON.stringify(message));
};
