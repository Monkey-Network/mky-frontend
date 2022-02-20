import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL ? process.env.REACT_APP_NETWORK_URL : "https://bscrpc.com"


export const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: { 56: NETWORK_URL },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
})
