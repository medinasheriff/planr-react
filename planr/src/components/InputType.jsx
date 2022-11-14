import React from "react";

function InputType({ formdata, setFormdata }) {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='campaignType'>Campaign Type</label>
        <select
          name='campaignType'
          id='campaignType'
          value={formdata.type}
          onChange={(event) =>
            setFormdata({
              ...formdata,
              type: event.target.value,
            })
          }
        >
          <option value='' disabled>
            Campaign Type
          </option>
          <option value='AMR Screening'>AMR Screening</option>
          <option value='Covid'>Covid</option>
          <option value='HPV Screening'>HPV Screening</option>
          <option value='Routine Immunization'>Routine Immunization</option>
        </select>
      </div>
    </>
  );
}

export default InputType;
