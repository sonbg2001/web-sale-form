import "./Breadcrumb.scss";
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Trang chủ</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="/">Tất cả sản phẩm</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          CHÂN VÁY BÚT CHÌ Z17732
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
