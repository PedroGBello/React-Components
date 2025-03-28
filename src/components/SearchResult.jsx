import styles from "./SearchResult.module.css";
import ProductHighlight from "./ProductHighlight.jsx";
import ProductRating from "./ProductRating.jsx";
import PriceSection from "../components/PriceSection.jsx";
import SellerSection from "./SellerSection.jsx";
import PromotionSection from "./PromotionSection.jsx";
import ShippingSection from "./ShippingSection.jsx";
import InstallmentsSection from "../components/InstallmentsSection.jsx";
import BookmarkButton from "./BookmarkButton.jsx";

function SearchResult({
	images,
	product_name,
	product_brand,
	seller_name,
	is_verified_seller,
	rating,
	original_price_cents,
	installments,
	discount_percentage,
	is_free_shipping,
	is_same_day_delivery,
	is_next_day_delivery,
	is_promoted,
	highlight,
	rebates,
	coupon,
	shipping_provider,
}) {
	const average_rating = rating.average_stars / 10;

	return (
		<>
			<div className={styles["ui-search-result__wrapper"]}>
				<div
					className={[
						styles["card"],
						styles["card--flat"],
						styles["card--animated"],
					].join(" ")}
				>
					<div className={styles["card-gallery"]}>
						{/* If images.length > 1, then render Carousel */}
						{/* Loading bar */}
						<img
							src={images[0]}
							alt={product_name}
							width="150"
							height="150"
							loading="lazy"
							className={styles["card-gallery__picture"]}
						/>
					</div>
					<div className={styles["card-content"]}>
						<ProductHighlight highlight={highlight} />
						{product_brand && (
							<span className={styles["brand"]}>
								{product_brand.toUpperCase()}
							</span>
						)}
						<h3
							className={[
								styles["card-content__title-wrapper"],
								product_brand ? styles["brand+"] : "",
							].join(" ")}
						>
							<a
								href="https://www.mercadolibre.com.ar/rack-organizador-de-cocina-65cm-escurridor-seca-platos-color-negro/p/MLA37218388#polycard_client=search-nordic&searchVariation=MLA37218388&wid=MLA1993005910&position=27&search_layout=grid&type=product&tracking_id=9c052743-09aa-4dd3-8b3f-f272c920fb63&sid=search"
								className={styles["card-content__title"]}
							>
								{product_name}
							</a>
						</h3>
						<SellerSection
							seller_name={seller_name}
							is_verified_seller={is_verified_seller}
						/>
						<ProductRating
							rating={rating}
							average_rating={average_rating}
						/>
						<PriceSection
							original_price_cents={original_price_cents}
							discount_percentage={discount_percentage}
						/>
						<InstallmentsSection
							installments={installments}
							original_price_cents={original_price_cents}
							discount_percentage={discount_percentage}
							total_installments={
								installments.with_interest.months
							}
						/>
						<PromotionSection rebates={rebates} coupon={coupon} />

						<ShippingSection
							is_free_shipping={is_free_shipping}
							is_same_day_delivery={is_same_day_delivery}
							is_next_day_delivery={is_next_day_delivery}
							shipping_provider={shipping_provider}
						/>
					</div>
					{is_promoted ? (
						<div className={styles["footer"]}>
							<a
								href="https://publicidad.mercadolibre.com.ar"
								target="_blank"
								className={styles["ads-promotion"]}
							>
								Promocionado
							</a>
						</div>
					) : null}
					<BookmarkButton />
				</div>
			</div>
		</>
	);
}

export default SearchResult;
