import React from "react";
import { useWeb3Context } from "~/core/context/";

interface ConnectProps {
  connect: (() => Promise<void>) | null;
}
const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <button
      id="wallet-connect"
      className="rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black"
      onClick={connect}
    >
      Connect
    </button>
  ) : (
    <button
      id="wallet-connect"
      className="rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black"
    >
      Loading...
    </button>
  );
};

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null;
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <button
      id="wallet-connect"
      className="rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black"
      onClick={disconnect}
    >
      Disconnect
    </button>
  ) : (
    <button
      id="wallet-connect"
      className="rounded-full border-0 bg-dark-500 bg-opacity-50 px-4 py-2 font-medium text-white hover:bg-dark-500 dark:bg-white dark:text-black"
    >
      Loading...
    </button>
  );
};

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useWeb3Context();

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  );
}
