import {ethers} from 'ethers'
import { useState } from 'react';
import AddBar from '../AddBar/AddBar';
import Connect from '../Connect/Connect';
import PropTypes from 'prop-types'; 


function ConnBar() {
    
    
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    
 const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');
            
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
                accountChangedHandler(result[0]);
          setConnButtonText('Connected')
        history.push('/add'); 
			})
			.catch(error => {
                setErrorMessage(error.message);
                
			});
            
		} else {
            console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}
    
    Connect.propTypes = {
        connectWalletHandler:PropTypes.func.isRequired,
    
      }
	const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount)
	}

  const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		window.location.reload();
	}

  const handleWalletDisconnect = () => {
    setDefaultAccount(null);
    setConnButtonText('Connect Wallet');
};


	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

    return (
      <>
      <AddBar defaultAccount={defaultAccount} />
      <Connect connectWalletHandler={connectWalletHandler} getAccountBalance={getAccountBalance}  connButtonText={connButtonText}/>
      </>
    )
  }
  
  export default ConnBar
  export { connectWalletHandler };
  