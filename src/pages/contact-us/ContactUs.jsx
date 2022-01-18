import { ContactUsContainer } from "./contact-us.style";
import { useEffect } from "react";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <ContactUsContainer>
        <div className="text">ارتباط با ما</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>نام</label>
            </div>
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>نام خانوادگی</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>ایمیل</label>
            </div>
            <div className="input-data">
              <input type="text" required />
              <div className="underline"></div>
              <label>شماره تماس</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <div className="underline"></div>
              <label>پیام خود را بنویسید</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <button type="submit" className="submit-btn1">ارسال</button>
            </div>
          </div>
        </form>
      </ContactUsContainer>
    );
}
 
export default ContactUs;