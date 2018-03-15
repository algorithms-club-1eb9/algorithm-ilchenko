module.exports = (sequance, el) => {
	let start = 0;
	let	end = sequance.length - 1;

	while (start <= end) {
		const mid = Math.floor((end + start) / 2);

		if (sequance[mid] === el) return mid;
		if (sequance[mid] < el) start = mid + 1;
		if (sequance[mid] > el) end = mid - 1;
	}
	return -1;
};
