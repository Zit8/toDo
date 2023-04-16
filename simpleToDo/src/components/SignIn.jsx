import React from 'react';
import axios from 'axios';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios.post('/api/user/signin', data)
      .then(() => {
        window.location = '/mainpage';
      });
  };
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          {/* Form */}
          <form className="signin-form" onSubmit={submitHandler}>
            <div className="form-group mt-5">
              <input type="email" name="email" className="form-control email" id="email" placeholder="email..." />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                name="password"
                className="form-control password"
                id="password"
                placeholder="password..."
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-secondary">&nbsp; Login &nbsp;</button>
            </div>
          </form>
          {/* Form end */}
        </div>
      </div>
    </div>
  );
}
