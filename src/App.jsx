import React, { useState } from 'react'
import {ethers} from "ethers";
import { abi } from "./abiconta/contactabi"
import { contactadd } from "./abiconta/contactyaddr"
function App() {
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
  const connectContract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    contractApple = new ethers.Contract(contactadd, abi, signer);
    console.log(signer,"signnn",contractApple)

    // const myData = await contractApple
    console.log(contractApple,"7777777777777777777777777777777777777777777777777777777777777777777777777777777");
    
    // setParagraph2(myData);
    //bonus:
    // console.log(contractApple.target);
  }

  return (
    <div>
      <button  onClick={connectMetamask}>metamask</button>
      <button onClick={connectContract}>Connect Contract</button>
      <p>{paragraph1}</p>
      <p>data: {paragraph2} mydata</p>
    </div>
  )
}

export default App
