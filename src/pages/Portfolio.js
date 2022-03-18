import './Portfolio.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0xfBB4044444E8ab9bc411E04b947fa5322470e8df"; // Proof (NNT) address
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


const Portfolio = (props) => {
    let data = useLocation();
    const wallet_address = data.state.wallet_address;
    const [badges, setBadges] = useState([]);
    const [proofBalance, setBalance] = useState(0); // For debugging
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    contract.defaultAccount = wallet_address;

    useEffect(async () => {
        const balance = await contract.methods.balanceOf(wallet_address).call();
        setBalance(balance);
        var badges = [];
        for (let i = 0; i < balance; i++) {
            console.log("i", i);
            const tokenId = await contract.methods.tokenOfOwnerByIndex(wallet_address, i).call()
            let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call();
            const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());
            console.log("id", tokenMetadataURI);
            badges.push(
                <div class="column">
                    <div class="content">
                        <img src={tokenMetadata["image"]} alt={tokenMetadata["description"]}></img>
                        <h3>{tokenMetadata["name"]}</h3>
                        <p>{tokenMetadata["description"]}</p>
                        <p><a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
                    </div>
                </div >
            )
        }
        setBadges(badges);
    }, []);

    // console.log("balance", proofBalance);
    // console.log("badge", badges);

    return (
        <div class="main">

            <h1>My Proof Portolio</h1>

            <h2>PORTFOLIO</h2>
            <p>My DAO work portfolio page showcasing Proof of Work NFTs received.</p>

            <div class="row">
                {badges}
            </div>

            <div class="content">
                <img src="/w3images/p3.jpg" alt="Bear"></img>
                <h3>Some Other Work</h3>
                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
            </div>


        </div>
    );
};

export default Portfolio;