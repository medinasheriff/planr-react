import React from "react";

function InputWard() {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='ward'>Ward</label>
        <select name='ward' id='ward' defaultValue={"DEFAULT"}>
          <option value='DEFAULT' disabled hidden>
            Ward
          </option>
          <option value='Ward 1'>Ward 1</option>
          <option value='Ward 2'>Ward 2</option>
          <option value='Ward 3'>Ward 3</option>
        </select>
      </div>
    </>
  );
}

export default InputWard;
