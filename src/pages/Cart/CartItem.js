import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/selectors";

function CartItem({ cart = 1, index = 1 }) {
  const hanndleDelete = () => {
    console.log("Delete");
  };
  const products = useSelector(productsSelector);
  // eslint-disable-next-line eqeqeq
  const product = products.find((item) => item.id == cart.productId);

  return (
    <tr className="cart-item">
      <th scope="row">{index}</th>
      <td>
        <div className="cart-item-wrapper">
          <img
            style={{
              height: "200px",
            }}
            src={
              product &&
              (product.images[0] ||
                "https://www.invert.vn/media/uploads/uploads/2022/12/03195008-4.jpeg")
            }
            alt=""
          />
        </div>
      </td>
      <td>
        <div>
          <h1>{product.name}</h1>
          <p>Phiên bản: Size 2 / Đen</p>
          <p>Thương hiệu: {product.brand || "NEM"}</p>
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={hanndleDelete}
          >
            Xóa
          </p>
        </div>
      </td>
      <td>{product.price}₫</td>
      <td>
        <div>
          <input
            style={{
              width: "40px",
            }}
            min="1"
            type="number"
            name="number"
            value={cart.number}
            onChange={(e) => {
              console.log(e.target.value);
              e.value = e.target.value;
              console.log("Number change");
            }}
          />
        </div>
      </td>
      <td>
        <h1>{cart.number * product.price}₫</h1>
      </td>
    </tr>
  );
}

export default CartItem;
