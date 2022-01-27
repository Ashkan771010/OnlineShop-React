import { AboutUsContainer } from "./about-us.style";
import { useEffect } from "react";

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <AboutUsContainer>
        <div className="inner-width">
          <h1>درباره ما</h1>
          <div className="border"></div>
          <div className="about-section-row">
            <div className="about-section-col">
              <div className="about">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
                <a href="##">مطالعه بیشتر</a>
              </div>
            </div>
            <div className="about-section-col">
              <div className="skills">
                <div className="skill">
                  <div className="title">ضمانت اصل بودن کالا</div>
                  <div className="progress">
                    <div className="progress-bar p1">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="title">رضایت مشتریان از خرید</div>
                  <div className="progress">
                    <div className="progress-bar p2">
                      <span>70%</span>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="title">گارانتی معتبر</div>
                  <div className="progress">
                    <div className="progress-bar p3">
                      <span>50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutUsContainer>
    );
}
 
export default AboutUs;