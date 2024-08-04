import Layout from "../../components/Layout";
import BannerImg from "../../assets/slider_1.jpg";
import Cat1 from "../../assets/banner_1.jpg";
import Cat2 from "../../assets/banner_2.jpg";
import Cat3 from "../../assets/banner_3.jpg";
import "./index.scss";
import Products from "../../components/Products";

const Home = () => {
  return (
    <Layout>
      <div className="homePage">
        <div className="banner">
          <img src={BannerImg} alt="Banner" />
          <div className="bannerText">
            <div className="container">
              <div>
                <p>Spring / Summer Collection 2017</p>
                <h1>Get up to 30% Off New Arrivals</h1>
                <a href="">Shop now</a>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="categories">
            <div className="container">
              <div className="categoryCards">
                <a href="" className="category">
                  <img src={Cat1} alt="" />
                  <span>women&apos;s</span>
                </a>
                <a href="" className="category">
                  <img src={Cat2} alt="" />
                  <span>accessories&apos;s</span>
                </a>
                <a href="" className="category">
                  <img src={Cat3} alt="" />
                  <span>men&apos;s</span>
                </a>
              </div>
            </div>
          </div>

          <Products />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
