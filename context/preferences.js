import React, { useState, useContext, createContext, useCallback, useEffect } from 'react'

import * as AsyncStorage from '../helpers/storage'

const PreferencesContext = createContext()

const PreferencesContextProvider = ({ children }) => {
  const [exchangeFrom, setExchangeFrom] = useState('USD')
  const [exchangeTo, setExchangeTo] = useState('EUR')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      AsyncStorage.getExchangeFrom().then(value => value && setExchangeFrom(value)),
      AsyncStorage.getExchangeTo().then(value => value && setExchangeTo(value))
    ])
    .then(() => setLoading(false))
  }, [])

  const setFrom = useCallback(value => {
    AsyncStorage.setExchangeFrom(value)
    setExchangeFrom(value)
  })

  const setTo = useCallback(value => {
    AsyncStorage.setExchangeTo(value)
    setExchangeTo(value)
  })

  return (
    <PreferencesContext.Provider
      value={{
        exchangeFrom,
        setExchangeFrom: setFrom,
        exchangeTo,
        setExchangeTo: setTo,
        loading
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

const usePreferencesContext = () => useContext(PreferencesContext)

export {
  PreferencesContextProvider,
  usePreferencesContext
}
