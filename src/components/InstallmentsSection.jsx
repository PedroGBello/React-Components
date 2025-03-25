import styles from "../components/SearchResult.module.css";

const InstallmentsSection = ({ installments, current_cents }) => {
	if (installments.interest_free) {
		const interestFreeInstallment = Math.floor(
			current_cents / installments.interest_free
		);
		return (
			<span
				className={[
					styles["price-section__installments"],
					styles["price-section__installments--interest-free"],
				].join(" ")}
			>
				Mismo precio en {installments.interest_free} cuotas de{" "}
				<span className={styles["money-amount__currency-symbol"]}>
					$
				</span>
				<span className={styles["money-amount__fraction"]}>
					{interestFreeInstallment.toLocaleString("es-AR")}
				</span>
			</span>
		);
	} else {
		return (
			<span className={styles["price-section__installments"]}>
				en {installments.surcharge[0]} cuotas de{" "}
				<span>
					<span className={styles["money-amount__currency-symbol"]}>
						$
					</span>
					<span className={styles["money-amount__fraction"]}>
						{installments.surcharge[1].toLocaleString("es-AR")}
					</span>
				</span>
			</span>
		);
	}
};

export default InstallmentsSection;
