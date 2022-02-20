import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";

enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
}
const POLLING_INTERVAL = 12000;
const chainId = 56;
const NETWORK_URL = process.env.REACT_APP_NETWORK_URL
  ? process.env.REACT_APP_NETWORK_URL
  : "https://bscrpc.com";
const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: NETWORK_URL },
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
});

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};
