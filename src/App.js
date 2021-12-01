import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import TransactionPage from './components/TransactionPage';
import TransactionListPage from './components/TransactionListPage';


function App() {
  return (
    <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Go-Courier</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <div class="d-flex justify-content-evenly" style={{ width: '200px' }}>
          <Link to={"/login"}>
            <button class="btn btn-primary" type="button">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button class="btn btn-outline-light" type="button">Sign Up</button>
          </Link>
          </div>
        </div>
      </div>
    </nav>

      <div className="container mt-3">
        <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<RegisterPage />}></Route>
        <Route exact path="/transaction" element={<TransactionPage />}></Route>
        <Route exact path="/transaction/list" element={<TransactionListPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
