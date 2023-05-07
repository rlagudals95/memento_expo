import * as Network from 'expo-network';

export async function getIPAddress() {
  const ipAddress = await Network.getIpAddressAsync();
  console.log('in module :', ipAddress)
  return ipAddress;
}