import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
function Login(props) {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder=" name"
        name="name"
        {...register("name")}
      // disabled={errors.name}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        {...register("email")}
      // disabled={errors.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;

