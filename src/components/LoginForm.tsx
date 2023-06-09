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
      error: isError,
    },
  ] = useLoginUserMutation();
  const {
    data: users,
    // isSuccess: isUserSuccess,
    // isError: isUserError,
  } = useGetUsersQuery(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // const low = Math.floor(Math.random() * 6)
  // const high = Math.floor(Math.random() * low-1) + 5
  // console.log(low, high)
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username && password) {
      await loginUser({ username, password });
    } else {
      toast.error("All input fields are required");
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("Login Success");
      dispatch(
        setUser({
          token: loginData.token,
          name: loginData.firstName,
          email: loginData.email,
          username: loginData.username,
          lastName: loginData.last,
          image: loginData.image,
          gender: loginData.gender,
          id: loginData.id,
        })
      );
      navigate("/");
    }

    if (isLoginError || isError) {
      toast.error("Password or Username is wrong");
      navigate("/login");
    }
  }, [isLoginSuccess, isError]);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Text copied to clipboard");
        toast.success('Text copied to clipboard')
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 5000);
    
  }, [alert]);

  console.log(alert)

  return (
    <div className="bg-white mx-auto max-w-md shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
      {/* {} */}
      <form>
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
          <p className="md:mt-8 font-bold">
            Use any of the following details to access the project
          </p>
          {alert && <p className="italic text-xs font-semibold text-green-500 transition duration-2000">Text copied to clipboard</p>}
          <div className="md:grid md:grid-cols-2 md:mt-2">
            {users?.users?.slice(0, 4).map((user: any) => (
              <div className="" key={user?.id}>
                <div className="border px-5 py-3">
                  <h3
                    onClick={() => {
                      handleCopy(`${user?.username}`);
                      setAlert(!alert);
                    }}
                  >
                    Username: {user?.username}
                  </h3>
                  <h3
                    onClick={() => {
                      handleCopy(`${user?.password}`);
                      setAlert(!alert);
                    }}
                  >
                    Password: {user?.password}
                  </h3>
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
