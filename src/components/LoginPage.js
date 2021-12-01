import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const host = axios.create({
  //   baseURL: `192.168.1.12:3000/api/`,
  // })
  axios.defaults.url = '192.168.1.12:3000/api/';

  const handleLogin = (event) => {
    console.log('haiii');
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    axios({
      method: "post",
      // baseURL: '192.168.1.12:3000/api/',
      url: "api/auth/login",
      data: formData,
    })
      .then(function (response) {
        //handle success
    alert(username);

        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }

  return (
    <div className="body w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">Username {username}</label>
            <input type="text" className="form-control" onChange={ (e) => setUsername(e.target.value) } id="exampleInputUsername1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
