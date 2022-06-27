import React, { Component } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from "@metamask/detect-provider";
// import './style.scss';
import Metamask from '../../Images/Metamask.png'


class App extends Component {

    async componentDidMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
        await this.setListeners()
    }

    //detect Provider
    async loadWeb3() {
        const provider = await detectEthereumProvider();
        if (provider) {
            console.log('ethereum wallet is connected')
            window.web3 = new Web3(provider)
        } else {
            console.log('no ethereum wallet detected')
        }
    }

    async loadBlockchainData() {
        if (!window.ethereum) {
            // отправить загружать и устанавливать метамаск
            // window.location.assign("https://metamask.app.link/dapp//run2moon.online")
            return
        }
        // get accounts
        await window.ethereum.send("eth_requestAccounts");
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        console.log("ACSS", accounts);

        const networkId = await web3.eth.net.getId()

        console.log("networkId", networkId);

        // switch chain to ethereum
        // await ethereum.request({


        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x1' }],
        });

        // console.log("ID", );
        // web3.eth.net.getId().then("chain id : " + console.log)
        // web3.eth.net.getId().then(res=> console.log( "RESS", res))

    }

    async setListeners() {
        if (!window.ethereum) {
            // window.location.assign("https://metamask.app.link/dapp//run2moon.online")
            return
        }

        window.ethereum.on('accountsChanged', async () => {
            var connected = window.ethereum && window.ethereum.isMetaMask
            var selectedAddress = window.ethereum.selectedAddress
            if (selectedAddress != null) {
                console.log('accountsChanged - changed')
                this.setState({ account: selectedAddress })
                // } else if (connected) {
                // 	await window.ethereum.send("eth_requestAccounts")
                // 	const web3 = window.web3
                // 	const accounts = await web3.eth.getAccounts()
                // 	this.setState({ account: accounts[0] })
            } else {
                console.log('accountsChanged - disconnected')
                this.setState({ account: '', contract: null, totalSupply: 0 })
            }
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            contract: null,
            totalSupply: 0
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
    }

    handleLoginClick() {
        this.loadBlockchainData();
    }


    render() {
        function LoginButton(props) {
            return (
                <div onClick={props.onClick} className='btn btn-outline-warning btn-sm '>
                    {/* Sign in with Metamask */}
                    Personal account 
                </div>
            );
            
        }

        let wallet_button;
        if (this.state.account == '') {
            wallet_button = <LoginButton onClick={this.handleLoginClick} />
        } else {
            wallet_button = <small className='text-white'>{this.state.account}</small>
        }

        return (

            <div className="metamaskButton">
                <img src={Metamask} alt="" />
                <div className="metamaskButton-text">
                    {/* Personal account */}
                    {wallet_button}
                </div>
            </div>





            // <div className='container-filled'>
            // 	<nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
            // 		<div className='navbar-brand col-sm-3 col-md-3 mr-0' style={{ color: 'white' }}>
            // 			Fantastic ABS
            // 		</div>
            // 		<ul className='navbar-nav px-3'>
            // 			<li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
            // 				{wallet_button}
            // 			</li>
            // 		</ul>
            // 	</nav>

            // 	<div className='container-fluid mt-1'>
            // 		<div className='row'>
            // 		</div>
            // 	</div>

            // </div>
        )
    }
}

export default App;
