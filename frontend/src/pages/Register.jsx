import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <>
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="/images/register.jpg" alt="BootstrapBrain Logo" />
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="mb-5">
                    <h2 className="h3">Registration</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter your details to register
                    </h3>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  {success && <p className="text-success">{success}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input  type="password"  className="form-control"  name="password"  id="password"  placeholder="Password"  value={formData.password}  onChange={handleChange}  required  />
                      </div>
                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password <span className="text-danger">*</span>
                        </label>
                        <input  type="password"  className="form-control"  name="confirmPassword"  id="confirmPassword"  placeholder="Confirm Password"  value={formData.confirmPassword}  onChange={handleChange}  required  />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary" type="submit">
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <p className="m-0 text-secondary text-center">
                        Already have an account?{" "}
                        <Link to={"/login"} className="link-primary text-decoration-none">
                          Sign in
                        </Link>
                      </p>
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

export default Register;
