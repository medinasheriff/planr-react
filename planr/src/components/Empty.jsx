import React from "react";
import medinaFace from "../assets/journal.png";
import Table from "./Table";

function Empty({
  MedinaClick,
  tableData,
  emptyContent,
  edit,
  setEdit,
  setShowCampaign,
  setFormdata,
}) {
  return (
    <>
      <div className='empty'>
        <div
          className='empty-content'
          style={!emptyContent ? { display: "none" } : null}
        >
          <img src={medinaFace} alt='campaign' />
          <p>
            No campaigns found.
            <button onClick={MedinaClick}>Add Campaign</button>
            to begin recording and managing campaigns.
          </p>
        </div>
        <Table
          tableData={tableData}
          emptyContent={emptyContent}
          edit={edit}
          setEdit={setEdit}
          setShowCampaign={setShowCampaign}
          setFormdata={setFormdata}
        />
      </div>
    </>
  );
}

export default Empty;
