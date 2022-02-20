import React from "react";
import styled from "styled-components";
import { MONKEY_ADDRESS } from "../constants";
const Guide = () => {
  return (
    <MonPad>
      <Title>
        <TitleContent>
          <h2>QUICK GUIDE</h2>
        </TitleContent>
      </Title>
      <p>
        <b>Monkey Network Token Address- {MONKEY_ADDRESS}</b>
      </p>
      <p>
        <b>Started on: February 20,2022 at 7PM UTC</b>
      </p>
      <br></br>
      <p>
        (1.) Stake BUSD and earn Daily Staking Rewards in MONKEY TOKEN (1.5% per
        day).&nbsp;You can claim or compound your $MONKEY rewards anytime.&nbsp;
        When you compound your $MONKEY rewards, 75% of your rewards go to STAKE
        $MONKEY and 25% of your rewards go to $MONKEY CAMP.&nbsp; When you claim
        your $MONKEY rewards, you will receive 75% of your rewards and other 25%
        will go to $MONKEY CAMP.&nbsp; You cannot unstake your staked BUSD.
      </p>
      <p>
        <b>
          (You will earn $MONKEY tokens as a percentage of BUSD invested
          irrespective of the $MONKEY Price.)
        </b>
      </p>
      <p>
        Example: If you invest 100 BUSD, you will receive 1.5 $MONKEY TOKEN
        daily.
      </p>
      <br></br>
      <p>
        (2.) You have two options with your $MONKEY tokens, you can sell them
        for BUSD, or you can stake them to earn more $MONKEY tokens (2% per
        day).&nbsp; $MONKEY staking is locked for 7 days.&nbsp;
      </p>
      <br></br>
      <p>
        (3.) The $MONKEY went to $MONKEY CAMP will make other rewards (2% every
        day).&nbsp; When you click compound button, 50% of rewards will go to
        STAKE $MONKEY as $MONKEY.&nbsp; And other 50% will go to MINT $MONKEY as
        $BUSD to keep the project sustainable
      </p>
      <br></br>
      <p>
        (4.) When you sell $MONKEY you will receive BUSD for 97% of your
        $MONKEY. &nbsp;1% of $MONKEY will go to marketing wallet and 2% of
        $MONKEY goes to availabe supply.
      </p>
      <br></br>
      <p>
        (5.) Terminologies
        <br></br>- Total Supply : The maximum amount of $MONKEY that can exist
        <br></br>- Circulating Supply : The amount of $MONKEY tokens that are
        currently in wallets
        <br></br>- Available Suppy : (Total Supply - Cirulating Supply)
        <br></br>- $MONKEY Price : (Total BUSD Balance / Available Supply)
        <br></br>- Mint $MONKEY - As you claim $MONKEY from minting, it is
        removed from the Available Supply and added to the Circulating Supply
        <br></br>- Sell $MONKEY - As you sell $MONKEY, it is removed from the
        Circulating Supply and added to the Available Supply
      </p>
      <p>
        <br></br>
      </p>
    </MonPad>
  );
};

export default Guide;

const MonPad = styled.div`
  text-align: left;
  // display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 0em;
  padding: 0em 0em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1.9px;
  border-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  background-color: rgba(33, 37, 41, 0.9);
  color: rgb(28, 28, 28);
  h2 {
    margin-top: 0px;
    margin-bottom: 0;
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.02em;
    text-transform: none;
  }

  span,
  p {
    color: rgb(214, 214, 214);
    font-size: 0.9em;
    margin: 0 20px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 20px;
    h2 {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-right: 0;
  }
`;

const Title = styled.div`
  background-color: rgb(217, 125, 62);
  border-style: solid;
  border-width: 1.9px;
  border-color: rgba(255, 255, 255, 0.9);
  border-bottom-color: rgb(217, 125, 62);
  border-radius: 0 0 80px 80px;
  margin-top: -2px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: -1px auto;
  margin-bottom: 30px;
`;

const TitleContent = styled.div`
  margin: 0 auto;
  h2 {
    color: rgb(5, 58, 12) !important;
    font-size: 1.6em;
    font-weight: 600;
    letter-spacing: -0.02em;
    text-transform: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1em;
    margin-bottom: 0;
    color: rgb(5, 58, 12);
    font-weight: 600;
    letter-spacing: -0.02em;
    text-transform: none;
    margin-top: 10px;
  }
  a {
    position: relative;
    z-index: 12;
    color: rgb(124, 91, 255);
    font-size: 1.2em;
    &:hover {
      opacity: 0.7;
    }

    display: inline-block;
  }

  @media screen and (max-width: 960px) {
    h2,
    h3 {
      font-size: 1em;
      line-height: 26px;
    }
    a {
      font-size: 0.9em;
      margin-bottom: 0;
    }
  }
`;
