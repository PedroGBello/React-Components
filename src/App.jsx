import React from "react";
import { data } from "../src/data/data";
import SearchResult from "./components/SearchResult";

function App() {
	return (
		<>
			<ul>
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
