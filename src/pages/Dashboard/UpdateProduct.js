import React from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log(watch("example"));
  };
  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default UpdateProduct;
