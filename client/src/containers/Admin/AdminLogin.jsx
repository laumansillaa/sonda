import React, { useState } from "react";
import { Footer } from "../../components";
import style from "./styles/login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // console.log("input", input);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.email && input.password) {
      dispatch(login(input)).then((response) => {
        console.log("Response", response);
        if (response.status === 200) {
          console.log('Login Exitoso')
          localStorage.setItem("session", true);
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <main className={style.contLogin}>
        <div className={style.contAux}>
          <form className={style.contForm}>
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className="rounded-lg px-1 py-2 border-none w-64"
              onChange={(e) => handleChange(e)}
            />
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-100"
            >
              Constraseña
            </label>

            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              name="password"
              className="rounded-lg px-1 py-2 border-none w-64"
              onChange={(e) => handleChange(e)}
            />
            <button
              type="submit"
              className="mt-5 bg-gradient-to-r text-white font-medium from-cyan-500 to-cyan-900 px-4 py-2 rounded-lg hover:opacity-90 transition-all ease-in-out flex-1 text-center flex items-center justify-center space-x-2"
              onClick={(e) => handleLogin(e)}
            >
              Ingresar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminLogin;
