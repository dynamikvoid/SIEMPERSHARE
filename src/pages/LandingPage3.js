import { useCallback } from "react";
import "./LandingPage3.css";

const LandingPage3 = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="landing-page3">
      <div className="logo3" onClick={onLogoContainerClick}>
        <div className="ptimizer3">ptimizer</div>
        <img className="node-icon18" alt="" src="../node18.svg" />
        <img className="node-icon19" alt="" src="../node19.svg" />
        <img className="node-icon20" alt="" src="../node20.svg" />
        <img className="node-icon21" alt="" src="../node21.svg" />
        <img className="node-icon22" alt="" src="../node22.svg" />
        <img className="logo-child19" alt="" src="../line-5.svg" />
        <div className="logo-child20" />
        <img className="logo-child21" alt="" src="../line-73.svg" />
        <img className="logo-child22" alt="" src="../line-83.svg" />
        <img className="node-icon23" alt="" src="../node23.svg" />
        <img className="logo-child23" alt="" src="../line-93.svg" />
        <img className="logo-child24" alt="" src="../group-773.svg" />
        <img className="logo-child25" alt="" src="../group-863.svg" />
        <img className="logo-child26" alt="" src="../group-873.svg" />
        <div className="siem3">SIEM</div>
      </div>
      <div className="impact-cost-settings-container">
        <b>Impact Cost Settings</b>
        <span>{` | Specific Alert Rule Values (Optional) `}</span>
      </div>
      <div className="stepper3">
        <div className="step9">
          <img className="stepicon9" alt="" src="../stepicon6.svg" />
          <div className="typography">
            <div className="primary9">Impact Cost Defaults</div>
            <div className="secondary9">Optional</div>
          </div>
        </div>
        <div className="step10">
          <div className="stepicon10">
            <div className="value23">2</div>
          </div>
          <div className="content10">
            <div className="primary9">Impact Cost Alert Rules</div>
            <div className="secondary9">Optional</div>
          </div>
        </div>
        <div className="step11">
          <div className="stepicon11">
            <div className="value23">3</div>
          </div>
          <div className="content11">
            <div className="cell">Pricing Structure</div>
            <div className="secondary11">Optional</div>
          </div>
        </div>
      </div>
      <div className="button6">
        <div className="container6">
          <img className="prefix-icon6" alt="" src="../prefix6.svg" />
          <div className="head">Next</div>
          <img className="prefix-icon6" alt="" src="../suffix5.svg" />
        </div>
      </div>
      <div className="button7">
        <div className="container6">
          <img className="prefix-icon6" alt="" src="../prefix7.svg" />
          <div className="head">Back</div>
          <img className="prefix-icon6" alt="" src="../suffix7.svg" />
        </div>
      </div>
      <div className="component-1">
        <div className="component-1-child" />
        <div className="alert-rule-values">{`Alert Rule Values `}</div>
        <div className="set-the-value">
          Set the value for an alert firing at each severity level for each
          specific alert rule.
        </div>
        <div className="table">
          <div className="tableheadrow">
            <div className="tablehead">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled.svg"
                />
              </div>
              <div className="head">Alert Rule</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled1.svg"
                />
              </div>
            </div>
            <div className="tablehead1">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled2.svg"
                />
              </div>
              <div className="head">Info</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled3.svg"
                />
              </div>
            </div>
            <div className="tablehead2">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled4.svg"
                />
              </div>
              <div className="head">Low</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled5.svg"
                />
              </div>
            </div>
            <div className="tablehead3">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled6.svg"
                />
              </div>
              <div className="head">Medium</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled7.svg"
                />
              </div>
            </div>
            <div className="tablehead4">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled8.svg"
                />
              </div>
              <div className="head">High</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled9.svg"
                />
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Advanced Multistag...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Active Directory...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Advanced Threat...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Defender</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Security Center</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablefooter">
            <div className="container8">
              <div className="rows-per-page">Rows per page:</div>
              <div className="page">
                <div className="div">10</div>
                <img
                  className="arrowdropdownfilled-icon"
                  alt=""
                  src="../arrowdropdownfilled.svg"
                />
              </div>
            </div>
            <div className="of-100">1-5 of 13</div>
            <div className="navigation">
              <div className="iconbutton20">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronleftfilled.svg"
                />
              </div>
              <div className="iconbutton20">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronrightfilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="searchfilled-icon" alt="" src="../searchfilled.svg" />
          <i className="search-for-an">Search for an alert rule...</i>
        </div>
      </div>
    </div>
  );
};

export default LandingPage3;
