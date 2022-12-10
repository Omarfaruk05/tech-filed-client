import React from "react";
import InputGroup from "../../conponents/InputGroup";

const AddProduct = () => {
  return (
    <div>
      <h2 className="text-secondary text-xl text-center font-bold my-4">
        Add a new Product
      </h2>
      <div className="mx-auto max-w-5xl">
        <InputGroup></InputGroup>
      </div>
    </div>
  );
};

export default AddProduct;
