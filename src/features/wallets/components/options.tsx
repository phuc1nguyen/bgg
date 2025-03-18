import { useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect, isPending } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <button key={connector.uid} className="btn" onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
      {isPending && <p>connecting...</p>}
    </>
  );
}
