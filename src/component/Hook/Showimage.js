import React, { useState } from 'react'

function Showimage() {
    const [color, setColor] = useState("");
  
    return (
      <>
        <h1>Hii {color}!</h1>
        <button
          type="button"
          onClick={() => setColor(<img src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg" width={50} height={50}/>)}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor( <img src="https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg" alt="description of image" width={50} height={50}/>)}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg"width={50} height={50} />)}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg" width={50} height={50}/>)}
        >Green</button>
      </>
    );
  }

export default Showimage;