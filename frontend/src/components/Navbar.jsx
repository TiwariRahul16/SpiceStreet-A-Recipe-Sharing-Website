import React from 'react';
import { Link,useLocation} from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));
  const navigate = useNavigate();


  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('username'));
    };

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username'); // Remove username on logout
    setIsLoggedIn(false); // Update state
    navigate('/login'); // Redirect to login page
  };

  const location = useLocation(); // Get current route path

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when clicking the image
  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section class="py-2">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <Link class="navbar-brand" href="/home">Forkistry</Link> <button aria-controls="navbarSupportedContent11" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent11" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent11">
              <ul class="navbar-nav mx-auto my-2 my-lg-0">
                <li class="nav-item text-center me-4">
                <Link className={`nav-link py-0 ${location.pathname === "/home" ? "active" : ""}`} to="home"><svg className="bi bi-shop d-block mx-auto mb-1" fill="currentColor" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> Home</Link>
                  {/* <Link class="nav-link py-0" to={'home'}><svg class="bi bi-shop d-block mx-auto mb-1" fill="currentColor" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> Home</Link> */}
                </li>
                <li class="nav-item text-center me-4">
                  {/* <Link class="nav-link py-0" to={'/recipe'}><svg class="bi bi-shop d-block mx-auto mb-1" fill="currentColor" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg> Recipe</Link> */}
                  <Link className={`nav-link py-0 ${location.pathname === "/recipe" ? "active" : ""}`} to={'recipe'}><svg class="bi bi-shop d-block mx-auto mb-1" fill="currentColor" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg> Recipe</Link>
                </li>
                <li class="nav-item text-center me-4">
                  {/* <Link class="nav-link py-0" to={'about'}><svg class="bi bi-info-circle d-block mx-auto mb-1" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"> */}
                  <Link className={`nav-link py-0 ${location.pathname === "/about" ? "active" : ""}`} to={'about'}><svg class="bi bi-info-circle d-block mx-auto mb-1" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg> About</Link>
                </li>
                <li class="nav-item text-center me-4">
                  {/* <Link class="nav-link py-0" to={'contact'}><svg class="bi bi-person-lines-fill d-block mx-auto mb-1" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"> */}
                  <Link className={`nav-link py-0 ${location.pathname === "/contact" ? "active" : ""}`} to={'contact'}><svg class="bi bi-person-lines-fill d-block mx-auto mb-1" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path></svg> Contact</Link>
                </li>
              </ul>
            
          {!isLoggedIn && (
            <div className='loginSignup'>
            <Link class="btn btn-primary" to={'login'}>Login </Link>
            <Link class="btn btn-primary" to={'register'}>Sign up</Link>
            </div>
          )}
            
        {isLoggedIn  && (
              <div className="loginSignup profile_dropdown" ref={dropdownRef}>
              <div className="profile-icon" onClick={toggleDropdown}>
                <img height={30} width={30} src="logo192.png" alt="Profile" />
              </div>
              {open && (
                <ul className="dropdown-profilemenu">
                  <li><Link to="home" onClick={handleLogout}>Logout</Link></li>
                  <li><Link to="addrecipe">Add Recipe</Link></li>
                  <li><Link to="editrecipe">Edit Recipe</Link></li>
                  <li><Link to="savedrecipes">Saved Recipes</Link></li>
                </ul>
              )}
            </div>
        )}
     
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
