import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="container-welcome-page">
        
        <div className="info-welcome-page">
        <img
          src="../../img/logo.png"
          alt="logo"
          className="benito-logo-welcome"
        />
          <h1 className="title-page-welcome"> Benito's Burger </h1>
          <Link to="homepage">
            <button className="btn-order-now"> Order now </button>
          </Link>
        </div>
        <img
          src="../../img/burger-home-page.png"
          alt="burger welcome"
          className="burger-welcome-img"
        />
        <div className="burger-welcome"></div>
      </div>
    </>
  );
};

export default WelcomePage;
