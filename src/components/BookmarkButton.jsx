import styles from "./SearchResult.module.css";
import { IoMdHeartEmpty } from "react-icons/io";

const BookmarkButton = () => {
	return (
		<div className={styles["bookmark"]}>
			<button className={styles["bookmark__btn"]} role="switch">
				<IoMdHeartEmpty className={styles["bookmark__icon"]} />
			</button>
		</div>
	);
};

export default BookmarkButton;
