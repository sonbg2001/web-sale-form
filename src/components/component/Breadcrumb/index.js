import "./Breadcrumb.scss";
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Trang chủ</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Tất cả sản phẩm
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
