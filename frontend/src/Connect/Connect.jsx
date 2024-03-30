
import { useState , useEffect} from 'react';
import logo from '../assets/logo.jpg'
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import metamask from '../assets/metamask.svg'
import coinbase from '../assets/coinbase.svg'
import phantom from '../assets/phantom.svg'
import bitski from '../assets/Bitski.svg'
import wallet from '../assets/WalletConnect.svg'
import {Spinner} from "@nextui-org/react";


function Connect() {


Connect.propTypes = {
    connectWalletHandler:PropTypes.func.isRequired,

  }

  const [visible , setVisible] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');
      setVisible(true)
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
        accountChangedHandler(result[0]);
        setConnButtonText('Connected')
        window.location.href = '/add'
      })
			.catch(error => {
        setErrorMessage(error.message);
        setVisible(false)
        
			});
      
		} else {
      console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
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
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  

        
        return (
          <>
      <div className='hero__page'>
      <div className="grid">
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>
        <div className="grid__background"></div>

      </div>
      <div className='heading__connect'>

       <div className='connect__div'>
       <div className='icon__container'>
         <img src={logo} alt="logo" />
       </div>
       <Button onPress={onOpen} style={{fontWeight:'500' , backgroundColor:'#4f46e5' , color:'white' , width:'120px'}}>{connButtonText}</Button>
       
       </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='sm' style={{width:'350px' , border:'1px solid #6b7280'}}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{backgroundColor:'#0a0a0a' , color:'white'}}>Connect a Wallet</ModalHeader>
              {visible ? <div style={{backgroundColor:'#0a0a0a' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' , paddingTop:'2rem'}}>
              <Spinner color="primary" style={{backgroundColor:'#0a0a0a'}} />
              <p style={{fontSize:'20px' , fontWeight:'500' , backgroundColor:'#0a0a0a' , color:'white' ,}}>Waiting for Connection</p>
              </div> : null}

              <ModalBody style={{backgroundColor:'#0a0a0a', color:'white'}}>
              {!visible ?  <div style={{display:'flex' , flexDirection:'column' , gap:'16px'}}>
               <div style={{display:'flex' , flexDirection:'row' , gap:'16px' , cursor:'pointer'}} onClick={() => { connectWalletHandler();  }}>
                 <img src={metamask} alt="metamask" />
                 <p style={{fontSize:'20px' , fontWeight:'500'}}>Metamask</p>
               </div>
               <div style={{display:'flex' , flexDirection:'row' , gap:'16px' , cursor:'pointer'}}>
                 <img src={coinbase} alt="metamask" />
                 <p style={{fontSize:'20px' , fontWeight:'500'}}>Coinbase</p>
               </div>
               <div style={{display:'flex' , flexDirection:'row' , gap:'16px' , cursor:'pointer'}}>
                 <img src={phantom} alt="metamask" />
                 <p style={{fontSize:'20px' , fontWeight:'500'}}>Phantom</p>
               </div>
               <div style={{display:'flex' , flexDirection:'row' , gap:'16px' , cursor:'pointer'}}>
                 <img src={bitski} alt="metamask" />
                 <p style={{fontSize:'20px' , fontWeight:'500'}}>Bitski</p>
               </div>
               <div style={{display:'flex' , flexDirection:'row' , gap:'16px' , cursor:'pointer'}}>
                 <img src={wallet} alt="metamask" />
                 <p style={{fontSize:'20px' , fontWeight:'500'}}>Wallet Connect</p>
               </div>
               </div> : null}

                
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
      
      </div>
      </div>
      </>
    )
  }
  
  export default Connect
  