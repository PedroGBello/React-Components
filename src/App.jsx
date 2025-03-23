import "./App.css";
import picture from "./assets/product_1.webp";

function App() {
	return (
		<>
			<div className="ui-search-result__wrapper">
				<div className="poly-card poly-card--grid-card card--flat card--animated">
					<div className="poly-card__front">
						<img
							src={picture}
							alt=""
							className="poly-component__picture"
						/>
					</div>
					<div className="poly-card__content">
						<h3 className="poly-component__title-wrapper">
							<a
								href="https://www.mercadolibre.com.ar/rack-organizador-de-cocina-65cm-escurridor-seca-platos-color-negro/p/MLA37218388#polycard_client=search-nordic&searchVariation=MLA37218388&wid=MLA1993005910&position=27&search_layout=grid&type=product&tracking_id=9c052743-09aa-4dd3-8b3f-f272c920fb63&sid=search"
								className="poly-component__title"
							>
								Rack Organizador De Cocina 65cm Escurridor Seca
								Platos Color Negro
							</a>
						</h3>
						<div className="poly-component__reviews">
							<span>4.5</span>
							<span className="poly-reviews__stars">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#3483FA"
								>
									<path d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#3483FA"
								>
									<path d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#3483FA"
								>
									<path d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#3483FA"
								>
									<path d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#3483FA"
								>
									<path d="m620.08-266.31-36.62-160.31 123.39-106.92L544.08-548 480-698.31v346.23l140.08 85.77ZM293-203.08l49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
								</svg>
							</span>
							<span>(331)</span>
						</div>
						<div className="poly-component__price">
							<s className="money-amount__previous">
								<span className="money-amount__currency-symbol">
									$
								</span>
								<span className="money-amount__fraction">
									60.000
								</span>
							</s>
							<div className="poly-price__current">
								<span className="money-amount">
									<span className="money-amount__currency-symbol">
										$
									</span>
									<span className="money-amount__fraction">
										43.068
									</span>
								</span>
								<span className="money-amount__discount">
									28% OFF
								</span>
							</div>
							<span className="poly-price__installment">
								en 6 cuotas de{" "}
								<span className="money-amount">
									<span className="money-amount__currency-symbol">
										$
									</span>
									<span className="money-amount__fraction">
										9.543
									</span>
								</span>
							</span>
						</div>
						<strong className="poly-component__shipping">
							Envío gratis
						</strong>
					</div>
					<div className="poly-component__bookmark">
						<button className="poly-bookmark__btn" role="switch">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="#3483FA"
								className="poly-bookmark__icon-empty"
							>
								<path d="m480-178-30-29q-105-97-171-162T177-480q-36-46-48.5-82.5T116-637q0-77 55.5-132T305-824q46 0 92 25t83 73q37-48 83-73t92-25q78 0 133.5 55T844-637q0 38-12 73.5t-48 81Q748-437 682-371T508-205l-28 27Zm0-63q95-87 156-147t97.5-104.5q36.5-44.5 50.5-78t14-66.5q0-60-40.5-100.5T655-778q-34 0-66 16t-66 51l-35 41h-16l-35-41q-35-36-67.5-51.5T305-778q-61 0-102 40.5T162-637q0 33 13 65t48.5 76q35.5 44 97 104T480-241Zm0-269Z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
