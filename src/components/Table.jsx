import React, { useState } from 'react';
import '../Css/Table.css';

export const Table = () => { //table creation
    const [tableData, setTableData] = useState([{svrUID: 12, appUID: 1, srcName: 'Johnson3', srcIP: '192.168.10.0', 
    destName: 'Sus4', destIP: '192.168.20.0', port: '80',  ipStatus: 'Active', createdAt: "14:35", createdBy: 'kJohnson',
    modifiedAt: '15:23', modifiedBy: 'yourBOI'}]); //useState set with array of json object with first value = 1
  
    /*useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };*/

  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>Server UID</th>
            <th>App UID</th>
            <th>Src. Host Name</th>
            <th>Src. IP</th>
            <th>Dest. Host Name</th>
            <th>Dest. IP</th>
            <th>Port #</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Date Modified</th>
            <th>Modified By</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => ( //.map is going to generate rows by generating table row elements for each index in the tableData array
              <tr key={row.id}>
              <td>{row.svrUID}</td>
              <td>{row.appUID}</td>
              <td>{row.srcName}</td>
              <td>{row.srcIP}</td>
              <td>{row.destName}</td>
              <td>{row.destIP}</td>
              <td>{row.port}</td>
              <td>{row.ipStatus}</td>
              <td>{row.createdAt}</td>
              <td>{row.createdBy}</td>
              <td>{row.modifiedAt}</td>
              <td>{row.modifiedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
