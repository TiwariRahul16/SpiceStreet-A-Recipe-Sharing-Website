import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from reloading

    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("username", res.data.username);
      navigate("/home");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <section className=" p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="/images/login.jpg" alt="BootstrapBrain Logo" />
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label"> Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary" type="submit"> Log in now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <Link to={"/register"} className="link-secondary text-decoration-none">
                          Create new account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
