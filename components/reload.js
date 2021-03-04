import React, { useEffect, useState } from 'react';

export default function Reload({ initFetch }) {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button style={{
        backgroundColor: '#e7e7e7',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '15px 32px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
        }} onClick={initFetch}>Reload</button>
    </div>
  )
}
