import { Platform, NativeModules } from 'react-native'
import * as RNLocalize from "react-native-localize"
import _ from 'lodash'
import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

const normalizeTranslate = {
  // Responses from RNLocalize
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  // Responses from NativeModules (fallback)
  'en_US': 'en_US',
  'pt_BR': 'pt_BR',
  'pt_US': 'pt_BR',
}

const getLanguageByDevice = () => {
  const locales = RNLocalize.getLocales()

  if (_.isEmpty(locales)) {
    // Fallback
    return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier
  }

  return _.get(locales, '[0].languageTag', 'en')
}

I18n.translations = {
  'en_US': en,
  'pt_BR': pt,
}

const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)

  iHaveThisLanguage
    ? I18n.locale = translateNormalize
    : I18n.locale = 'en_US'
}

setLanguageToI18n()

export const translate = key => I18n.t(key)
