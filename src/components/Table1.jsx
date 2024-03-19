import { useState } from 'react'
import '../Css/Table.css'

export const Table = () => { //component that creates a table for the ip tracker
  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr><th>ID</th><th>First Name</th><th>Last Name</th><th>IP Status</th><th>IP Address</th><th>Port #</th><th>Date Added</th><th>Date Modified</th></tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>Kobe</td><td>Johnson</td><td>Active</td><td>192.168.10.11</td><td>80</td><td>3/1/2024</td><td>3/1/2024</td></tr>
          <tr><td>1</td><td>Sally</td><td>Jones</td><td id='inactive'>Inactive</td><td>192.168.10.12</td><td>80</td><td>3/20/2024</td><td>3/21/2024</td></tr>
          <tr><td>2</td><td>Jake</td><td>Johnson</td><td>Active</td><td>192.168.10.13</td><td>80</td><td>3/10/2024</td><td>3/16/2024</td></tr>
          <tr><td>3</td><td>Phil</td><td>Swift</td><td id='inactive'>Inactive</td><td>192.168.10.14</td><td>80</td><td>3/13/2024</td><td>3/17/2024</td></tr>
          <tr><td>4</td><td>Joey</td><td>Diaz</td><td>Active</td><td>192.168.10.15</td><td>80</td><td>3/11/2024</td><td>3/18/2024</td></tr>
          <tr><td>5</td><td>Drake</td><td>Josh</td><td id='inactive'>Inactive</td><td>192.168.10.16</td><td>80</td><td>3/19/2024</td><td>3/25/2024</td></tr>
        </tbody>
      </table>
    </div>
  )
};