import React, {useState} from 'react';

import './Home.css';
import './Home.queries.css';
import Logo from '../../assets/images/logo.svg';
import mockups from '../../assets/images/image-mockups.png';
import image1 from '../../assets/images/icon-online.svg';
import image2 from '../../assets/images/icon-budgeting.svg';
import image3 from '../../assets/images/icon-onboarding.svg';
import image4 from '../../assets/images/icon-api.svg';
import image5 from '../../assets/images/image-currency.jpg';
import image6 from '../../assets/images/image-restaurant.jpg';
import image7 from '../../assets/images/image-plane.jpg';
import image8 from '../../assets/images/image-currency.jpg';
import image9 from '../../assets/images/logoFooter.svg';
import image10 from '../../assets/images/icon-facebook.svg';
import image11 from '../../assets/images/icon-youtube.svg';
import image12 from '../../assets/images/icon-twitter.svg';
import image13 from '../../assets/images/icon-pinterest.svg';
import image14 from '../../assets/images/icon-instagram.svg';



const Home = (props) => {
  const [state, changeState] = useState(false);
    let navMenuClassArray = ["nav-menu"];
    const showNavMenu = () => {
      changeState(!state);
    }
    if(state){
      navMenuClassArray.push("nav-menu-show");
    }
    let navMenuClasses = navMenuClassArray.join(' ');
    console.log(navMenuClasses);

    
    return (
      <React.Fragment>
        <header>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="invite-cta">
            Request Invite
          </a>
          <div className="nav-menu-toggle" onClick={showNavMenu}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={navMenuClasses}> 
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </header>

        <section className="intro">
          <div className="intro-text">
            <h1>Next generation digital banking</h1>
            <p className="copy">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing and much
              more.
            </p>
            <a href="#" className="invite-cta">
              Request Invite
            </a>
          </div>
          <div className="mockups">
            <img src={mockups} alt="mockups" />
          </div>
        </section>

        <section className="features">
          <div className="features-box">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into a
              financial hub.
              <br />
              Control your finances like never before.
            </p>
            <div className="features-grid">
              <div>
                <div>
                  <img src={image1} alt="icon-online-banking" />
                </div>
                <h3>Online Banking</h3>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div>
                <div>
                  <img src={image2} alt="icon-budgeting" />
                </div>
                <h3>Simple Budgeting</h3>
                <p>
                  See exactly where your money goes each month. Receive
                  notification when you are close to hitting your limits.
                </p>
              </div>
              <div>
                <div>
                  <img src={image3} alt="icon-onboarding" />
                </div>
                <h3>Fast Onboarding</h3>
                <p>
                  We don't do branches. Open your acccount in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
              <div>
                <div>
                  <img src={image4} />
                </div>
                <h3>Open API</h3>
                <p>
                  Manage your savings, investments, pension and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-articles">
          <div>
            <h2>Latest Articles</h2>
            <div className="flexbox-container">
              <div className="article-card">
                <div>
                  <img src={image5} alt="currency" />
                </div>
                <div>
                  <address>By Claire Robinson</address>
                  <h4>Receive money in any currency with no fees</h4>
                  <p>
                    The world is getting smaller and we're becoming more mobile.
                    So why should you be forced to only receive money in a
                    single...
                  </p>
                </div>
              </div>
              <div className="article-card">
                <div>
                  <img src={image6} alt="restaurant" />
                </div>
                <div>
                  <address>By Wilson Hutton</address>
                  <h4>Treat yourself without worrying about money</h4>
                  <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means
                    you...
                  </p>
                </div>
              </div>
              <div className="article-card">
                <div>
                  <img src={image7} alt="plane" />
                </div>
                <div>
                  <address>By Wilson Hutton</address>
                  <h4>Take your Easybank card wherever you go</h4>
                  <p>
                    We want you to enjoy your travels. That's why we don't
                    charge any fees on purchases while you're abroad. We'll even
                    show you...
                  </p>
                </div>
              </div>
              <div className="article-card">
                <div>
                  <img src={image8} alt="currency" />
                </div>
                <div>
                  <address>By Claire Robinson</address>
                  <h4>Our invite-only Beta accounts are now live!</h4>
                  <p>
                    After a lot of hard work by the whole team, we're excited to
                    launch our closed beta. It's easy to request an invite
                    through the site...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-nav">
            <div className="social-links">
              <a href="#">
                <img src={image9} />
              </a>
              <div className="icon-container">
                <img src={image10} />
                <img src={image11} />
                <img src={image12} />
                <img src={image13} />
                <img src={image14} />
              </div>
            </div>

            <div className="internal-links">
              <div>
                <a href="#">About Us</a>
              </div>
              <div>
                <a href="#">Careers</a>
              </div>
              <div>
                <a href="#">Contact</a>
              </div>
              <div>
                <a href="#">Support</a>
              </div>
              <div>
                <a href="#">Blog</a>
              </div>
              <div>
                <a href="#">Privacy Policy </a>
              </div>
            </div>
            <div className="copyright-info">
              <a href="#" className="invite-cta">
                Request Invite
              </a>
              <br />
              <p>
                <small>&copy; Easybank. All Rights Reserved</small>
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
}

export default Home;