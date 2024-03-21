import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Table.css'

export const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/serverinfos');
      setTableData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

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
          {tableData.map((row, index) => (
            <tr key={index} className={row === selectedRow ? 'selected' : ''} onClick={() => handleRowClick(row)}>
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
  );
};
