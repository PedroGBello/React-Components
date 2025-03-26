export const calculateStars = (average_rating) => {
	let fullStars = Math.floor(average_rating);
	let hasHalfStar = false;

	if (average_rating % 1 > 0.75) {
		fullStars += 1;
	} else if (average_rating % 1 > 0.25) {
		hasHalfStar = true;
	}

	let emptyStars = Math.floor(5 - fullStars - (hasHalfStar ? 1 : 0));

	return { fullStars, hasHalfStar, emptyStars };
};

export const calculateDiscountCents = (
	original_price_cents,
	discount_percentage
) => (original_price_cents * (100 - discount_percentage)) / 100;
