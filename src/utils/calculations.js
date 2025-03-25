export const calculateStars = (rating) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	return { fullStars, hasHalfStar, emptyStars };
};

export const calculateDiscount = (previous_cents, current_cents) =>
	((previous_cents - current_cents) * 100) / previous_cents;
