module.exports = (sequance, el) => {
	let start = 0;
	let	end = sequance.length - 1;
	let mid = Math.round(sequance.length / 2);

	console.log('mid', mid);

	while (end && start <= end) {
		if (sequance[mid] === el) return mid;

		if (sequance[mid] < el) start = mid + 1;
		if (sequance[mid] > el) end = mid - 1;

		mid = Math.round((end + start) / 2);
		console.log('start', start);
		console.log('end', end);
		console.log('mid', mid);
	}

	return -1;
};
