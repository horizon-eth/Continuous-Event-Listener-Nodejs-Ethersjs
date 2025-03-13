import { ethers } from "ethers";
import { PROVIDER_WSS_URL, TYPE, ADDRESS, EVENT_NAME, provider_wss_config, provider_wss } from "../config/config.js";
import { callback } from "../callback/callback.js";
import { getABI } from "../utils/utils.js";

export const reconnect = () => listen(new ethers.WebSocketProvider(PROVIDER_WSS_URL, undefined, provider_wss_config));

export const listen = (provider = provider_wss) => {
	const contract = new ethers.Contract(ADDRESS, getABI(TYPE), provider);
	contract.on(EVENT_NAME, (...args) => {
		const event = args.pop();
		callback(args, event);
	});

	provider.websocket.on("close", () => reconnect());
};
