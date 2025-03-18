import { Account } from './components/account';
import { WalletOptions } from './components/options';

function ConnectWallet({ isConnected }: { isConnected: boolean }) {
  if (isConnected) return <Account />;

  return <WalletOptions />;
}

export default ConnectWallet;
