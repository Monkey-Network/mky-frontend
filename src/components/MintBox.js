import React, { useCallback, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button, Flex } from "rebass";
import BigNumber from "bignumber.js/bignumber";
import { ethers } from "ethers";
import {
  useMonkeyContract,
  useMonkeyContractForRead,
  useTokenContract,
} from "../hooks/useContract";
import { useActiveWeb3React } from "../hooks";
import { MONKEY_ADDRESS } from "../constants";
import Tooltip from "@mui/material/Tooltip";
const MintBox = ({ poppup, setPoppup, tokenBalance }) => {
  const [amount, setAmount] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const [busdBalance, setBusdBalance] = useState(0);
  const [claimableAmount, setClaimableAmount] = useState();
  const [apy, setApy] = useState(0);
  const [stakedAmount, setStakedAmount] = useState();
  const [total, setTotal] = useState();
  const [referer, setReferer] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const queryParams = new URLSearchParams(window.location.search);
  const ref = queryParams.get("ref");
  const localRef = window.localStorage.getItem("ref");
  if (ref && ref != referer) {
    setReferer(ref);
    window.localStorage.setItem("ref", ref);
  } else if (localRef && localRef != referer) {
    setReferer(localRef);
  }

  const handleInput = (event) => {
    setAmount(
      event.target.value > busdBalance ? busdBalance : event.target.value
    );
  };

  const { account, library, chainId } = useActiveWeb3React();
  const monkeyContract = useMonkeyContract();
  const monkeyContractForRead = useMonkeyContractForRead();
  const busdContract = useTokenContract(
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  );
  useEffect(async () => {
    if (account) {
      const userAllowance = await busdContract.allowance(
        account,
        MONKEY_ADDRESS
      );
      setAllowance(
        new BigNumber((userAllowance / 10 ** 18).toString()).toNumber()
      );
      const userBalance = await busdContract.balanceOf(account);
      setBusdBalance(
        new BigNumber((userBalance / 10 ** 18).toString()).toNumber()
      );
      const stakedAmount = await monkeyContract.getUserBUSDStaked(account);
      setStakedAmount(
        new BigNumber((stakedAmount / 10 ** 18).toString()).toNumber()
      );
      const claimableAmount = await monkeyContract.getUserUnclaimedTokens_M(
        account
      );
      setClaimableAmount(
        new BigNumber((claimableAmount / 10 ** 18).toString()).toNumber()
      );
    }
    if (monkeyContractForRead) {
      const apy = await monkeyContractForRead.methods.getAPY_M().call();
      setApy(new BigNumber(apy.toString()).toNumber());
      const total = await monkeyContractForRead.methods
        .totalBUSDStaked()
        .call();
      setTotal(new BigNumber((total / 10 ** 18).toString()).toNumber());
    }
  });

  const handleApprove = useCallback(async () => {
    busdContract.approve(MONKEY_ADDRESS, ethers.constants.MaxUint256);
  });

  const handleMax = useCallback(() => {
    setAmount(busdBalance);
  });

  const handleStake = useCallback(async () => {
    BigNumber.config({
      EXPONENTIAL_AT: 1000,
      DECIMAL_PLACES: 80,
    });
    monkeyContract.stakeBUSD(
      referer,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
    );
  }, [account, library, chainId, amount, referer]);

  const handleClaim = useCallback(async () => {
    monkeyContract.claimToken_M();
  }, [account, library, chainId]);

  const handleCompound = useCallback(async () => {
    monkeyContract.compoundToken_M();
  }, [account, library, chainId]);

  return (
    <MonBox>
      <h2>
        MINT $MONKEY&nbsp;
        <Tooltip
          enterTouchDelay={0}
          title="You will earn $MONKEY tokens as a percentage of BUSD invested irrespective of the $MONKEY Price.
          Example: If you invest 100 BUSD, you will receive 1.5% MONKEY TOKEN daily."
        >
          <svg
            viewBox="0 0 24 24"
            color="#ffffff"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
          </svg>
        </Tooltip>
      </h2>
      <p>Mint $MONKEY by staking your $BUSD</p>
      <p>You can stake as many times as you want</p>
      <p>You cannot unstake your $BUSD</p>
      <br></br>
      <FeatureText>
        <span>APR (Day/Year)</span>
        <span>
          <b>
            {(apy / 365).toLocaleString() ?? "_"}% / {apy ?? "_"}%
          </b>
        </span>
      </FeatureText>
      <FeatureText>
        <span>My Stake</span>
        <span>
          <b>
            {stakedAmount != undefined ? stakedAmount.toLocaleString() : "_"} $
          </b>
        </span>
      </FeatureText>
      <FeatureText>
        <span>Total Staked</span>
        <span>
          <b>{total != undefined ? total.toLocaleString() : "_"} $</b>
        </span>
      </FeatureText>
      <FeatureText>
        <span>Monkey minted</span>
        <span>
          <b>
            {claimableAmount != undefined
              ? claimableAmount.toLocaleString()
              : "_"}
          </b>
        </span>
      </FeatureText>
      <br></br>
      <ClaimWrapper>
        <Border></Border>
        <StyledButton
          color={"rgb(80,43,133)"}
          disabled={!account || claimableAmount == 0}
          onClick={handleClaim}
        >
          Claim&nbsp;
          <Tooltip title="75% monkeys goes to your wallet , and 25% goes to the monkey camp.">
            <svg
              viewBox="0 0 24 24"
              color="#ffffff"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
            </svg>
          </Tooltip>
        </StyledButton>
        <Border></Border>
        <StyledButton
          color={"rgb(80,43,133)"}
          disabled={!account || claimableAmount == 0}
          onClick={handleCompound}
        >
          Compound&nbsp;
          <Tooltip title="75% monkeys goes to stake monkey balance and 25% goes to the monkey camp.">
            <svg
              viewBox="0 0 24 24"
              color="#ffffff"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
            </svg>
          </Tooltip>
        </StyledButton>
        <Border></Border>
      </ClaimWrapper>
      <br></br>
      <ApplyInput>
        {account ? (
          <>
            {allowance ? (
              <>
                <input
                  type="number"
                  placeholder="Amount to stake"
                  value={amount}
                  onInput={handleInput}
                />
                <ApplyBtns>
                  <Link to="#" onClick={handleMax}>
                    Max
                  </Link>
                  <Link
                    to="#"
                    aria-disabled={amount == 0}
                    onClick={handleStake}
                  >
                    Stake
                  </Link>
                </ApplyBtns>
              </>
            ) : (
              <>
                <ApproveButton>
                  <Link to="#" onClick={handleApprove}>
                    Approve
                  </Link>
                </ApproveButton>
              </>
            )}
          </>
        ) : (
          <>
            <ApproveButton>
              <Link
                to="#"
                onClick={() => {
                  setPoppup(true);
                }}
              >
                Connect Wallet
              </Link>
            </ApproveButton>
          </>
        )}
      </ApplyInput>
      <p>Wallet Balance: {busdBalance.toFixed(3)} $BUSD</p>
    </MonBox>
  );
};

export default MintBox;

const Border = styled.div`
  width: 5%;
`;
const ClaimWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  margin-bottom: 65px;
  svg {
    fill: rgb(80, 43, 133);
  }
  @media screen and (max-width: 1190px) {
    margin-bottom: 0px;
    display: block;
    button {
      width: 90%;
      margin: 10px;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 50%;
  margin: 5px 10px;
  padding: 5px 10px;
  height: 40px;
  cursor: pointer;
`;

const ApplyInput = styled.div`
  display: flex;
  margin-bottom: 5px;
  input {
    height: 50px;
    margin-left: 20px;
    margin-right: 5px;
    display: block;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: rgb(148, 148, 148);
    font-size: 1.1em;
    text-align: center;
    -webkit-letter-spacing: -0.4px;
    -moz-letter-spacing: -0.4px;
    -ms-letter-spacing: -0.4px;
    letter-spacing: -0.4px;
    border-radius: 5px;
    width: 100%;
    font-family: "GalanoGrotesqueAlt";
    border: none;
    padding: 8px;
    &::placeholder {
      font-size: 1em;
      font-family: "GalanoGrotesqueAlt";
    }
    &:hover,
    &::focus,
    &::focus-visible {
      outline: none;
    }
  }
  input:focus-visible {
    outline: none;
  }

  @media screen and (max-width: 960px) {
    margin: 0 auto;
    margin-bottom: 5px;
    input {
      font-size: 16px;
      padding: 7px 5px 5px 5px;
      line-height: 24px;
      &::placeholder {
        font-size: 16px;
      }
    }
  }
`;
const ApplyBtns = styled.div`
  display: flex;
  a {
    width: 80px;
    margin: 0 5px;
    padding: 0.5em 0em;
    border-style: none;
    border-width: 2px;
    border-color: rgb(255, 255, 255);
    border-radius: 5px;
    background-color: #d97d3e;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0em;
    text-transform: none;
    color: #fff;
    display: inline-block;
    &:hover {
      opacity: 0.75;
    }
  }

  a:last-of-type {
    margin-right: 20px;
  }

  @media screen and (max-width: 960px) {
    a {
      font-size: 19px;
    }
    display: flex;
    justify-content: space-between;
  }
`;

const ApproveButton = styled.div`
  width: 80%;
  margin: 0 auto;
  a {
    width: 100%;
    margin: 0 5px;
    padding: 0.5em 0em;
    border-style: none;
    border-width: 2px;
    border-color: rgb(255, 255, 255);
    border-radius: 5px;
    background-color: #d97d3e;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0em;
    text-transform: none;
    color: #fff;
    display: inline-block;
    &:hover {
      opacity: 0.75;
    }
  }
`;

const MonBox = styled.div`
  text-align: center;
  // display: flex;
  width: 100%;
  min-height: 500px;
  margin-bottom: 0em;
  padding: 1em 0em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1.9px;
  border-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  background-color: rgba(33, 37, 41, 0.9);
  color: rgb(28, 28, 28);
  text-align: center;

  h2 {
    margin-top: 20px;
    margin-bottom: 0;
    color: rgb(255, 255, 255);
    font-size: 1.8em;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.02em;
    text-transform: none;
    margin-bottom: 0.1em;
    svg {
      fill: #ffffff;
    }
  }

  p {
    color: rgb(214, 214, 214);
    font-size: 0.9em;
  }

  @media screen and (max-width: 960px) {
    h2 {
      font-size: 2.2em;
      margin-bottom: 10px;
    }
    padding: 0em 0em;
  }
`;

const FeatureText = styled.div`
  padding: 5px 0;
  display: flex;
  background-color: #d97d3e;
  span {
    width: 50%;
  }
`;
