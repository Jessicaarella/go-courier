import React, { useState } from 'react';
import axios from 'axios';

function TransactionPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const host = axios.create({
  //   baseURL: `192.168.1.12:3000/api/`,
  // })
  axios.defaults.url = '192.168.1.12:3000/api/';

  const handleTransaction = (event) => {
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
        <h1 className="text-center">Form Send Your Package</h1>
        <form onSubmit={handleTransaction}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">Services</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Express Services</option>
              <option value="1">Regular Service</option>
              <option value="2">Economy Service</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">From Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Destination Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Payment Slip</label>
            <input class="form-control" type="file" accept="image/*" id="formFile"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TransactionPage;
