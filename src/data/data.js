export const data = [
	{
		// 1. Identification
		id: "3c1af988-895d-442a-a211-92f982c96d7c",
		category: "kitchen",
		product_name:
			"Secaplatos escurridor cubiertos kunst & küche 2 pisos organizador acero color gris",
		product_brand: "Kunst & Küche",

		// 2. Media
		images: [
			"../../public/assets/3c1af988-895d-442a-a211-92f982c96d7c.webp",
		],

		// 3. Seller Information
		seller_name: "Proshop",
		seller_info: "",
		is_verified_seller: true,

		// 4. Stock & Shipping
		stock_quantity: null, // if 1, "Último disponible"
		is_free_shipping: false,
		is_same_day_delivery: false,
		is_next_day_delivery: true,
		shipping_provider: "Full",

		// 5. Promotion & Discounts
		highlight: {
			best_seller: false,
			deal_of_the_day: false,
			flash_sale: true,
		},

		is_promoted: true,
		discount_percentage: 29, // Precomputed
		rebates: 15,
		coupon: 5000,

		// 6. Payment Options
		currency: "AR",
		original_price_cents: 6000000,
		installments: {
			interest_free_months: 0,
			with_interest: {
				months: 6,
			},
		},

		// 7. Ratings & Reviews
		rating: {
			average_stars: 42,
			total_reviews: 480,
		},
	},
];
