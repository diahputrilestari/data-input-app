import React, { useState } from 'react';
import FormInput from './components/FormInput';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const [dataList, setDataList] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const addData = (newData) => {
    setDataList([...dataList, newData]);
    setShowForm(false);
  };

  return (
    <div className="App">
      {showForm ? (
        <FormInput onSubmit={addData} />
      ) : (
        <DataTable dataList={dataList} onAddNew={() => setShowForm(true)} />
      )}
    </div>
  );
}

export default App;
