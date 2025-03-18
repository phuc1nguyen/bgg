import { http, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';

// To support Wagmi strong type safety across React contexts
declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [mainnet, polygon],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});
