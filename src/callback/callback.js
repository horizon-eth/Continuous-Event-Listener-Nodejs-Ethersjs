export const callback = async (args, event) => {
	try {
		const {
			log: { transactionHash, blockHash, blockNumber, data },
		} = event;

		console.log(transactionHash, blockHash, blockNumber, data);

		console.log(
			"blockHash:",
			blockHash,
			"blockNumber:",
			blockNumber,
			"transactionHash:",
			transactionHash,
			"data:",
			data,
			"args:",
			args,
			"date:",
			new Date().toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).replace(",", "")
		);

		/* Add Your Logic */
		/* Add Your Logic */
		/* Add Your Logic */
	} catch (error) {
		throw error;
	}
};
