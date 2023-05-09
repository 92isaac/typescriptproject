import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/services';
import { useSelector } from "react-redux"
import { loginSuccess, selectCurrentToken, selectCurrentUser } from '../features/User';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(loginSuccess)
  // const token = useSelector(selectCurrentToken)
  // const user = useSelector(selectCurrentUser)
  console.log(user)
  // console.log(token)

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(login(username, password));
    if( user) return navigate('/home')
    console.log(username, password);

  };

  return (
    <div className="bg-white mx-auto max-w-md shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
      {/* {} */}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-gray-900"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <hr className="my-8 border-t" />
        <p className="text-center">
          Don't have an account?{' '}
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700"
            href="#"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;