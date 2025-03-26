import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import styles from "./SearchResult.module.css";
import { calculateStars } from "../utils/calculations.js";

const RatingStars = ({ average_rating }) => {
	const { fullStars, hasHalfStar, emptyStars } =
		calculateStars(average_rating);
	return (
		<span className={styles["reviews__stars"]}>
			{Array.from({
				length: fullStars,
			}).map((_, index) => (
				<IoMdStar
					key={`full-${index}`}
					className={styles["reviews__star-icon"]}
				/>
			))}
			{hasHalfStar && (
				<IoMdStarHalf
					key="half"
					className={styles["reviews__star-icon"]}
				/>
			)}
			{Array.from({
				length: emptyStars,
			}).map((_, index) => (
				<IoMdStarOutline
					key={`empty-${index}`}
					className={styles["reviews__star-icon"]}
				/>
			))}
		</span>
	);
};

export default RatingStars;
