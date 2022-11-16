import { useState } from "react";
import { duration } from "../utility/duration";

function Table({
  tableData,
  emptyContent,
  edit,
  setEdit,
  setShowCampaign,
  setFormdata,
}) {
  const colors = {
    pending: "grey",
    ongoing: "orange",
    completed: "green",
    failed: "red",
  };

  const [inputValue, setInputValue] = useState("");

  const filteredTable = tableData.filter((table) => {
    return table.type.toLowerCase().includes(inputValue.toLowerCase());
  });

  const handleEdit = (id) => {
    const findCampaign = tableData.find((table) => table.id === id);
    setEdit(findCampaign);
    setFormdata(findCampaign);
    console.log(findCampaign);
  };

  const tableRows = filteredTable.map((tableRow, idx) => {
    const { name, state, startDate, type, endDate, id } = tableRow;
    let status = duration(startDate, endDate);
    return (
      <tr key={`${state}-${idx}`}>
        <td>
          <input type='radio'/>
          <button
            onClick={() => {
              handleEdit(id);
              setShowCampaign(true);
            }}
          >
            {state}-{name}-{startDate}{" "}
          </button>
        </td>
        <td>{type}</td>
        <td style={{ color: colors[status.toLowerCase()] }}>{status}</td>
      </tr>
    );
  });

  return (
    <div style={emptyContent ? { display: "none" } : { display: "block" }}>
      <div style={{ width: "65%", margin: "0 auto" }}>
        <form>
          <input
            type='text'
            placeholder='Search By Status'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: "8px" }}
          />
          <button
            type='submit'
            style={{ backgroundColor: "blue", color: "#fff", padding: "8px" }}
          >
            Search
          </button>
        </form>
      </div>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>CAMPAIGN NAME</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody id='result'>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

//  {
//    emptyContent
//      ? null
//      : console.log(duration(tableData[0].startDate, tableData[0].endDate));
//  }
