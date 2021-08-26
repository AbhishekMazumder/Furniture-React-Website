export const formatPrice = number => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'INR',
		maximumFractionDigits: 2,
	}).format(number / 100);
};

export const getUniqueValues = () => {}
