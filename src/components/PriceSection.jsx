import styles from "../components/SearchResult.module.css";
import { calculateDiscountCents } from "../utils/calculations.js";

const PriceSection = ({ original_price_cents, discount_percentage }) => {
	const currentPriceCents = calculateDiscountCents(
		original_price_cents,
		discount_percentage
	);
	return (
		<div className={styles["card-content__price-section"]}>
			{discount_percentage >= 0 && (
				<s className={styles["price-section__previous"]}>
					<span className={styles["money-amount__currency-symbol"]}>
						$
					</span>
					<span className={styles["money-amount__fraction"]}>
						{Math.floor(original_price_cents / 100).toLocaleString(
							"es-AR"
						)}
					</span>
				</s>
			)}
			<div className={styles["price-section__current"]}>
				<span>
					<span className={styles["money-amount__currency-symbol"]}>
						$
					</span>
					<span className={styles["money-amount__fraction"]}>
						{Math.round(currentPriceCents / 100).toLocaleString(
							"es-AR"
						)}
					</span>
				</span>
				{discount_percentage > 0 && (
					<span
						className={styles["price-section__current--discount"]}
					>
						{discount_percentage.toFixed()}% OFF
					</span>
				)}
			</div>
		</div>
	);
};

export default PriceSection;
