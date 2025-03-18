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
  const { chains, switchChain } = useSwitchChain();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const { data: balance } = useBalance({ address, chainId });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      <div>
        <b>Switch network</b>:
        {chains.map((chain) => (
          <button key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
            {chain.name}
          </button>
        ))}
      </div>
      <p>
        <b>Address</b>: {ensName ? `${ensName} (${address})` : address}
      </p>
      {balance && (
        <>
          <p>
            <b>Balance</b>
          </p>
          <ul>
            <li>Value: {balance.formatted}</li>
            <li>Symbols: {balance.symbol}</li>
            <li>Decimals: {balance.decimals}</li>
          </ul>
        </>
      )}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
