import React from "react";
import "./TermsConditions.css";
import "../App.css";

function TermsConditions(props) {
  return (
    props.trigger && (
      <>
        <div className="termsConditions">
          <div className="termsConditions-inner">
            <button
              className="close-button"
              onClick={() => {
                props.setTrigger(false);
                props.setTrigger2(false);
              }}
            >
              &#10006;
            </button>

            {props.children}

            <button
              onClick={() => {
                props.setTrigger(false);
                props.setTrigger2(true);
              }}
            >
              Okudum, onayladım.
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default TermsConditions;
