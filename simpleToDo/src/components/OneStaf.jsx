import axios from 'axios';
import React, { useState } from 'react';

export default function OneStaf({
  staf, setStafs, deliteHandler, user,
}) {
  const [input, setInput] = useState({ newPrice: staf.price });
  const [change, setChange] = useState(false);
  const onChange = () => {
    if (change) {
      axios.patch(`/api/change/${staf.id}`, input)
        .then((res) => {
          setChange(false);
          setStafs((prev) => prev.map((el) => {
            if (el.id === res.data.id) return res.data;
            return el;
          }));
        });
    }
  };

  return (
    <div className="card" style={{ width: '18rem;' }}>
      <img src={staf.photo} className="card-img-top" alt="..." />
      <ul className="list-group list-group-flush">
        <h5 className="card-title">{staf.stafName}</h5>
        <li className="list-group-item">{staf.opisanie}</li>
        {!change
          ? <li className="list-group-item">{staf.price}</li>
          : <input value={input.changes} onChange={(e) => setInput({ newPrice: e.target.value })} />}
        {!change && user?.role
          ? <button type="button" onClick={() => setChange((prev) => !prev)} className="btn btn-outline-primary"> Rename</button>
          : user?.role && <button type="button" onClick={onChange} className="btn btn-outline-primary">Sucses</button>}
      </ul>
      {user?.id === staf.userId
      && <button type="button" className="btn btn-danger" onClick={() => deliteHandler(staf.id)}>Danger</button>}
    </div>
  );
}
