import axios from "axios";

function getData() {
  let data;
  axios
    .get(`http://localhost:3000/products`)
    .then((res) => {
      data = res.data;
    })
    .catch((error) => console.log(error));
  return data;
}

export default getData;
