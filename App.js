/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import RNPickerSelect from 'react-native-picker-select'

import Arrows from './assets/icons/arrows.svg'
import Money from './assets/icons/money.svg'
import MoneyActive from './assets/icons/money-active.svg'
import Weight from './assets/icons/weight.svg'

const App = () => {
  const [initialValue, setInitialValue] = useState(0)
  const [finalValue, setFinalValue] = useState(0)

  return (
    <SafeAreaView style={styles.view}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Conversor de</Text>
            <Text style={{ ...styles.title, ...styles.heavier }}>Moeda</Text>
          </View>
          <View style={styles.form}>
            <View>
              <View style={styles.inputContainer}>
                <RNPickerSelect
                  style={{
                    viewContainer: {
                      paddingRight: 20,
                      alignSelf: 'center',
                    },
                    inputIOS: {
                      fontFamily: 'Gilroy',
                      fontSize: 40
                    }
                  }}
                  placeholder={{ label: 'USD', value: null }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                      { label: 'BRL', value: 'brl' },
                      { label: 'CND', value: 'cnd' },
                      { label: 'EUR', value: 'eur' },
                  ]}
                />
                <TextInputMask type='money' value={initialValue} placeholder="0,00" style={styles.input} options={{ unit: '' }} onChangeText={text => setInitialValue(text)} />
              </View>
            </View>
            <Arrows style={{ alignSelf: 'center' }} />
            <View>
              <View style={styles.inputContainer}>
                <RNPickerSelect
                  style={{
                    viewContainer: {
                      paddingRight: 20,
                      alignSelf: 'center',
                    },
                    inputIOS: {
                      fontFamily: 'Gilroy',
                      fontSize: 40
                    }
                  }}
                  placeholder={{ label: 'USD', value: null }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                      { label: 'BRL', value: 'brl' },
                      { label: 'CND', value: 'cnd' },
                      { label: 'EUR', value: 'eur' },
                  ]}
                />
                <TextInput editable={false} placeholder="0,00" keyboardType="numeric" style={styles.input} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.navbar}>
          <View style={{ marginRight: 20 }}>
            <MoneyActive />
          </View>
          <Weight />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  form: {
    height: '40%',
    justifyContent: 'space-between'
  },
  converterTitle: {
    fontSize: 24,
    fontFamily: 'Gilroy',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row'
  },
  input:{
    flexGrow: 1,
    fontSize: 40,
    width: '50%',
    height: '100%',
    paddingVertical: 10,
    fontFamily: 'Gilroy'
  },
  navbar: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row'
  }
});

export default App;
