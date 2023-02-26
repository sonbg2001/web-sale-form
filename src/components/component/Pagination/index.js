import "./Pagination.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Pagination() {
  useEffect(() => {
    const pageItems = document.getElementsByClassName("page-item");
    for (var i = 0; i < pageItems.length; i++) {
      pageItems[i].addEventListener("click", function () {
        var current = document.querySelector(".page-item.active");
        current.className = current.className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);

  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination">
        <li className="page-item active">
          <Link className="page-link" to="/products">
            Trước
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/products">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/products">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/products">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/products">
            Sau
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
