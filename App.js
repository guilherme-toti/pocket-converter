/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { PreferencesContextProvider } from './context/preferences'

// import MoneyActive from './assets/icons/money-active.svg'
// import Weight from './assets/icons/weight.svg'
// import Money from '../assets/icons/money.svg'

import MoneyView from './views/money'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <PreferencesContextProvider>
      <SafeAreaView style={styles.view}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>Conversor de</Text>
                <Text style={{ ...styles.title, ...styles.heavier }}>Moeda</Text>
              </View>
              <MoneyView />
            </View>
            {/* <View style={styles.navbar}>
              <View style={{ marginRight: 20 }}>
                <MoneyActive />
              </View>
              <Weight />
            </View> */}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PreferencesContextProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 40,
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Gilroy',
    fontSize: 32,
    fontWeight: '200',
  },
  heavier: {
    fontWeight: 'bold',
    marginBottom: '30%'
  },
  // navbar: {
  //   backgroundColor: '#FFF',
  //   borderRadius: 20,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 6,
  //   },
  //   paddingHorizontal: 20,
  //   paddingVertical: 25,
  //   shadowOpacity: 0.37,
  //   shadowRadius: 7.49,
  //   elevation: 12,
  //   position: 'absolute',
  //   bottom: 40,
  //   alignSelf: 'center',
  //   flexDirection: 'row'
  // }
});

export default App;
