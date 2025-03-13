import { ethers } from "ethers";
import { configDotenv } from "dotenv";

configDotenv();

export const PROVIDER_WSS_URL = process.env.PROVIDER_WSS_URL;
export const TYPE = process.env.TYPE;
export const ADDRESS = process.env.ADDRESS;
export const EVENT_NAME = process.env.EVENT_NAME;

if (!PROVIDER_WSS_URL || !TYPE || !ADDRESS || !EVENT_NAME) throw new Error("Missing required environment variables: PROVIDER_WSS_URL, TYPE, ADDRESS, EVENT_NAME", PROVIDER_WSS_URL, TYPE, ADDRESS, EVENT_NAME);

export const provider_wss_config = {
	staticNetwork: ethers.Network.from(1),
	// polling: true,
	// pollingInterval: 1000,
};

export const provider_wss = new ethers.WebSocketProvider(PROVIDER_WSS_URL, undefined, provider_wss_config);
