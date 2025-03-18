import { useAccount } from 'wagmi';
import { Account } from './components/account';
import { WalletOptions } from './components/options';

function ConnectWallet() {
  const { isConnected } = useAccount();

  if (isConnected) return <Account />;

  return <WalletOptions />;
}

export default ConnectWallet;
