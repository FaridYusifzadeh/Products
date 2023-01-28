import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Post } from "../services/fetchServices";

const newProducts = () => {
  const [products, setProdutc] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const onHandleChange = (e) => {
    setProdutc({ ...products, [e.target.name]: e.target.value });
  };

  const createProduct = () => {
    Post("/products/add", products).then((response) => {
      console.log(response);
    });
  };

  const { title, description, price, category } = products;

  return (
    <div className="container">
      <div style={{ marginTop: "20px", marginBottom: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          value={title}
          onChange={onHandleChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          value={description}
          onChange={onHandleChange}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          value={price}
          onChange={onHandleChange}
        />
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          name="category"
          value={category}
          onChange={onHandleChange}
        />
        <Button variant="contained" onClick={createProduct}>
          Create product
        </Button>
      </div>
    </div>
  );
};

export default newProducts;
