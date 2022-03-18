import { useEffect, useState } from "react";
import {
    mintNFT,
} from "./util/interact.js";
import './user.css';



const MyMinter = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    console.log(props.imgUrl);
    console.log(props.receiver);
    console.log(props.txn);
    const url = props.imgUrl;
    const receiver = props.receiver;
    const transaction = props.txn
    const onMintPressed = async () => {
        const { success, status } = await mintNFT(url, name, description, receiver);
        setStatus(status);
        if (success) {
            setName("");
            setDescription("");
        }
    };

    return (

        <div className="NewMinter">
            <br></br>
            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">
                        <h6>💪 Contribution record</h6>
                        <h2 id="numtokens">{Math.round(transaction.value * 100) / 100}</h2>
                        <h2>{transaction.asset}</h2>
                        <h3>Block {transaction.blockNum}</h3>
                    </div>
                    <div class="mint">
                        <form>
                            <h7>TXN hash: {transaction.hash}</h7>
                            <h3 id="firstrow">✍️ Work Description: </h3>
                            <input
                                type="text"
                                placeholder="e.g. Solidity Programming! "
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <h3>🤔 Set NFT Name: </h3>
                            <input
                                type="text"
                                placeholder="e.g. My Work NFT!"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </form>
                        <button class='btn' id="mintButton" onClick={onMintPressed}>
                            Mint NFT
                        </button>
                        <p id="status" style={{ color: "red" }}>
                            {status}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyMinter;