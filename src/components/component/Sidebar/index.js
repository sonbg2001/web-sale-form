import "./Sidebar.scss";
import ListGroup from "../ListGroup";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Danh mục</h2>
      <ListGroup title={"Đầm"} items={["item1", "item2", "item3"]} />
      <ListGroup title={"Áo"} items={["item1", "item2", "item3"]} />
    </div>
  );
}

export default Sidebar;
