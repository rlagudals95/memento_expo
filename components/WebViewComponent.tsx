import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function WebViewComponent() {
    return (
        <WebView
            style={styles.container}
            originWhitelist={['*']}
            source={{ uri: 'https://www.naver.com' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      width: 100
    },
  });
  
