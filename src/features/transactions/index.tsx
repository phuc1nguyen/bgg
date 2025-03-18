import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export function Transaction() {
  const transaction = {
    to: '0x27101536C3e0799cca10919E1804d3225830Ec4A' as const,
    value: parseEther('0.01'),
  };
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <>
      <button
        className="btn"
        onClick={() =>
          sendTransaction(transaction, {
            onSuccess: (hash) => {
              console.log(`Transaction sent: ${hash}`);
            },
          })
        }
      >
        {isPending ? (
          <>
            <span className="loading loading-spinner" />
            Sending...
          </>
        ) : (
          'Send 0.01 ETH'
        )}
      </button>
      {hash && (
        <div>
          Transaction Hash: {hash}
          {isLoading && <div>Waiting for confirmation...</div>}
          {isSuccess && <div>Transaction confirmed!</div>}
        </div>
      )}

      {error && <div>Error: {error.message}</div>}
    </>
  );
}
