import styles from "../components/SearchResult.module.css";
import { calculateDiscountCents } from "../utils/calculations.js";

const InstallmentsSection = ({
	installments,
	original_price_cents,
	discount_percentage,
	total_installments,
}) => {
	const INTEREST_CONSTANT = 1.329487;
	const currentPriceCents = calculateDiscountCents(
		original_price_cents,
		discount_percentage
	);
	const amoutPerMonthCents = Math.round(
		(currentPriceCents / total_installments) * INTEREST_CONSTANT
	);

	if (installments.interest_free_months) {
		const interestFreeInstallment = Math.floor(
			currentPriceCents / installments.interest_free_months
		);
		return (
			<span
				className={[
					styles["price-section__installments"],
					styles["price-section__installments--interest-free"],
				].join(" ")}
			>
				Mismo precio en {installments.interest_free_months} cuotas de{" "}
				<span className={styles["money-amount__currency-symbol"]}>
					$
				</span>
				<span className={styles["money-amount__fraction"]}>
					{Math.floor(interestFreeInstallment / 100).toLocaleString(
						"es-AR"
					)}
				</span>
			</span>
		);
	} else {
		return (
			<span className={styles["price-section__installments"]}>
				en {installments.with_interest.months} cuotas de{" "}
				<span>
					<span className={styles["money-amount__currency-symbol"]}>
						$
					</span>
					<span className={styles["money-amount__fraction"]}>
						{Math.ceil(amoutPerMonthCents / 100).toLocaleString(
							"es-AR"
						)}
					</span>
				</span>
			</span>
		);
	}
};

export default InstallmentsSection;
