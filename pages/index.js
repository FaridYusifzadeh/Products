import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Get } from "../services/fetchServices";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/router";

// services

//  components
import Layout from "../components/Layout";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "brand",
    headerName: "Brand",
    width: 250,
  },
  {
    field: "category",
    headerName: "Category",
    width: 250,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "price",
    headerName: "price $",
    width: 210,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 210,
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [allProductsData, setAllProductsData] = useState({});
  const router = useRouter();
  useEffect(() => {
    Get("/products").then((response) => {
      setProducts(response.products);
      setAllProductsData(response);
    });
  }, []);

  const searchProduct = (e) => {
    Get(`/products/search?q=${e.target.value}`).then((response) => {
      setProducts(response.products);
      setAllProductsData(response);
    });
  };

  const goToDetails = (row) => {
    router.push(`product/${row.id}`);
  };

  const { total } = allProductsData;

  return (
    <Layout title="Home Page">
      <div className="container">
        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={searchProduct}
          />

          <Link href="/newProducts">Create product</Link>
        </div>
        <Box sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[total]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onCellClick={(row) => goToDetails(row)}
            disableColumnMenu
          />
        </Box>
      </div>
    </Layout>
  );
}
