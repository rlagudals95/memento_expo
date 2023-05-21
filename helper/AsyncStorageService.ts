import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageService {
  static async setData(key: string, value: any) {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  static async getData(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const data = JSON.parse(value);
        return data;
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }
}

export default new AsyncStorageService();
