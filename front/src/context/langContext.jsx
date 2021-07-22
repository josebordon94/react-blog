import React, { useState } from 'react'
import spanishMsg from '../lang/es-AR.json'
import englishMsg from '../lang/en-US.json'
import { IntlProvider } from 'react-intl'

const langContext = React.createContext()
const LangProvider = ({ children }) => {
  let defaultLocale
  let defaultMessages
  const lang = localStorage.getItem('lang')
  if (lang) {
    defaultLocale = lang
    switch (lang) {
      case 'es-AR':
        defaultMessages = spanishMsg
        break
      case 'en-US':
        defaultMessages = englishMsg
        break
      default:
        defaultLocale = 'es-AR'
        defaultMessages = spanishMsg
        break
    }
  }

  const [messages, setMessages] = useState(defaultMessages)
  const [locale, setLocale] = useState(defaultLocale)

  const setLanguage = (lang) => {
    switch (lang) {
      case 'es-AR':
        setMessages(spanishMsg)
        setLocale('es-AR')
        localStorage.setItem('lang', 'es-AR')
        break
      case 'en-US':
        setMessages(englishMsg)
        setLocale('en-US')
        localStorage.setItem('lang', 'en-US')
        break
      default:
        setMessages(spanishMsg)
        setLocale('es-AR')
        localStorage.setItem('lang', 'es-AR')
        break
    }
  }
  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}
export { LangProvider, langContext }
