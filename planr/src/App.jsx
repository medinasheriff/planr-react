import { useState } from "react";
import "./App.css";

import Empty from "./components/Empty";
import ModalForm from "./components/ModalForm";

function Medina() {
  const [showCampaign, setShowCampaign] = useState(false);
  const [emptyContent, setEmptyContent] = useState(true);
  const [edit, setEdit] = useState(null);

  const [formdata, setFormdata] = useState({
    name: "",
    state: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  const [tableData, setTableData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, state, startDate, endDate, type } = formdata;
    if (
      name === "" ||
      name.length < 1 ||
      state === "" ||
      startDate === "" ||
      endDate === "" ||
      type === ""
    ) {
      return alert(`ensure all fields are filled`);
    }

    if (!edit) {
      setFormdata({
        ...formdata,
        id: Date.now(),
      });

      setTableData([...tableData, formdata]);
    } else {
      updateCampaign(
        edit.id,
        formdata.name,
        formdata.state,
        formdata.type,
        formdata.startDate,
        formdata.endDate
      );
    }

    setEmptyContent(false);
    setShowCampaign(false);
    setEdit(null);
  };

  const handleClick = () => {
    setShowCampaign(true);
  };

  function updateCampaign(id, name, state, type, startDate, endDate) {
    const newCampaign = tableData.map((table) => {
      return table.id === id
        ? { name, state, type, startDate, endDate, id }
        : table;
    });
    console.log(newCampaign);
    setTableData(newCampaign);
    console.log("update");
  }

  return (
    <>
      <header>
        <div className="container">
          <h2>Manage Campaigns</h2>
          <button className="add-campaign" onClick={handleClick}>
            Add Campaign
          </button>
        </div>
      </header>
      <main>
        <Empty
          MedinaClick={handleClick}
          tableData={tableData}
          emptyContent={emptyContent}
          edit={edit}
          setEdit={setEdit}
          setShowCampaign={setShowCampaign}
          setFormdata={setFormdata}
        />
        <div
          className="overlay"
          style={showCampaign ? { display: "flex" } : { display: "none" }}
        >
          <div className="modal">
            <div className="modal-content">
              <div className="modal-title">
                <h2>Add/Edit Campaign</h2>
                <button
                  onClick={() => setShowCampaign(false)}
                  className="cancel-x"
                >
                  X
                </button>
              </div>
              <ModalForm
                setShowCampaign={setShowCampaign}
                formdata={formdata}
                setFormdata={setFormdata}
                handleSubmit={handleSubmit}
                setEmptyContent={setEmptyContent}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Medina;
