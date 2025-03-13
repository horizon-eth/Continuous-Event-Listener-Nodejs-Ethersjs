import { listen } from "./src/listener/listener.js";

const main = async () => {
	try {
		listen();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();
