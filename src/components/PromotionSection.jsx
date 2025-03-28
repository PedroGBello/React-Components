import styles from "./SearchResult.module.css";
import { RiCouponLine } from "react-icons/ri";

function PromotionSection({ rebates, coupon }) {
	return (
		<>
			{rebates > 0 ? (
				<div className={styles["rebates"]}>
					<span>{rebates}% OFF Cuotas sin tarjeta</span>
				</div>
			) : null}

			{coupon > 0 ? (
				<div className={styles["coupons"]}>
					<span className={styles["coupons__pill"]}>
						<RiCouponLine className={styles["coupon-icon"]} />
						{"Cupón "}
						<span
							className={styles["money-amount__currency-symbol"]}
						>
							$
						</span>
						<span className={styles["money-amount__fraction"]}>
							{coupon.toLocaleString("es-AR")}
						</span>
						{" OFF"}
					</span>
				</div>
			) : null}
		</>
	);
}

export default PromotionSection;
