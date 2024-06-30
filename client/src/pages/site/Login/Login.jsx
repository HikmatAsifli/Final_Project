import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import login1 from "../../../assets/images/page/login-1.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4404/api/users/login', { email, password });
      localStorage.setItem('authToken', response.data.token);

      // Fetch user profile to check if admin
      const userProfile = await axios.get('http://localhost:4404/api/users/profile', {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      if (userProfile.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/shop');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fa-sharp fa-thin fa-house mr-5"></i>
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img
                    className="border-radius-15"
                    src={login1}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don't have an account?{" "}
                          <Link to="/register">Create here</Link>
                        </p>
                      </div>
                      <form onSubmit={handleSubmit} method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="email"
                            placeholder="Username or Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            placeholder="Your password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="login"
                          >
                            Log in
                          </button>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
