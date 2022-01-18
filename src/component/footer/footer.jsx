import { FooterContainer } from "./footer.style";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const Footer = () => {
    return (
      <FooterContainer>
        <div className="footer-left">
          <h3>
            KALA<span>TOP</span>
          </h3>

          <p className="footer-links">
            <a href="##">خانه</a>
            <a href="##">درباره ما</a>
            <a href="##">محصولات</a>
            <a href="##">ارتباط با ما</a>
          </p>

          <p className="footer-company-name">webdevtrick &copy; 2019</p>
        </div>

        <div className="footer-center">
          <div className="address-container">
            <LocationOnIcon />
            <p>
              <span>21 Revolution Street</span> Delhi, India
            </p>
          </div>

          <div className="phone-container">
            <PhoneIcon />
            <p>+1 555 123456</p>
          </div>

          <div className="email-container">
            <EmailIcon />
            <p>
              <a href="mailto:ashkanmehranpoor@gmail.com">
                ashkanmehranpoor@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Web Dev Trick is a blog for web designers, graphic designers, web
            developers &amp; SEO Learner.
          </p>

          <div className="footer-icons">
            <a href="##">
              <InstagramIcon />
            </a>
            <a href="##">
              <TwitterIcon />
            </a>
            <a href="##">
              <LinkedInIcon />
            </a>
            <a href="##">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </FooterContainer>
    );
}
 
export default Footer;