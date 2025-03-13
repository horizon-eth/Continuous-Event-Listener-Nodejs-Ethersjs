# Continuous Event Listener Node.js Ethers.js

A JavaScript project for real-time event listening using Ethers.js and Node.js runtime. This project provides high-performance event listening capabilities for ERC20 tokens and Uniswap V2/V3 pools.

## Features

-   Real-time event monitoring using WebSocket connections
-   Support for multiple contract types:
    -   ERC20 Tokens (Transfer, Approval events)
    -   Uniswap V2 Pools (Swap, Sync, Mint, Burn events)
    -   Uniswap V3 Pools (Swap, Flash, Mint, Burn, Collect events)
-   Contract interactions using Ethers.js
-   High-performance execution with Node.js runtime
-   Configurable through environment variables

## Prerequisites

-   [Node.js](https://nodejs.org/en) 21.x or higher
-   An Ethereum WebSocket provider URL

## Tech Stack

-   **Runtime**: [Node.js](https://nodejs.org) - v21.x or higher - JavaScript runtime
-   **Ethereum Client**: [Ethers.js](https://docs.ethers.org/v6) v6.13.5 - Ethereum Client interactions
-   **Smart Contract Standards**:
    -   [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts) v5.2.0
    -   [@uniswap/v2-core](https://www.npmjs.com/package/@uniswap/v2-core) v1.0.1
    -   [@uniswap/v3-core](https://www.npmjs.com/package/@uniswap/v3-core) v1.0.1
    -   [dotenv](https://www.npmjs.com/package/dotenv) v16.4.7

## Installation

1. Clone the repository:

```bash
git clone https://github.com/horizon-eth/continuous-event-listener-nodejs-ethersjs.git
cd continuous-event-listener-nodejs-ethersjs
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `example.env`:

```bash
cp example.env .env
```

4. Configure your environment variables in `.env`:

```env
PROVIDER_WSS_URL="your_websocket_provider_url"
TYPE="TOKEN"  # or "UNISWAPV2" or "UNISWAPV3"
ADDRESS="your_contract_address"
EVENT_NAME="Transfer"  # or other supported events
```

## Usage

Start the event listener:

```bash
npm start
```

### Supported Event Types

#### ERC20 Token Events

-   Transfer
-   Approval

#### Uniswap V2 Pool Events

-   Swap
-   Sync
-   Mint
-   Burn

#### Uniswap V3 Pool Events

-   Swap
-   Flash
-   Mint
-   Burn
-   Collect
-   IncreaseObservationCardinalityNext
-   SetFeeProtocol
-   CollectProtocol

## Configuration

The project uses environment variables for configuration. See `example.env` for all available options:

-   `PROVIDER_WSS_URL`: WebSocket provider URL for Ethereum network
-   `TYPE`: Contract type ("TOKEN", "UNISWAPV2", or "UNISWAPV3")
-   `ADDRESS`: Contract address to monitor
-   `EVENT_NAME`: Event name to listen for

## Performance Optimization

For optimal event listening performance:

1. Use a reliable WebSocket provider
2. Adjust polling intervals and other settings based on your needs:
    ```javascript
    export const provider_wss_config = {
      staticNetwork: ethers.Network.from(CHAIN_ID),
      // polling: true,
      // pollingInterval: 1000,
    };
    ```

## Development

The project uses JavaScript in the codebase. Key files:

-   `index.js`: Application entrypoint
-   `src/callback/callback.js`: Event processing logic
-   `src/config/config.js`: Application Configs
-   `src/listener/listener.js`: Event listening & reconnection logic
-   `src/utils/utils.js`: Utility functions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
