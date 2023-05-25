import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../features/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../constant/hooks";
import { setUser } from "../features/authSlice";
import Modal from "./commonfiles/Modal";
import { useGetUsersQuery } from "../features/productApiSlice";

const LoginForm = () => {
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
    },
  ] = useLoginUserMutation();
  const 
    {
      data: users,
      // isSuccess: isUserSuccess,
      // isError: isUserError,
    }
  = useGetUsersQuery(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogin = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(username && password) {
      await loginUser({username, password});
    }else {
      toast.error('All input fields are required')
    }
  };

  useEffect(()=>{
    if(isLoginSuccess){
      toast.success('Login Success');
      dispatch(setUser({token:loginData.token, name:loginData.firstName, email:loginData.email, firstName:loginData.firstName, lastName:loginData.last, image:loginData.image, gender:loginData.gender, phone:loginData.phone, birthDate:loginData.birthDate, address:loginData.address, city:loginData.city}))
      navigate('/')
    }
    if(isLoginError){
      toast.error('Something went wrong');
      navigate('/signin')
    }
    
  }, [isLoginSuccess]);

  return (
    <div className="bg-white mx-auto max-w-md shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
      {/* {} */}
      <form 
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
            onClick={handleLogin}
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
          Don't have an account?{" "}
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700"
            href="#"
          >
            Sign Up
          </a>
        </p>
      </form>
      <div className="flex justify-center align-middle">
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-[#349C83] rounded-md hover:bg-[#2A977D]"
        onClick={openModal}
      >
        Click for a demo
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <p className="md:mt-8 font-bold">Use any of the following details to access the project</p>
      <div className="md:grid md:grid-cols-2 md:mt-2">
          {users?.users?.slice(0,10).map((user:any) => (
           <div className="" key={user?.id}>
            <div className="border px-5 py-3">
            <h3>Username: {user?.username}</h3>
            <h3>Password: {user?.password}</h3>
            </div>
            <hr />
           </div>
          ))}
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default LoginForm;
