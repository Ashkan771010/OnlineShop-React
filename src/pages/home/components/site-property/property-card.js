import { PropertyCardDiv } from "./property-card.style";


const PropertyCard = (props) => {
  const { number, title, description } = props;

  return (
    <PropertyCardDiv>
      <div className="property-number">
        <h3>{number}</h3>
      </div>
      <div className="property-description">
        <div className="triangle-left"></div>
        <div className="property-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </PropertyCardDiv>
  );
};

export default PropertyCard;
