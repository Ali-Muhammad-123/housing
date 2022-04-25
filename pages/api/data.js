// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const housingFunctions = require("./index");
export default async function handler(req, res) {
	var data = await housingFunctions.getHousingData();
	res.status(200).json(data);
}
