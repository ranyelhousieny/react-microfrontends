import React from 'react';
const MFE1_Button = React.lazy(
  () => import('MFE1/Button')
);

function App() {
  return (
    <div>
      <h1>
        Micro-Frontend Host
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
          Button from MFE1
        </h3>
        <React.Suspense fallback='Loading Button'>
          <MFE1_Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
