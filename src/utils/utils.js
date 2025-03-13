import ERC20ABI from "@openzeppelin/contracts/build/contracts/ERC20.json" with { type: "json" };
import UniswapV2PoolABI from "@uniswap/v2-core/build/IUniswapV2Pair.json" with { type: "json" };
import UniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json" with { type: "json" };

export const getABI = (type) => {
	if (type === "TOKEN") return ERC20ABI.abi;
	if (type === "UNISWAPV2") return UniswapV2PoolABI.abi;
	if (type === "UNISWAPV3") return UniswapV3PoolABI.abi;
	return [];
};
