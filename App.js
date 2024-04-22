import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const handleLogoPress = () => {
    const url = 'http://nodebs.com/'; // Yönlendirilecek linki buraya yazın
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image
          source={require('./assets/SCANLIST-LOGO.jpg')} // assets klasörüne eklenen logo
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
  },
});
