import { Video } from "../Model/Video";

const DigitalFoundryVideoInformationServiceVideoInfoRetrievalSubscriberCallbacks = [];
const DigitalFoundryVideoInformationServiceXMLConverter = new DOMParser();

export class DigitalFoundryVideoInformationService
{
	static get DigitalFoundryVideoListingURL() { return "https://www.digitalfoundry.net/sitemap.xml"};

	static get VideoInfoRetrievalSubscriberCallbacks() { return DigitalFoundryVideoInformationServiceVideoInfoRetrievalSubscriberCallbacks; };

	static get XMLConverter() { return DigitalFoundryVideoInformationServiceXMLConverter; }


	static RegisterForUpdatedVideoInfo(callBack)
	{
		this.VideoInfoRetrievalSubscriberCallbacks.push(callBack);
	}

	static RetrieveUpdatedVideoInfo()
	{
		this.RetrieveVideoDirectoryXML();
	}

	static RetrieveVideoDirectoryXML()
	{
		var videoDirectoryRetrievalRequest = fetch(DigitalFoundryVideoInformationService.DigitalFoundryVideoListingURL);

		videoDirectoryRetrievalRequest
			.then((response) =>
			{
				return response.text();
			})
			.then(function (responseBody)
			{
				var videoDirectoryXML = DigitalFoundryVideoInformationService.XMLConverter.parseFromString(responseBody, "text/xml");
				DigitalFoundryVideoInformationService.ParseRawVideoDirectoryXMLIntoListOfVideos(videoDirectoryXML);
			});
	}

	static ParseRawVideoDirectoryXMLIntoListOfVideos(videoDirectoryXML)
	{
		console.log(videoDirectoryXML);

		const videoList =
		[
			new Video("Some Game", new Date("1999-09-26")),
			new Video("Another Game", new Date("2005-09-26")),
			new Video("Yet Another Game", new Date("2015-03-21"))
		];

		this.UpdateObserversWithLatestVideoList(videoList);
	}

	static UpdateObserversWithLatestVideoList(videos)
	{
		this.VideoInfoRetrievalSubscriberCallbacks.forEach((callBack) =>
		{
			callBack(videos);
		});
	}
}