function getDays(date1, date2) {
	const days1 = date1.getTime();
	const days2 = date2.getTime();
	
	
	const miliseconds = days1 - days2;
	const resultingDays = miliseconds / (1000 * 3600 * 24);
	
	return resultingDays < 0 ? -resultingDays : resultingDays;
}
