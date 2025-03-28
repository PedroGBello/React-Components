import React from "react";
import styles from "./SearchResult.module.css";

import { RiVerifiedBadgeFill } from "react-icons/ri";

function SellerSection({ seller_name, is_verified_seller }) {
	return (
		<div className={styles["card-content__seller-wrapper"]}>
			<span className={styles["seller"]}>
				{`Por ${seller_name} `}
				{is_verified_seller && (
					<RiVerifiedBadgeFill className={styles["cockade"]} />
				)}
			</span>
		</div>
	);
}

export default SellerSection;
