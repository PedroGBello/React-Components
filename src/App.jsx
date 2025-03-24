import { data } from "../src/data/data";
import styles from "./App.module.css";

import {
	IoMdStar,
	IoMdStarHalf,
	IoMdStarOutline,
	IoMdHeartEmpty,
} from "react-icons/io";

function App() {
	const rating = data[0].rating.rating_stars / 10;
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	const discount = (
		((data[0].previous_cents - data[0].current_cents) * 100) /
		data[0].previous_cents
	).toFixed();

	return (
		<>
			<div className={styles["ui-search-result__wrapper"]}>
				<div
					className={[
						styles["poly-card"],
						styles["poly-card--grid-card"],
						styles["card--flat"],
						styles["card--animated"],
					].join(" ")}
				>
					<div className={styles["poly-card__front"]}>
						<img
							src={data[0].images[0]}
							alt=""
							className={styles["poly-component__picture"]}
						/>
					</div>
					<div className={styles["poly-card__content"]}>
						<h3 className={styles["poly-component__title-wrapper"]}>
							<a
								href="https://www.mercadolibre.com.ar/rack-organizador-de-cocina-65cm-escurridor-seca-platos-color-negro/p/MLA37218388#polycard_client=search-nordic&searchVariation=MLA37218388&wid=MLA1993005910&position=27&search_layout=grid&type=product&tracking_id=9c052743-09aa-4dd3-8b3f-f272c920fb63&sid=search"
								className={styles["poly-component__title"]}
							>
								{data[0].product_name}
							</a>
						</h3>
						<div className={styles["poly-component__reviews"]}>
							<span>{rating.toFixed(1)}</span>
							<span className={styles["poly-reviews__stars"]}>
								{Array.from({
									length: fullStars,
								}).map((_, index) => (
									<IoMdStar
										key={index}
										className={styles["star-icon"]}
									/>
								))}
								{hasHalfStar && (
									<IoMdStarHalf
										className={styles["star-icon"]}
									/>
								)}
								{Array.from({
									length: emptyStars,
								}).map((_, index) => (
									<IoMdStarOutline
										key={index}
										className={styles["star-icon"]}
									/>
								))}
							</span>
							<span>({data[0].rating.rating_quantity})</span>
						</div>
						<div className={styles["poly-component__price"]}>
							<s className={styles["money-amount__previous"]}>
								<span
									className={
										styles["money-amount__currency-symbol"]
									}
								>
									$
								</span>
								<span
									className={styles["money-amount__fraction"]}
								>
									{data[0].previous_cents.toLocaleString(
										"es-AR"
									)}
								</span>
							</s>
							<div className={styles["poly-price__current"]}>
								<span className={styles["money-amount"]}>
									<span
										className={
											styles[
												"money-amount__currency-symbol"
											]
										}
									>
										$
									</span>
									<span
										className={
											styles["money-amount__fraction"]
										}
									>
										{data[0].current_cents.toLocaleString(
											"es-AR"
										)}
									</span>
								</span>
								{data[0].has_discount && (
									<span
										className={
											styles["money-amount__discount"]
										}
									>
										{discount}% OFF
									</span>
								)}
							</div>
							<span className={styles["poly-price__installment"]}>
								en {data[0].installments[0]} cuotas de{" "}
								<span className={styles["money-amount"]}>
									<span
										className={
											styles[
												"money-amount__currency-symbol"
											]
										}
									>
										$
									</span>
									<span
										className={
											styles["money-amount__fraction"]
										}
									>
										{data[0].installments[1].toLocaleString(
											"es-AR"
										)}
									</span>
								</span>
							</span>
						</div>
						{data[0].is_free_shipping && (
							<strong
								className={styles["poly-component__shipping"]}
							>
								Envío gratis
							</strong>
						)}
					</div>
					<div className={styles["poly-component__bookmark"]}>
						<button
							className={styles["poly-bookmark__btn"]}
							role="switch"
						>
							<IoMdHeartEmpty className={styles["heart-icon"]} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
