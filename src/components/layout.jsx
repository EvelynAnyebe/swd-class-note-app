import NavBar from "./navBar";
import Footer from "./footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Layout({ children }) {
  const scrollToTop=()=>{
    window.scrollTo(0, 0);
  }
  return (
    <div id="main">
      <NavBar />
      {children}
      <div id="scrollToTop" onClick={scrollToTop}><FontAwesomeIcon icon={['fas','arrow-up']} className="" aria-hidden="true" />Top</div>
      <Footer />
    </div>
  );
}

export default Layout;
