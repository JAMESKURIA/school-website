import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  children: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
