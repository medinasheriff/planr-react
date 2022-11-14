import React from "react";
import InputLga from "./InputLga";
import InputState from "./InputState";
import InputWard from "./InputWard";

function LocationInput({ formdata, setFormdata }) {
  return (
    <div className='locationInput'>
      <InputState formdata={formdata} setFormdata={setFormdata} />
      <InputLga />
      <InputWard />
    </div>
  );
}

export default LocationInput;
