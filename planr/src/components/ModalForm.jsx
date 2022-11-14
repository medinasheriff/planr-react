import { useState } from "react";

import InputName from "./InputName";
import InputType from "./InputType";
import InputDate from "./InputDate";
import LocationInput from "./LocationInput";
import StrategyInput from "./StrategyInput";

function ModalForm({ setShowCampaign, formdata, setFormdata, handleSubmit }) {
  const [activeTab, setActiveTab] = useState("location");

  return (
    <>
      <form className='modal-form' onSubmit={handleSubmit}>
        <div className='modal-form-top'>
          <InputName formdata={formdata} setFormdata={setFormdata} />
          <InputType formdata={formdata} setFormdata={setFormdata} />
          <InputDate formdata={formdata} setFormdata={setFormdata} />
        </div>

        <div className='nav-tab'>
          <div
            onClick={() => {
              setActiveTab("location");
            }}
            className='location tab'
            style={
              activeTab === "location"
                ? { borderBottom: "2px solid blue" }
                : null
            }
          >
            location
          </div>
          <div
            className='strategy tab'
            style={
              activeTab === "strategy"
                ? { borderBottom: "2px solid blue" }
                : null
            }
            onClick={() => {
              setActiveTab("strategy");
            }}
          >
            strategy
          </div>
        </div>

        <div className='modal-form-bottom'>
          {activeTab === "location" ? (
            <LocationInput formdata={formdata} setFormdata={setFormdata} />
          ) : (
            <StrategyInput />
          )}
        </div>

        <div className='modal-footer'>
          <button
            className='cancel'
            onClick={(e) => {
              console.log(e);
              e.preventDefault();
              setShowCampaign(false);
            }}
          >
            Cancel
          </button>
          <button type='submit' className='save'>
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default ModalForm;
