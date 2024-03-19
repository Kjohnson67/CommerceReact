import React, { useState } from 'react';
import '../Css/Table.css';

export const Table = () => { //table creation
    const [tableData, setTableData] = useState([{ id: 1, name: 'Row 1' }]); //useState set with array of json object with first value = 1

    const addRow = () => { //appending json object to the useState array
      const newRow = {
        id: tableData.length + 1,
        name: `Row ${tableData.length + 1}`
      };
      setTableData([...tableData, newRow]); //updates the state variable tableData with newRow which returns a newly updates array
    };

    const deleteRow = (id) => {
      setTableData(tableData.filter(row => row.id !== id));
    };
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => ( //.map is going to generate rows by generating row elements for each index in the tableData row
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <button onClick={() => deleteRow(row.id)}>Delete</button> {/*on the click of the button, you call delete row function*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button> {/*on the click of the button, it will call the addRow function to append new row to array*/}
    </div>
  )
}
