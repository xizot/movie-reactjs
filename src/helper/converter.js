export const convertDateTime = (data = '1970-12-30', toType = 'DD-MM-YYYY') => {
	let year = new Date(data).getFullYear();
	let month = new Date(data).getMonth() + 1;
	let date = new Date(data).getDate();

	if (month < 10) month = '0' + month.toString();
	if (date < 10) date = '0' + date.toString();

	const map = {
		DD: date,
		MM: month,
		YYYY: year
	};

	return toType.replace(/MM|DD|YYYY/gi, (matched) => map[matched]);
};
