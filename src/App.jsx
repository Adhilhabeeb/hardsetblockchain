import React, { useState,useEffect } from 'react'
import {ethers, N} from "ethers";
import { abi } from "./abiconta/contactabi"
import { contactadd } from "./abiconta/contactyaddr"
function App() {
const [name, setname] = useState('')
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts[0]);
      setParagraph1(accounts[0]);
    }
  }
  let contractApple;
  let mydata;
  useEffect(() => {
    
    alert(name)
  }, [name])
  
  const connectContract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    contractApple = new ethers.Contract(contactadd, abi, signer);
    console.log(signer,"signnn",contractApple)

     mydata = await contractApple.myname()
    console.log(contractApple,"7777777777777777777777777777777777777777777777777777777777777777777777777777777");
    setname(mydata)
    // alert(mydata)
    //bonus:
    console.log(mydata,"mmm");
    
    // console.log(contractApple.target);
  }
  

  return (
    <div>
      <button  onClick={connectMetamask}>metamask</button>
      <button onClick={connectContract}>Connect Contract</button>
      <p>{paragraph1}</p>
      <p>data:  {name} </p>
    </div>
  )
}

export default App
