import Constants from "expo-constants";

export function getMetroServerUrl() {

  const manifest = Constants.manifest;

  const originalDebuggerHost = manifest?.debuggerHost;

  const webviewDebuggerUri = originalDebuggerHost
    ? "http://" + originalDebuggerHost?.replace(/:\d+$/, ":5173")
    : "http://192.168.0.104:5173/";

  return webviewDebuggerUri;
}
