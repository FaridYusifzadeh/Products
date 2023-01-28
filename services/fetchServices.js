import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

const REACT_APP_BASE_URL = "https://dummyjson.com";

const ErrorHandle = (res) => {
  if (
    res.status == 400 ||
    res.status == 404 ||
    res.status == 401 ||
    res.status == 403
  ) {
    Swal.fire({
      title: `${res.error}`,
      text: `${res.message}`,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#4f46e5",
      width: "400px",
      height: "400px",
    });
  } else if (res.status == 500) {
    Swal.fire({
      title: `Sistem Xətası!`,
      text: `Xahiş edirik biraz sonra yenidən cəhd edin !`,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#4f46e5",
      width: "400px",
      height: "400px",
    });
  }
};

const Get = (url, header) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${REACT_APP_BASE_URL}${url}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        ErrorHandle(err.response.data);
        reject(err.response.data);
      });
  });
};

const Post = (url, data, header) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${REACT_APP_BASE_URL}${url}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        ErrorHandle(err.response.data);
        reject(err.response.data);
      });
  });
};

const Put = (url, data, header) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${REACT_APP_BASE_URL}${url}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        ErrorHandle(err.response.data);
        reject(err.response.data);
      });
  });
};

const Delete = (url, header) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${REACT_APP_BASE_URL}${url}`)
      .then((res) => {
        resolve(res.data);
        Swal.fire({
          title: "Əməliyyat uğurla yerinə yetirildi.",
          icon: "success",
          text: res.data.data.message,
        });
      })
      .catch((err) => {
        ErrorHandle(err.response.data);
        reject(err.response.data);
      });
  });
};

export { Get, Post, Put, Delete };
