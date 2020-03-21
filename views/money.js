import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import _ from 'lodash'
import { TextInputMask } from 'react-native-masked-text'
import RNPickerSelect from 'react-native-picker-select'

import { usePreferencesContext } from '../context/preferences'
import { addZeroes } from '../helpers/utils'
import { CURRENCY_LABEL } from '../const/labels'
import Arrows from '../assets/icons/arrows.svg'

const PICKER_STYLE = {
  viewContainer: {
    paddingRight: 20,
    alignSelf: 'center',
  },
  inputIOS: {
    fontFamily: 'Gilroy',
    fontSize: 40,
    color: '#000'
  },
  inputAndroid: {
    fontFamily: 'Gilroy',
    fontSize: 40,
    color: '#000'
  }
}

const MASK_OPTIONS = {
  unit: '',
  separator: '.',
  delimiter: ''
}

const TO_SELECT = ({ key, value, label, rate }) => ({ key, label, value, displayValue: true, rate })

const MoneyView = () => {
  const {
    exchangeFrom,
    setExchangeFrom,
    exchangeTo,
    setExchangeTo,
    loading,
  } = usePreferencesContext()
  const valueRef = useRef()
  const pickerFromRef = useRef()
  const pickerToRef = useRef()
  const [initialValue, setInitialValue] = useState('0.00')
  const [finalValue, setFinalValue] = useState('0.00')
  const [rates, setRates] = useState([])
  const toggleExchanges = useCallback(() => {
    const from = exchangeFrom
    const to = exchangeTo

    setExchangeFrom(to)
    setExchangeTo(from)
  })

  useEffect(() => {
    const rate = _.get(rates.find(r => r.value === exchangeTo), 'rate', 1)
    const rawValue = valueRef.current && valueRef.current.getRawValue() || 0

    setFinalValue(`${(rawValue * rate) || '0.00'}`)
  }, [rates, initialValue, exchangeFrom, exchangeTo])

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${exchangeFrom}`)
    .then(res => res.json())
    .then(res => {
      let ratesArray = []

      // Workaround due to issue on API
      // When you pass EUR as parameter
      // It doesn't return the EUR key on rates response
      let rates = res.rates
      if (exchangeFrom === 'EUR') {
        rates = { ...rates, 'EUR': 1 }
      }

      // Made this to order by currency label, not by the currency code
      Object.keys(rates).forEach(key => {
        ratesArray.push({
          value: key,
          label: `${key} - ${CURRENCY_LABEL[key]}`,
          name: CURRENCY_LABEL[key],
          rate: rates[key]
        })
      });

      return _.map(_.orderBy(ratesArray, ['name']), TO_SELECT)
    })
    .then(rates => setRates(rates))
  }, [exchangeFrom])

  return !loading && !_.isEmpty(rates) ? (
    <View style={styles.form}>
      <View>
        <View style={styles.inputContainer}>
          <RNPickerSelect
            ref={pickerFromRef}
            style={PICKER_STYLE}
            placeholder={{}}
            onValueChange={value => setExchangeFrom(value)}
            value={exchangeFrom}
            items={rates}
            useNativeAndroidPickerStyle={false}
          />
          <TextInputMask
            ref={valueRef}
            type="money"
            value={initialValue}
            placeholder="0,00"
            style={styles.input}
            options={MASK_OPTIONS}
            onChangeText={text => setInitialValue(text)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={toggleExchanges}>
        <Arrows style={{ alignSelf: 'center' }} />
      </TouchableOpacity>
      <View>
        <View style={styles.inputContainer}>
          <RNPickerSelect
            ref={pickerToRef}
            style={PICKER_STYLE}
            placeholder={{}}
            onValueChange={value => setExchangeTo(value)}
            value={exchangeTo}
            items={rates}
            useNativeAndroidPickerStyle={false}
          />
          <TextInputMask
            type="money"
            editable={false}
            value={addZeroes(finalValue)}
            style={styles.input}
            options={MASK_OPTIONS}
          />
        </View>
      </View>
    </View>
  ) : <ActivityIndicator size="large" color="#0000ff" />
}

const styles = StyleSheet.create({
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
    color: '#000',
    fontFamily: 'Gilroy'
  }
});

export default MoneyView
