import styles from "./SearchResult.module.css";
import RatingStars from "../components/RatingStars.jsx";
import PriceSection from "../components/PriceSection.jsx";
import InstallmentsSection from "../components/InstallmentsSection.jsx";
import BookmarkButton from "./BookmarkButton.jsx";

function SearchResult({
	images,
	product_name,
	product_rating,
	current_cents,
	previous_cents,
	has_discount,
	installments,
	is_free_shipping,
}) {
	const rating = product_rating.rating_stars / 10;

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
						<div className={styles["card-content__reviews"]}>
							<span>{rating.toFixed(1)}</span>
							<RatingStars rating={rating} />
							<span>({product_rating.rating_quantity})</span>
						</div>
						<PriceSection
							current_cents={current_cents}
							previous_cents={previous_cents}
							has_discount={has_discount}
						/>
						<InstallmentsSection
							installments={installments}
							current_cents={current_cents}
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
