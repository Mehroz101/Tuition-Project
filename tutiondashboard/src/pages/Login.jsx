import React from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../services/Api";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const method = useForm();
  const navigate = useNavigate()
  const signinMutation = useMutation({
    mutationFn:SignIn,
    onSuccess:(data)=>{
      if(data.success){
        localStorage.setItem("tuitionAdminToken",data.token)
        navigate("/")
      }
    }
  })
  const onsubmit = (data) => {
    signinMutation.mutate({
      username:data.username,
      password:data.password
    })
  };
  return (
    <div>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="auth" onSubmit={method.handleSubmit(onsubmit)}>
              <div class="auth__field">
                <i class="auth__icon fas fa-user"></i>
                <CustomTextInput
                  name="username"
                  label="Username"
                  placeHolder="Enter your username"
                  control={method.control}
                  rules={{ required: "username is required" }}
                />
              </div>
              <div class="auth__field">
                <i class="auth__icon fas fa-lock"></i>
                <CustomTextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeHolder="Enter your password"
                  control={method.control}
                  rules={{ required: "Password is required" }}
                />
              </div>
              <button class="button auth__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
