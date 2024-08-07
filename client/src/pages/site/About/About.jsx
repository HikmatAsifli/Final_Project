import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about1 from "../../../assets/images/page/about-1.png"
import about2 from "../../../assets/images/page/about-2.png"
import about3 from "../../../assets/images/page/about-3.png"
import about4 from "../../../assets/images/page/about-4.png"
import about5 from "../../../assets/images/page/about-5.png"
import about6 from "../../../assets/images/page/about-6.png"
import about8 from "../../../assets/images/page/about-8.png"
import icon1 from "../../../assets/images/theme/icons/icon-1.svg"
import icon2 from "../../../assets/images/theme/icons/icon-2.svg"
import icon3 from "../../../assets/images/theme/icons/icon-3.svg"
import icon4 from "../../../assets/images/theme/icons/icon-4.svg"
import icon5 from "../../../assets/images/theme/icons/icon-5.svg"
import icon6 from "../../../assets/images/theme/icons/icon-6.svg"
import iconFacebookBrand from "../../../assets/images/theme/icons/icon-facebook-brand.svg"
import iconTwitterBrand from "../../../assets/images/theme/icons/icon-twitter-brand.svg"
import iconInstagramBrand from "../../../assets/images/theme/icons/icon-instagram-brand.svg"
import iconYoutubeBrand from "../../../assets/images/theme/icons/icon-youtube-brand.svg"



const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fa-sharp fa-thin fa-house mr-5"></i>
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="page-content pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="row align-items-center mb-50">
                <div className="col-lg-6">
                  <img
                    src={about1}
                    alt=""
                    className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="pl-25">
                    <h2 className="mb-30">Welcome to Nest</h2>
                    <p className="mb-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate id est laborum.
                    </p>
                    <p className="mb-50">
                      Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                      prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                      libero venenatis faucibus. Nullam quis ante Etiam sit amet
                      orci eget. Quis commodo odio aenean sed adipiscing. Turpis
                      massa tincidunt dui ut ornare lectus. Auctor elit sed
                      vulputate mi sit amet. Commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate id est laborum.
                    </p>
                    <div className="carausel-3-columns-cover position-relative">
                      <Slider {...settings}>
                        <div>
                          <img
                            src={about3}
                            alt=""
                            className="slick-slide"
                          />
                        </div>
                        <div>
                          <img
                            src={about4}
                            alt=""
                            className="slick-slide"
                          />
                        </div>
                        <div>
                          <img
                            src={about2}
                            alt=""
                            className="slick-slide"
                          />
                        </div>
                        {/* Add more slides as needed */}
                      </Slider>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-center mb-50">
                <h2 className="title style-3 mb-40">What We Provide?</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon1} alt="" />
                      <h4>Best Prices &amp; Offers</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon2} alt="" />
                      <h4>Wide Assortment</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon3} alt="" />
                      <h4>Free Delivery</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon4} alt="" />
                      <h4>Easy Returns</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon5} alt="" />
                      <h4>100% Satisfaction</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src={icon6} alt="" />
                      <h4>Great Daily Deal</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form
                      </p>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="row align-items-center mb-50">
                <div className="row mb-50 align-items-center">
                  <div className="col-lg-7 pr-30">
                    <img
                      src={about5}
                      alt=""
                      className="mb-md-3 mb-lg-0 mb-sm-4"
                    />
                  </div>
                  <div className="col-lg-5">
                    <h4 className="mb-20 text-muted">Our performance</h4>
                    <h1 className="heading-1 mb-40">
                      Your Partner for e-commerce grocery solution
                    </h1>
                    <p className="mb-30">
                      Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                    </p>
                    <p>
                      Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 className="mb-30">Who we are</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                  <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 className="mb-30">Our history</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="mb-30">Our mission</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className="container mb-50 d-none d-md-block">
          <div className="row about-count">
            <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
              <h1 className="heading-1">
                <span className="count">12</span>+
              </h1>
              <h4>Glorious years</h4>
            </div>
            <div className="col-lg-1-5 col-md-6 text-center">
              <h1 className="heading-1">
                <span className="count">36</span>+
              </h1>
              <h4>Happy clients</h4>
            </div>
            <div className="col-lg-1-5 col-md-6 text-center">
              <h1 className="heading-1">
                <span className="count">56</span>+
              </h1>
              <h4>Projects complete</h4>
            </div>
            <div className="col-lg-1-5 col-md-6 text-center">
              <h1 className="heading-1">
                <span className="count">24</span>+
              </h1>
              <h4>Team advisor</h4>
            </div>
            <div className="col-lg-1-5 text-center d-none d-lg-block">
              <h1 className="heading-1">
                <span className="count">26</span>+
              </h1>
              <h4>Products Sale</h4>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="mb-50">
                <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                <div className="row">
                  <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                    <h6 className="mb-5 text-brand">Our Team</h6>
                    <h1 className="mb-30">Meet Our Expert Team</h1>
                    <p className="mb-30">
                      Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                      massa dolor imperdiet neccon sequata congue idsem. Maecenas
                      malesuada faucibus finibus.
                    </p>
                    <p className="mb-30">
                      Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                      massa dolor imperdiet neccon sequata congue idsem. Maecenas
                      malesuada faucibus finibus.
                    </p>
                    <Link to="#" className="btn">
                      View All Members
                    </Link>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="team-card">
                          <img src={about6} alt="" />
                          <div className="content text-center">
                            <h4 className="mb-5">H. Merinda</h4>
                            <span>CEO &amp; Co-Founder</span>
                            <div className="social-network mt-20">
                              <Link to="#">
                                <img
                                  src={iconFacebookBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconTwitterBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconInstagramBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconYoutubeBrand}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="team-card">
                          <img src={about8} alt="" />
                          <div className="content text-center">
                            <h4 className="mb-5">Dilan Specter</h4>
                            <span>Head Engineer</span>
                            <div className="social-network mt-20">
                              <Link to="#">
                                <img
                                  src={iconFacebookBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconTwitterBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconInstagramBrand}
                                  alt=""
                                />
                              </Link>
                              <Link to="#">
                                <img
                                  src={iconYoutubeBrand}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <i className="fa-sharp fa-thin fa-angle-right" style={{ color: "green" }}></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

export default About