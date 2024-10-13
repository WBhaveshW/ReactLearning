import React from 'react';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';
import LoginProfile from './LoginProfile';

const CheckLogin = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const login = query.get('login');
  console.log(id);
  console.log("login", typeof login);
  let content;
  let isLoggedIn = query.get('login') === 'true'; // Convert to boolean
  console.log("isLoggedIn", typeof isLoggedIn);
  console.log(isLoggedIn == 'true');
  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />;
  }
  return (
    // When you don’t need the else branch, you can also use a shorter logical && syntax:
    <div>
      {content}
      {isLoggedIn ? (alert("Logged In")) : (alert("unable to Login"))}
      {isLoggedIn && <LoginProfile />}
    </div>
  );


};

export default CheckLogin;
