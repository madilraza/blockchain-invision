import React from "react";
import "./style.css";
import Header from "../../components/Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  return (
    <div className="home">
      {/* topTopArrow */}
      <div className="toTopArrow position-fixed bottom-0 end-0">
        <a href="#top">
          <img src="assets/images/arrowUp.png" alt="" className="img-fluid" />
        </a>
      </div>

      <div className="home__hero" id="top">
        <Header />
        <div className="container pt-5 mt-5 text-white">
          <h3 style={{ maxWidth: "600px" }} className="mt-5 pt-4">
            A Leading Investment Advisor & Marketing Firm in Blockchain Industry
          </h3>
        </div>
      </div>
      <div className="home__about">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 col-md-12">
              <h1 className="text-orange fw-normal">About us</h1>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img
                src="assets/images/logo.png"
                className="img-fluid"
                alt=""
                style={{ width: "80px", opacity: 0.3 }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7">
              <br />
              <p>
                Vision Labs is a leading investment advisor & marketing firm in
                blockchain industry. Our main business includes:
              </p>
              <br />
              <p>
                1.Brand management & Marketing: Brand consultation, PR, Meet-up,
                Community Building.
              </p>
              <br />
              <p>
                2. Banking business: China Investment VCs Tour，FA, Exchange
                listing and so on.
              </p>
              <br />
              <p>
                Since its establishment, Vision Labs has served more than 30
                blockchain projects, such as OASISBloc、Lepricon 、Cere
                Network、Moma Finance、Aliumswap、Roseon、Labs、 Torum and so
                on. Focus on providing marketing and business consulting
                services for valuable blockchain projects, helping projects
                build brands, export content, and interact with the community,
                while the company's collaborative resources include top
                investment institutions and exchanges.
              </p>
            </div>
            <div className="col-5 d-none d-md-flex justify-content-center align-items-start">
              <img
                src="assets/images/logo.png"
                alt=""
                className="img-fluid pt-5"
                width="300px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <h1 className="text-orange text-center fw-normal pt-5 pb-5">
            Professional Services
          </h1>
          <div className="row mt-5 ">
            <div className="col-6 col-md-3">
              <h5 className="text-orange2 text-center">
                Investment Advisor Services
              </h5>
              <br />
              <p>FA，Exchange listing, China Investment VCs Tour.</p>
            </div>
            <div className="col-6 col-md-3">
              <h5 className="text-orange2 text-center">
                Brand, Marketing & PR
              </h5>
              <br />
              <p>
                Brand strategy consultation, position planning, content matrix
                strategy, article writing, connection to global media as well as
                well-known KOL and so on.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h5 className="text-orange2 text-center">Community Building</h5>
              <br />
              <p>
                To offer the project a complete set of customized schemes for
                community building and management.
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h5 className="text-orange2 text-center">Meet-up</h5>
              <br />
              <p>
                We owns a meet-up execution team of almost 100 people, standing
                out in the industry.
              </p>
            </div>
          </div>
          <div
            className="row justify-content-end align-items-center pe-5 pt-5"
            style={{ opacity: 0.3 }}
          >
            <img
              src="assets/images/logo.png"
              className="img-fluid"
              alt=""
              style={{ width: "80px", opacity: 0.3 }}
            />
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <h2 className="text-orange2 text-center pt-5 pb-5">
            Investment Advisor Services
          </h2>
          <div className="row mt-5 ">
            <div className="col-2 d-none d-md-flex"></div>
            <div className="col-12 col-md-8">
              <p>
                To offer premium investment advisor services to the excellent
                project, Including but not limited to connecting to the
                well-known investment institutions around the world,
                coordinating with global leading cryptocurrency exchange and so
                on. Vision Labs has assisted OASISBloc (an distributed data
                storage project in Korea) in the financing business in Asia
                Pacific Region; successfully held several China Investment VCs
                Tour.
              </p>
            </div>
            <div className="col-2 d-none d-md-flex"></div>
          </div>
          <div className="row">
            <OwlCarousel
              className="owl-theme owl-carousel"
              loop
              margin={15}
              nav={false}
              dots={false}
              center={true}
            >
              <div class="item">
                <img src="assets/images/carousel_placeholder.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder2.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder2.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder2.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder2.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder.jpg" alt="" />
              </div>
              <div class="item">
                <img src="assets/images/carousel_placeholder2.jpg" alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2 className="text-orange2 text-center pt-5 pb-5">
                Brand、Marketing & PR
              </h2>
              <p>
                To provide global promising blockchain projects with brand
                strategy consultation, position planning, content matrix
                strategy, article writing, connection to global media as well as
                well-known KOL and so on. To offer an effective and integrated
                marketing project of an integrated project, so as to create
                differentiated brand image. Covering overall media all over the
                world, Vision Labs has built a strategic partnership with most
                of top media. Classifying the distributing channels, Vision Labs
                is able to maximize the effectiveness of the publication. In
                addition, Vision Labs owns the most professional content editing
                team, which has written for dozens of selected projects
                effectively and efficiently.
              </p>
            </div>
            <div className="col-2 d-none d-md-flex"></div>
            <div className="col-12 col-md-5">
              <h2 className="text-orange2 text-center pt-5 pb-5">
                Community Building
              </h2>
              <p>
                To offer the project a complete set of customized schemes for
                community building and early management and provide fast and
                high-caliber user traffic, turning to guiding the project to run
                the community by itself.
              </p>
            </div>
          </div>
          <div
            className="row justify-content-end align-items-center pe-5 pt-5"
            style={{ opacity: 0.3 }}
          >
            <img
              src="assets/images/logo.png"
              className="img-fluid"
              alt=""
              style={{ width: "80px" }}
            />
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <h2 className="text-orange2 text-center pt-5 pb-5">Meetup</h2>
          <div className="row">
            <div className="col-12 col-md-5">
              <p style={{ lineHeight: "35px" }}>
                Vision Labs owns a meet-up execution team of almost 100 people,
                standing out in the industry. The team has served Huobi.pro
                ecological conference, brand press in Seoul Blockchain Summit,
                Shanghai Blockchain Summit and many other big events and project
                roadshows. According to the business vision and community
                culture, Vision Labs is able to design targeted strategy and
                reliable meet-up execution.
              </p>
            </div>
            <div className="col-2 d-none d-md-flex"></div>
            <div className="col-12 col-md-5">
              <img
                src="assets/images/meetup.png"
                alt=""
                className="img-fluid"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5" style={{ maxWidth: "900px" }}>
          <h2 className="text-orange2 text-center pt-5 pb-5">Partners</h2>
          <br />
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row my-4">
            <div className="col-1"></div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="/">
                <img
                  src="assets/images/brand-temp.png"
                  alt=""
                  width="100px"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-1"></div>
          </div>
          <br />
          <br />
          <br />
          <div
            className="row justify-content-end align-items-center pe-5 pt-5"
            style={{ opacity: 0.3 }}
          >
            <img
              className="img-fluid"
              src="assets/images/logo.png"
              alt=""
              style={{ width: "80px" }}
            />
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <h2 className="text-orange2 text-center pt-5 pb-5">
            Team Introduction
          </h2>
          <br />
          <div className="row">
            <div className="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/meetup.png"
                alt=""
                width="200px"
              />
              <br />
              <strong>Hebe Xu</strong>
              <br />
              <p>Co-founder</p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/meetup.png"
                alt=""
                width="200px"
              />
              <br />
              <strong>Hebe Xu</strong>
              <br />
              <p>Co-founder</p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/meetup.png"
                alt=""
                width="200px"
              />
              <br />
              <strong>Hebe Xu</strong>
              <br />
              <p>Co-founder</p>
            </div>
            <div className="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="assets/images/meetup.png"
                alt=""
                width="200px"
              />
              <br />
              <strong>Hebe Xu</strong>
              <br />
              <p>Co-founder</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div
            className="row justify-content-end align-items-center pe-5 pt-5"
            style={{ opacity: 0.3 }}
          >
            <img
              className="img-fluid"
              src="assets/images/logo.png"
              alt=""
              style={{ width: "80px" }}
            />
          </div>
        </div>
      </div>
      <div className="home__services">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-3"></div>
            <div className="col-6">
              <h2 className="text-orange text-center pt-5 pb-5">Contact us</h2>
            </div>
            <div className="col-3">
              <img
                className="img-fluid"
                src="assets/images/logo.png"
                alt=""
                style={{ width: "120px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 row fs-5 my-3">
              <div className="col-12 col-md-4 d-flex justify-content-md-end footerText">
                Official Website:
              </div>
              <div className="col-12 col-md-8 text-underline d-flex  justify-content-md-start ps-4 footerText">
                http://www.blockchainvisionlabs.com
              </div>
            </div>
            <div className="col-12 row fs-5 my-3">
              <div className="col-12 col-md-4 d-flex justify-content-md-end footerText">
                Email:
              </div>
              <div className="col-12 col-md-8 text-underline d-flex  justify-content-md-start ps-4 footerText">
                info@blockchainvisionlabs.com
              </div>
            </div>
            <div className="col-12 row fs-5 my-3">
              <div className="col-12 col-md-4 d-flex justify-content-md-end footerText">
                Address:
              </div>
              <div className="col-12 col-md-8 text-underline d-flex  justify-content-md-start ps-4 footerText">
                7th Floor, Jingpin, No. 68, Yuyuan Road, Jing'an District,
                Shanghai
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
