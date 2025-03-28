import styles from "./SearchResult.module.css";

import { BsLightningFill } from "react-icons/bs"; // FULL (shipping provider)

function ShippingSection({
	is_free_shipping,
	is_same_day_delivery,
	is_next_day_delivery,
	shipping_provider,
}) {
	const getDeliveryMessage = () => {
		if (is_same_day_delivery)
			return is_free_shipping ? "Llega gratis hoy" : "Llega hoy";
		if (is_next_day_delivery)
			return is_free_shipping ? "Llega gratis mañana" : "Llega mañana";
		if (is_free_shipping) return "Envío gratis";
		return null;
	};

	const message = getDeliveryMessage();

	return message ? (
		<div className={styles["shipping"]}>
			<span
				className={[
					message.includes("hoy") ? styles["shipping--same_day"] : "",
					message.includes("mañana")
						? styles["shipping--next_day"]
						: "",
				].join(" ")}
			>
				{message}
			</span>
		</div>
	) : null;
}

export default ShippingSection;
