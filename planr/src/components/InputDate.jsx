import React from "react";
import { duration } from "../utility/duration";

function InputDate({ formdata, setFormdata }) {
  // const handleChange = () => {
  //   console.log("keyup");
  //   if (!formdata.startDate || !formdata.endDate) return;
  //   setFormdata({
  //     ...formdata,
  //     status: duration(formdata.startDate, formdata.endDate),
  //   });
  //   console.log("statttttus");
  // };

  return (
    <>
      <div className='form-group'>
        <label htmlFor='Duration'>Duration</label>
        <input
          type='date'
          name='startDate'
          id='Duration'
          className='startDate'
          value={formdata.startDate}
          onChange={(event) =>
            setFormdata({
              ...formdata,
              startDate: event.target.value,
            })
          }
        />
      </div>
      <div className='form-group'>
        <input
          type='date'
          name='endDate'
          id='Duration'
          className='endDate'
          value={formdata.endDate}
          onChange={(event) => {
            setFormdata({
              ...formdata,
              endDate: event.target.value,
            });
          }}
        />
      </div>
    </>
  );
}

export default InputDate;

//  status: `${
//    formdata.endDate ? duration(formdata.startDate, formdata.endDate) : null
//  }`;
