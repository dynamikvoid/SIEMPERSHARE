import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    // Please sync "05 Payment Sel" to the project
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    // Please sync "04 Exploration" to the project
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/03-scatter-plot");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="group-parent5">
        <div className="frame-parent">
          <div className="total-roi-parent">
            <div className="total-roi">Total ROI</div>
            <div className="jan">Jan</div>
            <div className="jun">Jun</div>
            <div className="dec">Dec</div>
            <img className="frame-inner" alt="" src="../rectangle-10.svg" />
            <div className="yoy">{`YoY `}</div>
            <div className="m3">$60.4M</div>
            <div className="m4">+$27.5M</div>
          </div>
          <div className="total-value-parent">
            <div className="total-roi">Total Value</div>
            <div className="jan">Jan</div>
            <div className="jun">Jun</div>
            <div className="dec">Dec</div>
            <img className="frame-child1" alt="" src="../rectangle-101.svg" />
            <div className="yoy">{`YoY `}</div>
            <div className="m3">$99.9M</div>
            <div className="m4">+$31.5M</div>
          </div>
        </div>
        <div className="total-cost-parent">
          <div className="total-roi">Total Cost</div>
          <div className="jan">Jan</div>
          <div className="jun">Jun</div>
          <div className="dec">Dec</div>
          <img className="frame-child2" alt="" src="../rectangle-102.svg" />
          <div className="yoy">{`YoY `}</div>
          <div className="m3">$39.5M</div>
          <div className="m4">-$27.5M</div>
        </div>
      </div>
      <div className="navbar2">
        <div className="navbar-inner" />
        <div className="button10" onClick={onButtonContainerClick}>
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix10.svg" />
            <div className="text26">Payment Sel.</div>
            <img className="prefix-icon10" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button11" onClick={onButtonContainer1Click}>
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix11.svg" />
            <div className="text26">Exploration</div>
            <img className="prefix-icon10" alt="" src="../suffix11.svg" />
          </div>
        </div>
        <div className="button12" onClick={onButtonContainer2Click}>
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix12.svg" />
            <div className="text26">Ingestion Volume</div>
            <img className="prefix-icon10" alt="" src="../suffix12.svg" />
          </div>
        </div>
        <div className="button13" onClick={onButtonContainer3Click}>
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix13.svg" />
            <div className="text26">Alert Summary</div>
            <img className="prefix-icon10" alt="" src="../suffix13.svg" />
          </div>
        </div>
        <div className="button14" onClick={onButtonContainer4Click}>
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix14.svg" />
            <div className="text26">Cost Analysis</div>
            <img className="prefix-icon10" alt="" src="../suffix14.svg" />
          </div>
        </div>
      </div>
      <div className="navbar3">
        <div className="navbar-inner" />
        <div className="button15">
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix15.svg" />
            <div className="text31">My Account</div>
            <img className="prefix-icon10" alt="" src="../suffix15.svg" />
          </div>
        </div>
        <div className="button16">
          <div className="container59">
            <img className="prefix-icon10" alt="" src="../prefix16.svg" />
            <div className="text31">Pricing Structure</div>
            <img className="prefix-icon10" alt="" src="../suffix16.svg" />
          </div>
        </div>
        <div className="siem-optimizer-container">
          <span>{`SIEM Optimizer | `}</span>
          <span className="kpmg">KPMG</span>
        </div>
      </div>
      <div className="welcome-back">Welcome back!</div>
      <div className="see-whats-going">
        See what’s going on in your organization by exploring your dashboards...
      </div>
    </div>
  );
};

export default LandingPage;
