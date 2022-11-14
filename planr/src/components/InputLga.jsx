import React from "react";

function InputLga() {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='lga'>LGA</label>
        <select name='lga' id='lga' defaultValue={"DEFAULT"}>
          <option value='DEFAULT' disabled hidden>
            LGA
          </option>
          <option value='metropolis'>MMC</option>
          <option value='dambua'>Danbua</option>
          <option value='gwarzo'>Gwarzo</option>
          <option value='kari'>Kari</option>
          <option value='darazo'>Darazo</option>
          <option value='baga'>Baga</option>
          <option value='ibeno'>Ibeno</option>
          <option value='ikot abasi'>Ikot abasi</option>
          <option value='tofa'>Tofa</option>
          <option value='sabon gari'>Sabon Gari</option>
        </select>
      </div>
    </>
  );
}

export default InputLga;
