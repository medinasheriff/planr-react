import React from "react";

function StrategyInput() {
  return (
    <div className='strategyInput'>
      <div className='strategy-1'>
        <input type='radio' name='' id='' />
        <div>
          <h5>Use Fixed Post</h5>
          <p>
            select this strategy for field work conducted within 2km of a Health
            Facility (HF).
          </p>
        </div>
      </div>
      <div className='strategy-1'>
        <input type='radio' name='' id='' />
        <div>
          <h5>Use Outreach Session</h5>
          <p>
            Select this strategy for field work conducted 2 - 6km from a Health
            Facility.
          </p>
        </div>
      </div>
      <div className='strategy-1'>
        <input type='radio' name='' id='' />
        <div>
          <h5>Use Mobile Session</h5>
          <p>
            Select this strategy for field work conducted 6km+ from a Health
            Facility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StrategyInput;
