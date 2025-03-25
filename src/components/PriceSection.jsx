import styles from "../components/SearchResult.module.css";
import { calculateDiscount } from "../utils/calculations.js";

const PriceSection = ({ current_cents, previous_cents, has_discount }) => {
	const discount = calculateDiscount(previous_cents, current_cents);
	return (
		<div className={styles["card-content__price-section"]}>
			<s className={styles["price-section__previous"]}>
				<span className={styles["money-amount__currency-symbol"]}>
					$
				</span>
				<span className={styles["money-amount__fraction"]}>
					{previous_cents.toLocaleString("es-AR")}
				</span>
			</s>
			<div className={styles["price-section__current"]}>
				<span>
					<span className={styles["money-amount__currency-symbol"]}>
						$
					</span>
					<span className={styles["money-amount__fraction"]}>
						{current_cents.toLocaleString("es-AR")}
					</span>
				</span>
				{has_discount && (
					<span
						className={styles["price-section__current--discount"]}
					>
						{discount.toFixed()}% OFF
					</span>
				)}
			</div>
		</div>
	);
};

export default PriceSection;
