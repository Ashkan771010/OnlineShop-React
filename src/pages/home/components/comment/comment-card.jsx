import { CommentCardContainer } from "./comment-card.style";

const CommentCard = (props) => {
    const { res } = props;

    return (
      <CommentCardContainer>
        <div className="comment-image-container">
          <img src={res?.image} alt="CommentImage" />
        </div>
        <p>{res?.comment}</p>
        <h3>{res?.name} -</h3>
      </CommentCardContainer>
    );
}
 
export default CommentCard;