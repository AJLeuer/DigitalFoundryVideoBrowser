class Video
{
	Title = "";
	UploadDate = new Date();

	constructor(title, uploadDate)
	{
		this.Title = title;
		this.UploadDate = uploadDate;
	}
}

class DigitalFoundryVideoInformationService
{
	static get DigitalFoundryVideoListingURL() { return "https://www.digitalfoundry.net/sitemap.xml"};

	static RetrieveVideoDirectoryXML()
	{
		var videoDirectoryResponseHandler = (response) =>
		{
			return response.text();
		};

		var videoDirectoryRetrievalRequest = fetch(DigitalFoundryVideoInformationService.DigitalFoundryVideoListingURL);

		var rawVideoDirectory = videoDirectoryRetrievalRequest.then(videoDirectoryResponseHandler);

		return rawVideoDirectory;
	}



	
}