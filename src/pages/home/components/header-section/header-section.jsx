import Slider from "../slider/slider";
import { HeaderSectionContainer } from "./header-section.style";
import Banner1 from "../../../../assets/images/banner-1.jpg";
import Banner2 from "../../../../assets/images/Banner-2.jpg";


const HeaderSection = () => {
    return (
      <HeaderSectionContainer>
        <Slider />
        <div className="header-banner">
          <img src={Banner1} alt="banner1" />
          <img src={Banner2} alt="banner2" />
        </div>
      </HeaderSectionContainer>
    );
}
 
export default HeaderSection;