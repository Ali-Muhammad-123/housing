async function getHousingData() {
	// ... you will write your Prisma Client queries here
	const allData = await prisma.housing.findMany();
	console.log(allData);
	return allData;
}

module.exports = { getHousingData };
