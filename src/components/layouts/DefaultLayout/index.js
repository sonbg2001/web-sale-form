import Footer from "../../component/Footer";
import Header from "../../component/Header";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main-pages">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
