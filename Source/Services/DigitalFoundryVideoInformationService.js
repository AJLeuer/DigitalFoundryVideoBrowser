
const DigitalFoundryVideoInformationServiceVideoDirectoryRetrievalCallbacks = [];
const DigitalFoundryVideoInformationServiceXMLConverter = new DOMParser();

class DigitalFoundryVideoInformationService
{
	static get DigitalFoundryVideoListingURL() { return "https://www.digitalfoundry.net/sitemap.xml"};

	static get VideoDirectoryRetrievalCallbacks() { return DigitalFoundryVideoInformationServiceVideoDirectoryRetrievalCallbacks; };

	static get XMLConverter() { return DigitalFoundryVideoInformationServiceXMLConverter; }

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
				DigitalFoundryVideoInformationService.ParseRawVideoDirectoryXMLIntoList(videoDirectoryXML);
			});
	}

	static ParseRawVideoDirectoryXMLIntoList(videoDirectoryXML)
	{
		console.log(videoDirectoryXML)
	}

	static RegisterForUpdatedVideoDirectoryInfo(callBack)
	{
		this.VideoDirectoryRetrievalCallbacks.push(callBack);
	}



	
}