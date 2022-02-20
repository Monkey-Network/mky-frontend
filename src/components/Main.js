import styled from "styled-components";
import MonpadDetails from "./MonpadDetails";
import MonPadBox from "./MonPadBox";

export const Main = ({ poppup, setPoppup }) => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div id="launch-time"></div>
          <main className="main text-white">
            <div className="container">
              <div className="main__inner">
                <div className="main__inner-body">
                  <div className="main__plan-item-i">
                    <div className="main__body-plan main">
                      <h2 className="main__plan-title-i">
                        DUCK NETWORK STATISTICS
                        <span>Stake $BUSD and earn daily staking rewards</span>
                        <span>Stake $DUCK and earn daily staking rewards</span>
                      </h2>
                      <br />
                      <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <h6 className="align-center">
                            <font color="white">$DUCK PRICE</font>
                          </h6>
                          <div className="align-center">
                            <h2>
                              <font color="#228B22">
                                <span id="token-priceM">1.021514</span>
                              </font>
                            </h2>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <h6 className="align-center">
                            <font color="white">Total Supply</font>
                          </h6>
                          <div className="align-center">
                            <h2>
                              <font color="#228B22">
                                <span id="limit-supply">1000000.00</span>
                              </font>
                            </h2>
                          </div>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                          <h6 className="align-center">
                            <font color="white">Circulating Supply</font>
                          </h6>
                          <div className="align-center">
                            <h2>
                              <font color="#228B22">
                                <span id="total-supply">322943.93</span>
                              </font>
                            </h2>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                          <h6 className="align-center">
                            <font color="white">Available Supply</font>
                          </h6>
                          <div className="align-center">
                            <h2>
                              <font color="#228B22">
                                <span id="available-supply">677056.07</span>
                              </font>
                            </h2>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <div className="col-xs-12 col-md-12 col-lg-12">
                          <div className="align-center">
                            <a
                              href="https://bscscan.com/address/0x4eacb72f6ba99e1c69ac053dcb281387ff374d22#code"
                              target="_blank"
                              className=""
                              data-close="true"
                            >
                              Contract
                            </a>
                            <font color="#228B22">|</font>
                            <a
                              href="https://ducknetwork.io/whitepaper.pdf"
                              target="_blank"
                              className=""
                              data-close="true"
                            >
                              Whitepaper
                            </a>
                            <font color="#228B22">|</font>
                            <a
                              href="https://t.me/monkeynetwork"
                              target="_blank"
                              className=""
                              data-close="true"
                            >
                              Telegram Group
                            </a>
                            {/* <font color="#228B22">|</font>
										<a href="https://t.me/ducknetworkofficiachannel" target="_blank" className="" data-close="true">Telegram Channel</a> 											 */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main__plan-item">
                    <div className="main__body-plan">
                      <h2 className="main__plan-title">
                        MINT $DUCK
                        <span>Mint $DUCK by staking your $BUSD</span>
                        <span>You can stake as many times as you want</span>
                        <span>You cannot unstake your $BUSD</span>
                      </h2>
                      <br />

                      <div className="info__plan-box">
                        <div className="main__plan-txt" id="APY_M">
                          APR<span>1460%</span>
                        </div>
                        <div className="main__plan-txt" id="user-BUSD-staked">
                          My Stake<span>0.00 BUSD</span>
                        </div>
                        <div className="main__plan-txt" id="total-BUSD-staked">
                          Total Staked<span>873047.84 BUSD</span>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="left">
                              <div className="main__plan-txt">$DUCK Minted</div>
                            </td>
                            <td rowspan="2" align="right" valign="middle">
                              <button className="main__claim-btn" id="claimM">
                                CLAIM
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="main__plan-txt">
                                <span id="user-unClaimed-M">0.0000</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">Approve $BUSD spend</font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="input-group">
                        <input
                          type="number"
                          min="10"
                          step="10"
                          className="form-control"
                          placeholder="Enter Amount"
                          id="input-approve"
                        />
                        <div className="input-group-append">
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="approveBUSD()"
                              >
                                APPROVE
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">No Minimum Amount</font>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="input-group">
                        <input
                          type="number"
                          min="10"
                          step="10"
                          className="form-control"
                          placeholder="Enter Amount"
                          id="input-busd"
                        />
                        <div className="input-group-append">
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="SetMaxBUSD()"
                              >
                                MAX
                              </button>
                            </span>
                          </div>
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="stakeM()"
                              >
                                STAKE
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">
                                Wallet Balance:{" "}
                                <span id="user-BUSD-balance-1">0.0000</span>{" "}
                                $BUSD
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="main__plan-item">
                    <div className="main__body-plan">
                      <h2 className="main__plan-title-p">
                        STAKE $DUCK
                        <span>Stake $DUCK to earn more $DUCK</span>
                        <span>You can stake as many times as you want</span>
                        <span>You can unstake your $DUCK after 7 days</span>
                      </h2>
                      <br />

                      <div className="info__plan-box">
                        <div className="main__plan-txt" id="APY_T">
                          APR<span>2190%</span>
                        </div>
                        <div className="main__plan-txt" id="user-token-staked">
                          My Stake<span>0.00 DUCKNETWORK</span>
                        </div>
                        <div className="main__plan-txt" id="total-token-staked">
                          Total Staked<span>310557.13 DUCKNETWORK</span>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="Left">
                              <div
                                className="main__total-number-i"
                                id="time-tounstake"
                              ></div>
                            </td>
                            <td align="right">
                              <button
                                className="main__unstake-btn"
                                id="unstake"
                              >
                                UNSTAKE
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="left">
                              <div className="main__plan-txt">$DUCK Earned</div>
                            </td>
                            <td rowspan="2" align="right" valign="middle">
                              <button className="main__claim-btn" id="claimT">
                                CLAIM
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="main__plan-txt">
                                <span id="user-unClaimed-T">0.0000</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">
                                There is no minimum to stake
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="input-group">
                        <input
                          type="number"
                          min="10"
                          step="10"
                          className="form-control"
                          placeholder="Enter Amount"
                          id="input-2"
                        />
                        <div className="input-group-append">
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="SetMaxDUCKNETWORK()"
                              >
                                MAX
                              </button>
                            </span>
                          </div>
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="stakeT('#input-2')"
                              >
                                STAKE
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">
                                Wallet Balance:{" "}
                                <span id="user-token-balance-1">0.0000</span>{" "}
                                $DUCK
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="main__plan-item">
                    <div className="main__body-plan">
                      <h2 className="main__plan-title-s">
                        SELL $DUCK
                        <span>Sell the earned tokens</span>
                        <span>Only 40000 tokens can be sold per day</span>
                        <span>Earn $BUSD</span>
                      </h2>
                      <br />

                      <div className="info__plan-box">
                        <div className="main__plan-txt" id="total-sold-today">
                          Sold Today<span>13800.98</span>
                        </div>
                        <div className="main__plan-txt" id="available-to-sell">
                          Available Today<span>...</span>
                        </div>
                        <div className="main__plan-txt" id="time-tonextday">
                          Reset in <span>0D : 7H : 13M</span>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <div className="main__total-txt">$DUCK PRICE</div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <div
                                className="main__total-number"
                                id="token-price"
                              >
                                1.021514
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <div className="main__total-number-i" id="">
                                $BUSD
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />

                      <div className="main__plan-txt">
                        You will get<h3 id="sell-calc">0.00 $BUSD</h3>
                      </div>

                      <div className="input-group">
                        <input
                          type="number"
                          min="10"
                          step="10"
                          className="form-control"
                          placeholder="Enter Amount"
                          id="input-3"
                        />
                        <div className="input-group-append">
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="SetMaxDUCKNETWORKToSell()"
                              >
                                MAX
                              </button>
                            </span>
                          </div>
                          <div className="st-container">
                            <span>
                              <button
                                className="main__plan-btn"
                                onclick="sell('#input-3')"
                              >
                                SELL
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>

                      <table width="100%" border="0">
                        <tbody>
                          <tr>
                            <td align="center">
                              <font color="#228B22">
                                Wallet Balance:{" "}
                                <span id="user-token-balance-2">0.0000</span>{" "}
                                $DUCK
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="main__inner-body">
                  <div className="main__plan-item-i">
                    <div className="main__body-plan">
                      <div className="main__game">
                        <h2 className="main__game-title">QUICK GUIDE</h2>
                        <b>
                          Duck Network Token Address-
                          0x4eACB72F6BA99e1C69ac053dcb281387fF374d22{" "}
                        </b>
                        <br />
                        <b>Started on: February 20,2022 at 7PM UTC</b>
                        <br />
                        <br />
                        (1.) Stake BUSD and earn Daily Staking Rewards in DUCK
                        TOKEN (4% per day).You can claim your $DUCK rewards
                        anytime. You cannot unstake your staked BUSD.
                        <br />
                        <b>
                          (You will earn $duck tokens as a percentage of BUSD
                          invested irrespective of the $DUCK Price.)
                        </b>
                        <br />
                        Example: If you invest 100 BUSD, you will receive 4 DUCK
                        TOKEN daily.
                        <br />
                        <br />
                        (2.) You have two options with your $DUCK tokens, you
                        can sell them for BUSD, or you can stake them to earn
                        more $DUCK tokens (6% per day).
                        <br /> $DUCK staking is locked for 7 days. <br />
                        <br />
                        (3.) Terminologies <br />
                        - Total Supply : The maximum amount of $DUCK that can
                        exist <br />
                        - Circulating Supply : The amount of $DUCK tokens that
                        are currently in wallets <br />- Available Suppy :
                        (Total Supply - Cirulating Supply) <br />- $DUCK Price :
                        (Total BUSD Balance / Available Supply) <br />
                        - Mint $DUCK - As you claim $DUCK from minting, it is
                        removed from the Available Supply and added to the
                        Circulating Supply <br />- Sell $DUCK - As you sell
                        $DUCK, it is removed from the Circulating Supply and
                        added to the Available Supply <br />
                      </div>{" "}
                      <br />
                      <div className="main__referral-link">
                        <div className="main__referral-header">
                          <label className="main__referral-label">
                            YOUR REFERRAL LINK
                            <input
                              type="text"
                              className="main__referral-input"
                              value="..."
                              id="ref-link"
                            />
                          </label>

                          <button
                            className=" main__referral-btn"
                            onclick="copyToClipboard('#ref-link')"
                          >
                            COPY
                          </button>
                        </div>

                        <div className="main__referral-body">
                          <div className="main__referral-col">
                            <div className="main__referral-txt">
                              Referral Earned Available
                              <div
                                className="main__referral-perc"
                                id="referral-available"
                              >
                                0.00
                              </div>
                            </div>

                            <div className="main__referral-txt">
                              Total Referral Earned
                              <div
                                className="main__referral-perc"
                                id="referral-earned"
                              >
                                0.00
                              </div>
                            </div>

                            <div className="main__referral-txt">
                              Total Referral Withdrawn
                              <div
                                className="main__referral-perc"
                                id="referral-withdrawn"
                              >
                                0.00
                              </div>
                            </div>

                            <div className="main__referral-txt">
                              Total Referrals
                              <div
                                className="main__referral-perc"
                                id="total-referrals"
                              >
                                0
                              </div>
                            </div>
                          </div>

                          <div className="main__referral-col">
                            <div className="main__referral-txt">
                              Earn $BUSD by inviting people to DUCK NETWORK.{" "}
                              <br />
                              <br />
                              You will receive:
                              <br />
                              <br />
                              4% from each level 1 referral deposits
                              <br />
                              2% from each level 2 referral deposits
                              <br />
                              1% from each level 3 referral deposits
                              <br />
                              <br />
                              Deposit atleast once to activate Referral Rewards
                              <br />
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <table width="100%" border="0">
                          <tbody>
                            <tr>
                              <td align="center">
                                <button
                                  className="main__wref-btn"
                                  id="withdraw-referral-btn"
                                >
                                  WITHDRAW REFERRAL EARNINGS
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="main__footer-stake"
                      id="user-deposits"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="footer">
            <div className="container">
              <div className="footer__inner">
                <table width="100%" border="0">
                  <tbody>
                    <tr>
                      <td align="center">
                        <img
                          className="main__sponsors-img"
                          src="assets_main_fy/img/sponsor.png"
                          alt="Sponsors"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <script src="assets_main_fy/scripts/jquery.min.js"></script>
          <script src="assets_main_fy/scripts/main.js"></script>
          <script src="assets_main_fy/scripts/web3.min.js"></script>
          <script src="assets_main_fy/scripts/index_202201191455.js"></script>
          <script src="assets_main_fy/scripts/iziToast.min.js"></script>
          <script src="assets_main_fy/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="assets_main_fy/js/main.js"></script>
          <script src="assets_main_fy/timer/main.js"></script>
          <script src="assets_main_fy/timer/countdown.js"></script>
          <script src="assets_main_fy/timer/time.js"></script>
        </div>
      </main>
    </>
  );
};

const HeroArea = styled.div`
  width: 1300px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 150px;
  > div {
    width: 46%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 120px 30px;
  }
  @media screen and (max-width: 767px) {
    > div {
      width: 100%;
    }
    display: block;
    padding: 0 30px 50px;
  }
`;
