import React from 'react';

function DataTable({ dataList, onAddNew }) {
  return (
    <div className="data-table">
      <h2>Data Tersimpan</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Nomor Telepon</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAddNew}>Tambah Data Baru</button>
    </div>
  );
}

export default DataTable;
