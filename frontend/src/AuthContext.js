// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);  // Convert token to boolean
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setIsLoggedIn(true);  // Update state
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);  // Update state
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import { useAuth } from './AuthContext';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const token = "user_token_123"; // Replace with actual token
//     login(token);  // Call login function from AuthContext
//     navigate('/'); // Redirect to homepage
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;






// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { AuthProvider } from './AuthContext';

// ReactDOM.render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>,
//   document.getElementById('root')
// );
