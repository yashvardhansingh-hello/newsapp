import React, { Component } from "react";
import NewsItem from "../components/newsItem.js";
export class news extends Component {
	articles = [
		{
			source: {
				id: "handelsblatt",
				name: "Handelsblatt",
			},
			author: "hello",
			title:
				"Apple-Zulieferer: Foxconn-Betriebe von chinesischen Steuerbehörden durchsucht",
			description:
				"Chinas Steuerbehörden haben einige Standorte von Foxconn geprüft. Das taiwanesische Unternehmen beschäftigt in China hunderttausende Menschen.",
			url: "https://www.handelsblatt.com/technik/it-internet/apple-zulieferer-foxconn-betriebe-von-chinesischen-steuerbehoerden-durchsucht/29459810.html",
			urlToImage:
				"https://static.ffx.io/images/$zoom_0.6623%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/0e8451c34d35a2b68f0b3c14230b78b4bb3d9c25",
			publishedAt: "2023-10-22T09:25:40+00:00",
			content:
				"Chinas Steuerbehörden haben einige Standorte von Foxconn geprüft. Das taiwanesische Unternehmen beschäftigt in China hunderttausende Menschen.",
		},
		{
			source: {
				id: "australian-financial-review",
				name: "Australian Financial Review",
			},
			author: "Jun Bei Liu",
			title:
				"CSL ASX: Tribecca’s Jun Bei Liu shares why you shouldn’t bet on CSL’s downfall",
			description:
				"Those betting on the demise of blue-chip healthcare stocks such as CSL and ResMed might want to rethink based on a review of Microsoft and Apple’s histories.",
			url: "http://www.afr.com/markets/equity-markets/unloved-healthcare-stocks-can-reinvent-themselves-20231019-p5edlp",
			urlToImage:
				"https://static.ffx.io/images/$zoom_0.6623%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/0e8451c34d35a2b68f0b3c14230b78b4bb3d9c25",
			publishedAt: "2023-10-22T03:10:55Z",
			content:
				"Regrettably, healthcare companies, typically viewed as a cheaper yet quality alternative to technology firms, have lagged. So, what has triggered this dramatic shift?\r\nTwo factors: Near-term earnings… [+4265 chars]",
		},
	];
	constructor() {
		super();

		console.log("Hello");
		this.state = { articles: this.articles, loading: true };
	}
	render() {
		return (
			<div className="container my-3">
				<h1>newsApp - Top Headlines</h1>
				<div className="row">
					{this.state.articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									title={element.title}
									description={element.description}
									imageURL={element.urlToImage}
									newsURL={element.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default news;
