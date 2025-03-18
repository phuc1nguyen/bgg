import {
  useAccount,
  useBalance,
  useChainId,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
} from 'wagmi';

export function Account() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { chains, switchChain, isPending } = useSwitchChain();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const { data: balance } = useBalance({ address, chainId });
  const { disconnect } = useDisconnect();
  const currentChain = chains.find((chain) => chain.id === chainId);

  return (
    <>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {currentChain && <p>Current network: {currentChain.name}</p>}
      <div className="flex items-center">
        Switch network:
        <div className="space-x-2">
          {chains.map((chain) => (
            <button
              key={chain.id}
              className="btn"
              onClick={() => switchChain({ chainId: chain.id })}
            >
              {isPending && <span className="loading loading-spinner"></span>}
              {chain.name}
            </button>
          ))}
        </div>
      </div>
      <p>Address: {ensName ? `${ensName} (${address})` : address}</p>
      {balance && <p>Balance: {balance.formatted}</p>}
      <button className="btn btn-soft btn-error mt-8" onClick={() => disconnect()}>
        Disconnect
      </button>
    </>
  );
}
