import http from "http";
import axios from "axios";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const twitterApi = axios.create({
	baseURL: process.env.TWITTER_URL
});

const googleMapsApi = axios.create({
	baseURL: process.env.GOOGLE_MAPS_URL
});

const linkedinApi = axios.create({
	baseURL: process.env.LINKEDIN_API
});

const server = http.createServer(async (req, res) => {
	
	switch (req.url) {
		case "api/twitter":
			switch (req.method) {
				case "GET": twitterGetBlock: {
					const twitterData = twitterApi.get("/")
						.then((data) => data.data)
						.catch(err => {
							console.error(err);
							return err;
						});
					res.end(twitterData);
				}
					break;
				case "POST":
					twitterPostBlock: { /* empty */ }
					break;
				default:
					break;
			}
			break;
		case "api/google-maps":
			switch (req.method) {
				case "GET": googleMapsGetBlock: {
					const googleMapsData = googleMapsApi.get("/")
						.then((data) => data.data)
						.catch(err => {
							console.error(err);
							return err;
						});
					res.end(googleMapsData);
				}
					break;
				case "POST":
					googleMapsPostBlock: { /* empty */ }
					break;
				default:
					break;
			}
			break;
		case "api/linkedin":
			switch (req.method) {
				case "GET": linkedinGetBlock: {
					const linkedinData = linkedinApi.get("/")
						.then((data) => data.data)
						.catch(err => {
							console.error(err);
							return err;
						});
					res.end(linkedinData);
				}
					break;
				case "POST":
					linkedinPostBlock: { /* empty */ }
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}
	res.setHeader("Content-Type", "application/json");
	res.end();
});



server.listen(PORT, () => console.log(`${process.env.PORT || 3000}`));