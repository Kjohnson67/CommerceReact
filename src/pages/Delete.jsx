import { useState } from 'react'
import commercelogo from '../assets/commercelogo.png'
import { Nav } from '../components/Nav'
import '../Css/Nav.css'
import axios from 'axios';

export const Delete = () => {
  const [deleteId, setDeleteId] = useState('');

  const handleChange = (e) => {
    setDeleteId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/serverinfos/${deleteId}`);
      alert(`Row with ID ${deleteId} deleted successfully!`);
      setDeleteId('');
    } catch (error) {
      console.error('Error deleting row:', error);
      alert('An error occurred while deleting row.');
    }
  };
  return (
    <div className="delete-page">
      <><Nav /></>
      <h1>Delete Data</h1>
      <label htmlFor="deleteId">Enter Row ID to Delete:</label>
      <input
        type="text"
        id="deleteId"
        value={deleteId}
        onChange={handleChange}
        placeholder="Row ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
