import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
// import { Provider } from 'react-redux'
// import { ModalProvider } from '@woonkly/wdefi-uikit'
// import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
// import store from './state'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}

// import { ThemeContextProvider } from './ThemeContext'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Web3ProviderNetwork getLibrary={getLibrary}> */}
        {children}
      {/* </Web3ProviderNetwork> */}
    </Web3ReactProvider>
  )
}

export default Providers
