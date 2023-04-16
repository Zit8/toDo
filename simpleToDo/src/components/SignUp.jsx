import React from 'react';
import axios from 'axios';

// Компонент с формой регистрации новой учётной записи
export default function SignUp() {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    axios.post('/api/user/signup', formData)
      .then(() => { window.location = '/mainpage'; })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          {/* Form */}
          <form className="signup-form" action="" method="post" onSubmit={submitHandler}>
            <div className="form-group mt-5">
              <input type="text" name="userName" className="form-control" placeholder="name..." required />
            </div>
            <div className="form-group mt-5">
              <input type="email" name="email" className="form-control" placeholder="email..." required />
            </div>
            <div className="form-group mt-5">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password..."
                required
              />
            </div>
            <div className="form-group mt-5">
              <select name="role" className="custom-select" required>
                <option value="default" disabled>select your role</option>
                <option value="buyer">buyer</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-secondary">&nbsp; register &nbsp;</button>
            </div>
          </form>
          {/* Form end */}
        </div>
      </div>
    </div>
  );
}
