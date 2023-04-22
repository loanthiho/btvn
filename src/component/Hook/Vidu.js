import React, { Component } from 'react';
import { useState } from 'react';

function Vidu() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Bạn đã bấm {count} lần</p>
        <button onClick={() => setCount(count + 1)}>
          Bấm vào tôi
        </button>
      </div>
        );
    }


export default Vidu;