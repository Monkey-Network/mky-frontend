import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'

const connectorLocalStorageKey = "connectorIdv2";
enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc

        resolve()
      },
    }),
  )

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorIdv2 = window.localStorage.getItem(connectorLocalStorageKey)
    const connectorId =  connectorIdv2 === "injected" ? ConnectorNames.Injected : connectorIdv2 === "walletConnect" ? ConnectorNames.WalletConnect : undefined

    if (connectorId) {
      const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

      // Currently BSC extension doesn't always inject in time.
      // We must check to see if it exists, and if not, wait for it before proceeding.
      if (!isBinanceChainDefined) {
        _binanceChainListener().then(() => login(connectorId))

        return
      }

      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
