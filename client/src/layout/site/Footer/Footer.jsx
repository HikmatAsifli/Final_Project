import { Link } from 'react-router-dom';
import banner9 from "../../../assets/images/banner/banner-9.png"
import icon1 from "../../../assets/images/theme/icons/icon-1.svg"
import icon2 from "../../../assets/images/theme/icons/icon-2.svg"
import icon3 from "../../../assets/images/theme/icons/icon-3.svg"
import icon4 from "../../../assets/images/theme/icons/icon-4.svg"
import icon5 from "../../../assets/images/theme/icons/icon-5.svg"
import icon6 from "../../../assets/images/theme/icons/icon-6.svg"
import logo from "../../../assets/images/theme/logo.svg"
import iconLocation from "../../../assets/images/theme/icons/icon-location.svg"
import iconContact from "../../../assets/images/theme/icons/icon-contact.svg"
import iconEmail from "../../../assets/images/theme/icons/icon-email-2.svg"
import iconClock from "../../../assets/images/theme/icons/icon-clock.svg"
import appStore from "../../../assets/images/theme/app-store.jpg"
import googlePlay from "../../../assets/images/theme/google-play.jpg"
import paymentMethod from "../../../assets/images/theme/payment-method.png"
import phoneCall from "../../../assets/images/theme/icons/phone-call.svg"
import iconFacebook from "../../../assets/images/theme/icons/icon-facebook-white.svg"
import iconTwitter from "../../../assets/images/theme/icons/icon-twitter-white.svg"
import iconInstagram from "../../../assets/images/theme/icons/icon-instagram-white.svg"
import iconPinterest from "../../../assets/images/theme/icons/icon-pinterest-white.svg"
import iconYoutube from "../../../assets/images/theme/icons/icon-youtube-white.svg"





const Footer = () => {
  return (
    <footer className='main'>
      <section className="newsletter mb-15 wow animate__ animate__fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Stay home &amp; get your daily <br />
                    needs from our shop
                  </h2>
                  <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand">Nest Mart</span></p>
                  <form className="form-subcriber d-flex">
                    <input type="email" placeholder="Your emaill address" />
                    <button className="btn" type="submit">Subscribe</button>
                  </form>
                </div>
                <img src={banner9} alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
              <div className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon1} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Best prices &amp; offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon2} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Free delivery</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon3} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon4} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon5} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                <div className="banner-icon">
                  <img src={icon6} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="logo mb-30">
                  <Link className="mb-15" to="/"><img src={logo} alt="logo" /></Link>
                  <p className="font-lg text-heading">Awesome grocery store website template</p>
                </div>
                <ul className="contact-infor">
                  <li><img src={iconLocation} alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                  <li><img src={iconContact} alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                  <li><img src={iconEmail} alt="" /><strong>Email:</strong><span>sale@Nest.com</span></li>
                  <li><img src={iconClock} alt="" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
                </ul>
              </div>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated" data-wow-delay=".1s">
              <h4 className=" widget-title" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Company</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Delivery Information</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms &amp; Conditions</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Support Center</Link></li>
                <li><Link to="#">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Account</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><Link to="#">Sign In</Link></li>
                <li><Link to="#">View Cart</Link></li>
                <li><Link to="#">My Wishlist</Link></li>
                <li><Link to="#">Track My Order</Link></li>
                <li><Link to="#">Help Ticket</Link></li>
                <li><Link to="#">Shipping Details</Link></li>
                <li><Link to="#">Compare products</Link></li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Corporate</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><Link to="#">Become a Vendor</Link></li>
                <li><Link to="#">Affiliate Program</Link></li>
                <li><Link to="#">Farm Business</Link></li>
                <li><Link to="#">Farm Careers</Link></li>
                <li><Link to="#">Our Suppliers</Link></li>
                <li><Link to="#">Accessibility</Link></li>
                <li><Link to="#">Promotions</Link></li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Popular</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li><Link to="#">Milk &amp; Flavoured Milk</Link></li>
                <li><Link to="#">Butter and Margarine</Link></li>
                <li><Link to="#">Eggs Substitutes</Link></li>
                <li><Link to="#">Marmalades</Link></li>
                <li><Link to="#">Sour Cream and Dips</Link></li>
                <li><Link to="#">Tea &amp; Kombucha</Link></li>
                <li><Link to="#">Cheese</Link></li>
              </ul>
            </div>
            <div className="footer-link-widget widget-install-app col wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
              <h4 className="widget-title">Install App</h4>
              <p className>From App Store or Google Play</p>
              <div className="download-app">
                <Link to="#" className="hover-up mb-sm-2 mb-lg-0"><img className="active" src={appStore} alt="" /></Link>
                <Link to="#" className="hover-up mb-sm-2"><img src={googlePlay} alt="" /></Link>
              </div>
              <p className="mb-20">Secured Payment Gateways</p>
              <img className src={paymentMethod} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-30 wow animate__ animate__fadeInUp animated" data-wow-delay={0} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="row align-items-center">
          <div className="col-12 mb-30"></div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <p className="font-sm mb-0">© 2024, <strong className="text-brand">Nest</strong> - HTML Ecommerce Template <br />All rights reserved</p>
          </div>
          <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
            <div className="hotline d-lg-inline-flex mr-30">
              <img src={phoneCall} alt="hotline" />
              <p>1900 - 6666<span>Working 8:00 - 22:00</span></p>
            </div>
            <div className="hotline d-lg-inline-flex">
              <img src={phoneCall} alt="hotline" />
              <p>1900 - 8888<span>24/7 Support Center</span></p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
            <div className="mobile-social-icon">
              <h6>Follow Us</h6>
              <Link to="#"><img src={iconFacebook} alt="" /></Link>
              <Link to="#"><img src={iconTwitter} alt="" /></Link>
              <Link to="#"><img src={iconInstagram} alt="" /></Link>
              <Link to="#"><img src={iconPinterest} alt="" /></Link>
              <Link to="#"><img src={iconYoutube} alt="" /></Link>
            </div>
            <p className="font-sm">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
