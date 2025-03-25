import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import styles from "./SearchResult.module.css";
import { calculateStars } from "../utils/calculations.js";

const RatingStars = ({ rating }) => {
	const { fullStars, hasHalfStar, emptyStars } = calculateStars(rating);
	return (
		<span className={styles["reviews__stars"]}>
			{Array.from({
				length: fullStars,
			}).map((_, index) => (
				<IoMdStar key={index} className={styles["reviews__star-icon"]} />
			))}
			{hasHalfStar && <IoMdStarHalf className={styles["reviews__star-icon"]} />}
			{Array.from({
				length: emptyStars,
			}).map((_, index) => (
				<IoMdStarOutline key={index} className={styles["reviews__star-icon"]} />
			))}
		</span>
	);
};

export default RatingStars;
