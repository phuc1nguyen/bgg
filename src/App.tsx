import { useAccount } from 'wagmi';
import ConnectWallet from './features/wallets';

function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <h1 className="font-bold text-4xl py-4 text-center">Wagmi playground</h1>

      <main className="w-[80%] mx-auto leading-loose">
        <p className="pb-2 font-bold text-lg">
          {isConnected ? 'Your wallet info' : 'Connect to your wallet'}
        </p>
        <ConnectWallet isConnected={isConnected} />
      </main>
    </>
  );
}

export default App;
