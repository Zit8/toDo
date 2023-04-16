import axios from 'axios';
import React, { useState } from 'react';
import OneStaf from './OneStaf';

export default function MainPage({ allStaf, user }) {
  const [stafs, setStafs] = useState(allStaf);

  const deliteHandler = (id) => {
    axios.delete(`/api/${id}`)
      .then(() => setStafs((prev) => prev.filter((el) => el.id !== id)));
  };
  return (
    <div className="row">
      {stafs.map((staf) => <OneStaf key={staf.id} staf={staf} setStafs={setStafs} deliteHandler={deliteHandler} user={user} />)}
    </div>
  );
}
