const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(3000, () => console.log("Server ready on port 3000."));

const productsMockData = [
	{
		photo:
			"https://europaeye.com/storage/63055/conversions/SH-742_c01-thumb.jpg",
		brand: "Scott Harris",
		modelId: "SH-101",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},
	{
		photo:
			"https://europaeye.com/storage/83857/conversions/MR-434_c01-thumb.jpg",
		brand: "Michael Ryen",
		modelId: "MR-101",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 20,
	},
	{
		photo:
			"https://europaeye.com/storage/78601/conversions/SH-846_c02-thumb.jpg",
		brand: "Scott Harris",
		modelId: "SH-105",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 30,
	},
	{
		photo:
			"	https://europaeye.com/storage/83016/conversions/CIN-5171_c01-thumb.jpg",
		brand: "Cinzia",
		modelId: "CIN-102",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 24,
	},
	{
		photo:
			"https://europaeye.com/storage/83056/conversions/AT-638_c01-thumb.jpg",
		brand: "Adin Thomas",
		modelId: "AT-101",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 26,
	},

	{
		photo:
			"https://europaeye.com/storage/63055/conversions/SH-742_c01-thumb.jpg",
		brand: "Scott Harris",
		modelId: "SH-104",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 24,
	},
	{
		photo:
			"https://europaeye.com/storage/81145/conversions/AT-602_c03-thumb.jpg",
		brand: "Adin Thomas",
		modelId: "AT-103",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},
	{
		photo:
			"https://europaeye.com/storage/79926/conversions/CIN-5158_c02-thumb.jpg",
		brand: "Cinzia",
		modelId: "CIN-103",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 30,
	},
	{
		photo:
			"https://europaeye.com/storage/81397/conversions/AT-614_c02-thumb.jpg",
		brand: "Adin Thomas",
		modelId: "AT-104",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 20,
	},
	{
		photo:
			"https://europaeye.com/storage/65637/conversions/SH-792_c01-thumb.jpg",
		brand: "Scott Harris",
		modelId: "SH-102",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},
	{
		photo:
			"https://europaeye.com/storage/80142/conversions/MR-414_c02-thumb.jpg",
		brand: "Michael Ryen",
		modelId: "MR-102",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 20,
	},
	{
		photo:
			"https://europaeye.com/storage/81130/conversions/AT-600_c01-thumb.jpg",
		brand: "Adin Thomas",
		modelId: "AT-102",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},
	{
		photo:
			"https://europaeye.com/storage/80112/conversions/MR-404_c01-thumb.jpg",
		brand: "Michael Ryen",
		modelId: "MR-103",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 30,
	},
	{
		photo:
			"https://europaeye.com/storage/83004/conversions/CIN-5170_c01-thumb.jpg",
		brand: "Cinzia",
		modelId: "CIN-101",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},

	{
		photo:
			"https://europaeye.com/storage/78390/conversions/SH-844_c02-thumb.jpg",
		brand: "Scott Harris",
		modelId: "SH-103",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 24,
	},

	{
		photo:
			"https://europaeye.com/storage/81166/conversions/CIN-5164_c01-thumb.jpg",
		brand: "Cinzia",
		modelId: "CIN-104",
		description:
			"Stylish and ultra-lightweight and flexible Tr90 nylon frame material for durability and comfortable long-term wearing. Lens Resin.",
		price: 25,
	},
];

const brands = ["Scott Harris", "Adin Thomas", "Michael Ryen", "Cinzia"];

app.get("/products", async (req, res) => {
	console.log("req filter", req);
	res.send({ data: productsMockData });
});

app.get("/products/:productId", async (req, res) => {
	res.send({
		data: productsMockData.find(
			(product) => product.modelId === req.params.productId
		),
	});
});

app.get("/brands", async (req, res) => {
	res.send({ data: brands });
});

app.get("/featuredFrames", async (req, res) => {
	res.send({ data: productsMockData.slice(0, 3) });
});

module.exports = app;
