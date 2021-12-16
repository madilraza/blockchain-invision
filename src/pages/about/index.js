import React from "react";
import "./style.css";
import Header from "../../components/Header";

function About() {
  return (
    <div className="home">
      <div className="home__about">
        <Header />
        <div className="container py-5">
          <h1 className="text-orange fw-normal">About us</h1>
          <div className="row">
            <div className="col-7">
              <br />
              <p>
                10pearls.pk is a leading investment advisor & marketing firm in
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
            <div className="col-5 d-flex justify-content-center align-items-start">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt=""
                className="img-fluid pt-5"
                width="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
