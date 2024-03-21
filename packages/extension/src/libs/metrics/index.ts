import { ProviderName } from "@/types/provider";
import { NetworkNames } from "@enkryptcom/types";
import Metrics from "./amplitude";
import {
  BuyEventType,
  DAppsEventType,
  NFTEventType,
  NetworkChangeEvents,
  SendEventType,
  SwapEventType,
} from "./types";

const metrics = new Metrics();

const trackNetworkSelected = (
  event: NetworkChangeEvents,
  options: { provider: ProviderName; network: NetworkNames }
) => {
  metrics.track("network", { event, ...options });
};

const trackSwapEvents = (
  event: SwapEventType,
  options: {
    network: NetworkNames;
    fromToken?: string;
    toToken?: string;
    swapProvider?: string;
    error?: string;
  }
) => {
  metrics.track("swap", { event, ...options });
};

const trackBuyEvents = (
  event: BuyEventType,
  options: {
    network: NetworkNames;
  }
) => {
  metrics.track("buy", { event, ...options });
};

const trackSendEvents = (
  event: SendEventType,
  options: {
    network: NetworkNames;
    error?: string;
  }
) => {
  metrics.track("send", { event, ...options });
};

const trackNFTEvents = (
  event: NFTEventType,
  options: {
    network: NetworkNames;
  }
) => {
  metrics.track("nft", { event, ...options });
};

const trackDAppsEvents = (
  event: DAppsEventType,
  options: {
    network: NetworkNames;
  }
) => {
  metrics.track("dapps", { event, ...options });
};
export {
  trackNetworkSelected,
  trackSwapEvents,
  trackBuyEvents,
  trackSendEvents,
  trackNFTEvents,
  trackDAppsEvents,
};
