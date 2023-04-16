import React, { useState } from 'react';
import axios from 'axios';

export default function AddStaf() {
  const [input, setInput] = useState({
    stafName: '', price: '', photo: '', opisanie: '',
  });
  const addHandler = (e) => {
    e.preventDefault();
    const oneStaf = Object.fromEntries(new FormData(e.target));
    axios.post('/api/addstaf', oneStaf);
    setInput({
      stafName: '',
      opisanie: '',
      price: '',
      photo: '',
    });
  };

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          {/* Form */}
          <form className="additem-form" action="" method="post" onSubmit={addHandler}>
            <div className="form-group">
              <input type="text" name="stafName" value={input.stafName} onChange={changeHandler} className="form-control" placeholder="Comix Name" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="opisanie" value={input.opisanie} onChange={changeHandler} rows="3" placeholder="description" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="photo"
                value={input.photo}
                onChange={changeHandler}
                className="form-control"
                placeholder="link to photo"
                required
              />
            </div>
            <div className="form-row">
              <div className="col">
                <input type="number" name="price" value={input.price} onChange={changeHandler} className="form-control" placeholder="price" required />
              </div>
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-secondary">add Comix</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
