import { useCallback } from "react";
import "./LandingPage4.css";

const LandingPage4 = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="landing-page4">
      <div className="logo4" onClick={onLogoContainerClick}>
        <div className="ptimizer4">ptimizer</div>
        <img className="node-icon24" alt="" src="../node24.svg" />
        <img className="node-icon25" alt="" src="../node25.svg" />
        <img className="node-icon26" alt="" src="../node26.svg" />
        <img className="node-icon27" alt="" src="../node27.svg" />
        <img className="node-icon28" alt="" src="../node28.svg" />
        <img className="logo-child27" alt="" src="../line-54.svg" />
        <div className="logo-child28" />
        <img className="logo-child29" alt="" src="../line-74.svg" />
        <img className="logo-child30" alt="" src="../line-84.svg" />
        <img className="node-icon29" alt="" src="../node29.svg" />
        <img className="logo-child31" alt="" src="../line-94.svg" />
        <img className="logo-child32" alt="" src="../group-774.svg" />
        <img className="logo-child33" alt="" src="../group-864.svg" />
        <img className="logo-child34" alt="" src="../group-874.svg" />
        <div className="siem4">SIEM</div>
      </div>
      <div className="stepper4">
        <div className="step12">
          <div className="stepicon12">
            <div className="value25">1</div>
          </div>
          <div className="content12">
            <div className="primary12">Impact Cost Defaults</div>
            <div className="secondary12">Optional</div>
          </div>
        </div>
        <div className="step13">
          <div className="stepicon13">
            <div className="value25">2</div>
          </div>
          <div className="content13">
            <div className="primary13">Impact Cost Alert Rules</div>
            <div className="secondary13">Optional</div>
          </div>
        </div>
        <div className="step14">
          <div className="stepicon13">
            <div className="value25">3</div>
          </div>
          <div className="content13">
            <div className="primary13">Pricing Structure</div>
            <div className="secondary13">Optional</div>
          </div>
        </div>
      </div>
      <div className="text-field20">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled40.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value28">$1.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton22">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled41.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text48">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text49">Info</div>
          </div>
        </div>
      </div>
      <div className="text-field21">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled42.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value28">$250.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton22">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled43.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text48">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text49">Low</div>
          </div>
        </div>
      </div>
      <div className="text-field22">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled44.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value28">$2,500.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton22">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled45.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text48">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text49">Medium</div>
          </div>
        </div>
      </div>
      <div className="text-field23">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled46.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value28">$20,000.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton22">
              <img
                className="starfilled-icon40"
                alt=""
                src="../starfilled47.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text48">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text49">High</div>
          </div>
        </div>
      </div>
      <div className="set-the-default">
        Set the default value for an alert firing at each severity level.
      </div>
      <div className="impact-cost-settings-container1">
        <b>Impact Cost Settings |</b>
        <span> Default Values</span>
      </div>
      <div className="button8">
        <div className="container9">
          <img className="prefix-icon8" alt="" src="../prefix8.svg" />
          <div className="text56">Next</div>
          <img className="prefix-icon8" alt="" src="../suffix8.svg" />
        </div>
      </div>
      <div className="button9">
        <div className="container9">
          <img className="prefix-icon8" alt="" src="../prefix9.svg" />
          <div className="text56">Back</div>
          <img className="prefix-icon8" alt="" src="../suffix9.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;
