import "dotenv/config";

export default {
  extra: {
    BASE_API_URL: process.env.BASE_API_URL,
    BASE_API_PUSH_URL: process.env.BASE_API_PUSH_URL,
    API_KEY_NEWSAPI: process.env.API_KEY_NEWSAPI,
    API_KEY_NEWSDATA: process.env.PI_KEY_NEWSDATA,
    WEBVIEW_URL: process.env.WEBVIEW_URL,
    eas: {
      projectId: process.env.EXPO_PROJECT_ID,
      slug: "mementomori",
      name: "mementomori",
      projectId: "15b9274a-e9e5-4d30-8ef4-5d67cb6516cc"
    },
   
  },

  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "example.expo.googlesignin",
    googleServicesFile: "./google-services.json",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "example.expo.googlesignin",
    config: {
      googleSignIn: {
        reservedClientId: "<YOUR_REVERSED_IOS_CLIENT_ID>",
      },
    },
    googleServicesFile: "./GoogleService-Info.plist",
  },
};
