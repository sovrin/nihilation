const PORT = 80;
const PROTOCOL = 'http';
const DOMAIN = (process.env.NODE_ENV === "production")
	? "nihilation.com"
	: 'localhost'
;
const HOST = `${PROTOCOL}://${DOMAIN}`;
const META = {
	SITE: 'Nihilation',
	IMAGE: '/static/band.png',
	DESCRIPTION: 'Progressive Death / Black Metal',
	URL: HOST,
	TYPE: 'blog',
};

const ENDPOINTS = {
	API: HOST + '/api',
};

module.exports = {
	PROTOCOL,
	PORT,
	HOST,
	ENDPOINTS,
	META,
};
