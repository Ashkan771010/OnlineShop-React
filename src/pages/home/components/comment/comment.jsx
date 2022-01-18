import CommentSlider from "../slider/comment-slider";
import { CommentContainer } from "./comment.style";

const Comment = () => {
    return (
        <CommentContainer>
            <div className="comment-title">
                <h1>نظرات <span>مشتریان</span></h1>
            </div>
            <div className="comment-slider">
                <CommentSlider />
            </div>
        </CommentContainer>
    );
}
 
export default Comment
