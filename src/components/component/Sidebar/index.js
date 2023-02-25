import "./Sidebar.scss";
import ListGroup from "../ListGroup";
function Sidebar() {
  return (
    <div className="col-sm-3 d-none d-sm-block">
      <h2>Danh mục</h2>
      <ListGroup title={"Đầm"} items={["item1", "item2", "item3"]} />
      <ListGroup title={"Áo"} items={["item1", "item2", "item3"]} />
    </div>
  );
}

export default Sidebar;
