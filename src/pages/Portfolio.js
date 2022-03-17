import './Portfolio.css';

const Portfolio = (props) => {
    console.log("here");
    return (
        <div class="main">

            <h1>My Proof Portolio</h1>

            <h2>PORTFOLIO</h2>
            <p>My DAO work portfolio page showcasing Proof of Work NFTs received.</p>

            <div class="row">
                <div class="column">
                    <div class="content">
                        <img src="https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png" alt="Gitcoin"></img>
                        <h3>Gitcoin Engineering Guild</h3>
                        <p>Integrate Sobol with discord and notion for Gitcoin</p>
                        <p><a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a></p>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <img src="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe" alt="Proof"></img>
                        <h3>Buidl Proof MVP</h3>
                        <p>Luanch Proof MVP with user edit and profile page</p>
                        <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <img src="https://pbs.twimg.com/profile_images/1461700151383400450/3Kwlnvl__400x400.png" alt="Gitcoin"></img>
                        <h3>Gitcoin Engineering Guild</h3>
                        <p>Integrate Sobol with discord and notion for Gitcoin</p>
                        <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <img src="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe" alt="Proof"></img>
                        <h3>Buidl Proof MVP</h3>
                        <p>Luanch Proof MVP with user edit and profile page</p>
                        <a href="https://gateway.pinata.cloud/ipfs/QmfQvb7QQG5DE6m8tFURE5Uuhu7dRU7TEaxRcSutmEPmQe">View Proof</a>
                    </div>
                </div>
            </div>

            <div class="content">
                <img src="/w3images/p3.jpg" alt="Bear"></img>
                <h3>Some Other Work</h3>
                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
            </div>


        </div>
    );
};

export default Portfolio;