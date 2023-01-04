import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { useRouter } from "next/router";

//internal import
import { VotingAddress, VotingAddressABI } from "./constants";

const client = ipfsHttpClient("https://ipfs.infura.io:5001");

const projectId = "2JoHs0VJ4L0T2TGad076wImWFRV";
const projectSecretKey = "50880fd2a6d73d29e62d346ee40e72ae";


const fetchContract = (signerOrProvider) =>
  new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider);

export const VotingContext = React.createContext();

export const VotingProvider = ({children}) => {
 const votingTitle = 'My first Smart Contract app';
 return (<VotingContext.Provider value={{votingTitle}}>{children}</VotingContext.Provider>);
};

