import React from "react";

function InputState({ formdata, setFormdata }) {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='state'>State</label>
        <select
          name='state'
          id='state'
          value={formdata.state}
          onChange={(event) =>
            setFormdata({
              ...formdata,
              state: event.target.value,
            })
          }
        >
          <option value='' disabled={true}>
            State
          </option>
          <option value='Abia'>Abia</option>
          <option value='Abuja'>Abuja</option>
          <option value='Akwa ibom'>Akwa Ibom</option>
          <option value='Borno'>Borno</option>
          <option value='Bauchi'>Bauchi</option>
          <option value='Jigawa'>Jigawa</option>
          <option value='Kano'>Kano</option>
          <option value='Kebbi'>Kebbi</option>
          <option value='Sokoto'>Sokoto</option>
          <option value='Yobe'>Yobe</option>
        </select>
      </div>
    </>
  );
}

export default InputState;
