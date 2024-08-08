import { Email, LockOutlined, PersonOutline } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ type }) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  return (
    <div className="auth">
      <div className="content">
        <img src="/assets/logo.png" alt="logo" className="logo" />
  
        <form className="form">
          {type === "register" && (
            <div className="input">
              <input
              {...register("username"), {required: "Username is required"}}
                type="text"
                placeholder="Username"
                className="input-field "
              />
              <PersonOutline sx={{ color: "#737373" }} />
            </div>
          )}

          <div className="input">
            <input type="email" placeholder="Email" className="input-field " />
            <Email sx={{ color: "#737373" }} />
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Password"
              className="input-field "
            />
            <LockOutlined sx={{ color: "#737373" }} />
          </div>
          <button className="button" type="submit">
            {type == "register" ? "Join free" : "Let's chat"}
          </button>
        </form>
        {type === "register" ? (
          <Link href="/" className="link">
            <p className="text-center">Already have an account? Sign In Here</p>
          </Link>
        ) : (
          <Link href="/register" className="link">
            <p className="text-center">Don't have account ? Register Here</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
