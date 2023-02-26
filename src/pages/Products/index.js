import Breadcrumb from "../../components/component/Breadcrumb";
import Collection from "../../components/component/Collection/Collection";
import Pagination from "../../components/component/Pagination";
import Sidebar from "../../components/component/Sidebar";
import "./Products.scss";
function Products() {
  return (
    <div className="inner">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>
      <div className="row">
        <div className="col-sm-3 col-12 d-sm-block">
          <Sidebar />
        </div>
        <div className="col-sm-9 col-12">
          <Collection />
          <div className="pagination-wrapper">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
