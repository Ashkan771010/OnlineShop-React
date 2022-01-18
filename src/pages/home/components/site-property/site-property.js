import PropertyCard from "./property-card";
import { PropertyDiv } from "./site-property.style";


const SiteProperty = () => {

  return (
    <PropertyDiv>
      <div className="property-title">
        <h1>
          چرا از ما <span>خرید کنید</span> ؟
        </h1>
      </div>
      <div className="property-card">
        <PropertyCard
          number={1}
          title="اصالت"
          description="ضمانت اصل بودن"
        />
        <PropertyCard
          number={2}
          title="پشتیبانی"
          description="پشتیبانی 24 ساعته"
        />
        <PropertyCard
          number={3}
          title="پرداخت"
          description="امکان پرداخت درب منزل"
        />
        <PropertyCard
          number={4}
          title="گارانتی"
          description="گارانتی فیزیکی کالا"
        />
      </div>
    </PropertyDiv>
  );
};

export default SiteProperty;
