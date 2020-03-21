import AsyncStorage from '@react-native-community/async-storage'

const EXCHANGE_FROM_KEY = '@ExchangeFrom'
const EXCHANGE_TO_KEY = '@ExchangeTo'

export const setExchangeFrom = async value => {
  try {
    await AsyncStorage.setItem(EXCHANGE_FROM_KEY, value)
  } catch (e) {
    console.log(e)
  }
}

export const getExchangeFrom = async () => {
  try {
    const value = await AsyncStorage.getItem(EXCHANGE_FROM_KEY)

    if (value !== null) {
      return value
    }
  } catch(e) {
    console.log(e)
  }
}

export const setExchangeTo = async value => {
  try {
    await AsyncStorage.setItem(EXCHANGE_TO_KEY, value)
  } catch (e) {
    console.log(e)
  }
}

export const getExchangeTo = async () => {
  try {
    const value = await AsyncStorage.getItem(EXCHANGE_TO_KEY)

    if (value !== null) {
      return value
    }
  } catch(e) {
    console.log(e)
  }
}
