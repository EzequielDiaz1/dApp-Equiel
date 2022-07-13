import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
} from "../../smart_contract/utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;
