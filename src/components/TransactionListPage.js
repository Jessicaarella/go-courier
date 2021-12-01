import React, { useState } from 'react';
import axios from 'axios';

function TransactionListPage() {

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
        <div className="body w-100 h-100">
            <div className="">
                <h1>Your Shipment Tracking List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Received By</th>
                            <th scope="col">Last Updated</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Abdul</td>
                            <td>2021</td>
                            <td>
                                <a className="btn btn-primary btn-sm" href="#" role="button">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Temon</td>
                            <td>2021</td>
                            <td>
                                <a className="btn btn-primary btn-sm" href="#" role="button">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@twitter</td>
                            <td>Yuli</td>
                            <td>2021</td>
                            <td>
                                <a className="btn btn-primary btn-sm" href="#" role="button">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        {/* Modal */}
        </div>
    );
}

export default TransactionListPage;
