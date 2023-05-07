import Constants from "expo-constants";

export function getMetroServerUrl() {
  // Metro 서버의 주소를 가져오기 위해 "manifest" 객체를 먼저 가져옵니다.
  const manifest = Constants.manifest;

  const originalDebuggerHost = manifest?.debuggerHost;

  const webviewDebuggerUri = originalDebuggerHost
    ? "http://" + originalDebuggerHost?.replace(/:\d+$/, ":3000")
    : "http://192.168.0.101:3000";

  return webviewDebuggerUri;
}
