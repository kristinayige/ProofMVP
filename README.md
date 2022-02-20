# 🅿️ Proof: Your on-chain work identity

***Turn your wallet into your web3 contribution portfolio***\
members can own their work, build up their contribution portfolio, and help organizers better understand and develop their organizations.\
We are addressing ***DAO*** recruiting and engagement issues through constructing an on-chain work identity, here is our MVP [demo](https://www.youtube.com/watch?v=A5jLbELm-Vk), and an annotated [walkthrough](https://docs.google.com/presentation/d/137Zc5FKnZxCuSjd7xnYg4RJO8goLhIkIOJSDEeEdJmc/edit?usp=sharing) of the Hackathon project.\
Please checkout our website for more information: https://www.myproof.xyz/

# 🪜 Installation
To use this app, you'll need to do the following:

1. Run `npm install` to download the `node_modules` folder.
2. Download the [dotenv package](https://www.npmjs.com/package/dotenv) in your project directory by running `npm install dotenv --save` in your terminal
3. Create a `.env` file in the root directory this `proof` by entering the following on your command line: `vim .env` and then add your Alchemy API Key and Pinata Key and Secret. Altogether, your `.env` file should look like so:

```
REACT_APP_PINATA_KEY = <pinata-key>
REACT_APP_PINATA_SECRET = <pinata-secret>
REACT_APP_ALCHEMY_KEY = https://eth-ropsten.alchemyapi.io/v2/<alchemy-key>
```
4. Run `npm start`in your terminal to open app in your browser at http://localhost:3000/.
5. Our smart contract is deployed on Ropsten Test Network, to view your minted Proof badge in your wallet, please switch to Ropsten Test Network and claim your NFT!
