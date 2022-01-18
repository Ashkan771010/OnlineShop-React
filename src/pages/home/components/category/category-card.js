import { CategoryCardContainer } from "./category-card.style";

const CategoryCard = (props) => {
  const { title, img } = props;

  return (
    <CategoryCardContainer>
      <div className="wrraper">
        <img src={img} alt="img" />
      </div>
      <span>{title}</span>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
