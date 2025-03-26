export const data = [
	{
		// 1. Identification
		id: "d9336033-d331-4450-86fc-a7831246de69",
		category: "kitchen",
		product_name:
			"Organizador De Cocina Jazak 4 Niveles / Linea Hogar / Estanteria / Zapatero / Repisa / Calzado Ropa / Resitente 80kg / Facil De Armar / Acero / Estantes / Deco / Mide 60x70x23cm / Color Negro",
		product_brand: null,

		// 2. Media
		images: [
			"../../public/assets/d9336033-d331-4450-86fc-a7831246de69.webp",
		],

		// 3. Seller Information
		seller_name: "Jazak",
		seller_info: "",
		is_verified_seller: false,

		// 4. Stock & Shipping
		stock_quantity: 15,
		is_free_shipping: true,
		is_same_day_delivery: false,
		is_next_day_delivery: false,
		shipping_provider: null,

		// 5. Promotion & Discounts
		promotion_type: "best_seller", // "best_seller" | "deal_of_the_day" | "flash_sale"
		is_promoted: false,
		discount_percentage: 8, // Precomputed

		// 6. Payment Options
		currency: "AR",
		original_price_cents: 4999900,
		installments: {
			interest_free_months: 0,
			with_interest: {
				months: 6,
			},
		},

		// 7. Ratings & Reviews
		rating: {
			average_stars: 48,
			total_reviews: 11,
		},
	},
];
