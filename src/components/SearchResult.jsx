import styles from "./SearchResult.module.css";
import RatingStars from "../components/RatingStars.jsx";
import PriceSection from "../components/PriceSection.jsx";
import InstallmentsSection from "../components/InstallmentsSection.jsx";
import BookmarkButton from "./BookmarkButton.jsx";

function SearchResult({
	images,
	product_name,
	rating,
	original_price_cents,
	installments,
	discount_percentage,
	is_free_shipping,
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
						<img
							src={images[0]}
							alt={product_name}
							className={styles["card-gallery__picture"]}
						/>
					</div>
					<div className={styles["card-content"]}>
						<h3 className={styles["card-content__title-wrapper"]}>
							<a
								href="https://www.mercadolibre.com.ar/rack-organizador-de-cocina-65cm-escurridor-seca-platos-color-negro/p/MLA37218388#polycard_client=search-nordic&searchVariation=MLA37218388&wid=MLA1993005910&position=27&search_layout=grid&type=product&tracking_id=9c052743-09aa-4dd3-8b3f-f272c920fb63&sid=search"
								className={styles["card-content__title"]}
							>
								{product_name}
							</a>
						</h3>
						{rating.total_reviews > 0 && (
							<div className={styles["card-content__reviews"]}>
								<span>{average_rating.toFixed(1)}</span>
								<RatingStars average_rating={average_rating} />
								<span>({rating.total_reviews})</span>
							</div>
						)}
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
						{is_free_shipping && (
							<strong className={styles["shipping"]}>
								Envío gratis
							</strong>
						)}
					</div>
					<BookmarkButton />
				</div>
			</div>
		</>
	);
}

export default SearchResult;
