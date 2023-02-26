import Footer from "../../component/Footer";
import Header from "../../component/Header";
import LoginModel from "../../component/LoginModel";
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
      <LoginModel />

      <Header />
      <div className="main-pages">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
