import { useCallback } from "react";
import "./LandingPage2.css";

const LandingPage2 = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="landing-page2">
      <div className="logo2" onClick={onLogoContainerClick}>
        <div className="ptimizer2">ptimizer</div>
        <img className="node-icon12" alt="" src="../node12.svg" />
        <img className="node-icon13" alt="" src="../node13.svg" />
        <img className="node-icon14" alt="" src="../node14.svg" />
        <img className="node-icon15" alt="" src="../node15.svg" />
        <img className="node-icon16" alt="" src="../node16.svg" />
        <img className="logo-child11" alt="" src="../line-5.svg" />
        <div className="logo-child12" />
        <img className="logo-child13" alt="" src="../line-7.svg" />
        <img className="logo-child14" alt="" src="../line-82.svg" />
        <img className="node-icon17" alt="" src="../node17.svg" />
        <img className="logo-child15" alt="" src="../line-92.svg" />
        <img className="logo-child16" alt="" src="../group-772.svg" />
        <img className="logo-child17" alt="" src="../group-862.svg" />
        <img className="logo-child18" alt="" src="../group-872.svg" />
        <div className="siem2">SIEM</div>
      </div>
      <div className="stepper2">
        <div className="step6">
          <img className="stepicon6" alt="" src="../stepicon4.svg" />
          <div className="content6">
            <div className="primary6">Impact Cost Defaults</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
        <div className="step7">
          <img className="stepicon6" alt="" src="../stepicon5.svg" />
          <div className="content6">
            <div className="primary6">Impact Cost Alert Rules</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
        <div className="step8">
          <div className="stepicon8">
            <div className="value20">3</div>
          </div>
          <div className="content8">
            <div className="primary6">Pricing Structure</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
      </div>
      <div className="text-field-container">
        <div className="text-field18">
          <div className="field18">
            <div className="prefix18">
              <div className="icon18">
                <img
                  className="starfilled-icon36"
                  alt=""
                  src="../starfilled36.svg"
                />
              </div>
            </div>
            <div className="text-wrapper18">
              <div className="value21">180</div>
            </div>
            <div className="suffix18">
              <div className="iconbutton18">
                <img
                  className="starfilled-icon36"
                  alt=""
                  src="../starfilled37.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper18">
            <div className="text40">Descriptive text</div>
          </div>
          <div className="label18">
            <div className="label-background18">
              <div className="cutborder18" />
              <div className="text41">Days</div>
            </div>
          </div>
        </div>
        <div className="retention-days-parent">
          <div className="retention-days">Retention Days</div>
          <div className="please-enter-the2">
            Please enter the contracted number of retention days you have with
            your provider.
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="text-field19">
          <div className="field18">
            <div className="prefix18">
              <div className="icon18">
                <img
                  className="starfilled-icon36"
                  alt=""
                  src="../starfilled38.svg"
                />
              </div>
            </div>
            <div className="text-wrapper18">
              <div className="value21">$0.12</div>
            </div>
            <div className="suffix18">
              <div className="iconbutton18">
                <img
                  className="starfilled-icon36"
                  alt=""
                  src="../starfilled39.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper18">
            <div className="text40">Descriptive text</div>
          </div>
          <div className="label18">
            <div className="label-background18">
              <div className="cutborder18" />
              <div className="text41">$/GB/Month</div>
            </div>
          </div>
        </div>
        <div className="retention-cost-parent">
          <div className="retention-cost">Retention Cost</div>
          <div className="please-enter-the3">
            Please enter the contracted retention cost in GB per month you have
            negotiated with your provider.
          </div>
        </div>
      </div>
      <div className="button4">
        <div className="container4">
          <img className="prefix-icon4" alt="" src="../prefix4.svg" />
          <div className="text44">Next</div>
          <img className="prefix-icon4" alt="" src="../suffix.svg" />
        </div>
      </div>
      <div className="button5">
        <div className="container4">
          <img className="prefix-icon4" alt="" src="../prefix5.svg" />
          <div className="text44">Back</div>
          <img className="prefix-icon4" alt="" src="../suffix5.svg" />
        </div>
      </div>
      <div className="pricing-structure-container2">
        <b>Pricing Structure</b>
        <span> | Retention</span>
      </div>
    </div>
  );
};

export default LandingPage2;
