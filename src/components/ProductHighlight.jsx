import React from "react";
import styles from "./SearchResult.module.css";

function ProductHighlight({ highlight }) {
	const highlightTextMap = {
		best_seller: "Más vendido",
		deal_of_the_day: "Oferta del día",
		flash_sale: "Oferta relámpago",
	};

	const getHighlight = () => {
		return Object.keys(highlight).find((key) => highlight[key]) || null;
	};

	const highlightProp = getHighlight();

	const highlightText = highlightProp
		? highlightTextMap[highlightProp]
		: null;

	return highlightProp ? (
		<span
			className={[
				styles["highlight"],
				styles[`highlight--${highlightProp}`],
			].join(" ")}
		>
			{highlightText.toUpperCase()}
		</span>
	) : null;
}

export default ProductHighlight;
