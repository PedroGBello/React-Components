import styles from "./SearchResult.module.css";
import RatingStars from "../components/RatingStars.jsx";

function ProductRating({ rating, average_rating }) {
	return rating.total_reviews > 0 ? (
		<div className={styles["card-content__reviews"]}>
			<span>{average_rating.toFixed(1)}</span>
			<RatingStars average_rating={average_rating} />
			<span>({rating.total_reviews})</span>
		</div>
	) : null;
}

export default ProductRating;
