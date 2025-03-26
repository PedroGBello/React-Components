import React from "react";
import styles from "./App.module.css";
import { data } from "../src/data/data";
import SearchResult from "./components/SearchResult";

function App() {
	return (
		<>
			<ul className={styles["search-results"]}>
				{data.map((product) => (
					<li key={product.id}>
						<SearchResult {...product} />
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
