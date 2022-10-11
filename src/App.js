import React, { Suspense } from 'react';
import './App.css';
const DataTable = React.lazy(() => import('./components/dataTable'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div><img src='https://miro.medium.com/max/640/1*8NJgObmgEVhNWVt3poeTaA.gif' alt='Loading'/></div>}>
        <DataTable />
      </Suspense>
    </div>
  );
}

export default App;
