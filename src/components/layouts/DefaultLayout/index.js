import Footer from "../../component/Footer";
import Header from "../../component/Header";
function DefaultLayout({ children }) {
  function handleMoveOnTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  handleMoveOnTop();

  return (
    <div>
      <Header />
      <div className="main-pages">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
