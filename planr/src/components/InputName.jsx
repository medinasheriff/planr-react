function InputName({ formdata, setFormdata }) {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='campaignName'>Name</label>
        <input
          type='text'
          name='campaignName'
          placeholder='Campaign Name'
          id='campaignName'
          value={formdata.name}
          onChange={(event) =>
            setFormdata({
              ...formdata,
              name: event.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default InputName;
