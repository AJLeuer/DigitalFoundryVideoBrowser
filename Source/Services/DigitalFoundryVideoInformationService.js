import { Video } from "../Model/Video";

const DigitalFoundryVideoInformationServiceVideoInfoRetrievalSubscriberCallbacks = [];
const DigitalFoundryVideoInformationServiceXMLConverter = new DOMParser();

export class DigitalFoundryVideoInformationService
{
	static get DigitalFoundryVideoSiteHostName() { return "www.digitalfoundry.net"};
	static get DigitalFoundryVideoListingURL() { return `https://${this.DigitalFoundryVideoSiteHostName}/sitemap.xml` };
	static get VideoDirectoryXMLTopLevelNodeName() { return "urlset" };

	static get VideoInfoRetrievalSubscriberCallbacks() { return DigitalFoundryVideoInformationServiceVideoInfoRetrievalSubscriberCallbacks; };

	static get XMLConverter() { return DigitalFoundryVideoInformationServiceXMLConverter; }


	static RegisterForRetrievedVideoInfo(callBack)
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
				DigitalFoundryVideoInformationService.ParseVideoDirectoryXMLIntoListOfVideos(videoDirectoryXML);
			});
	}


	static ExtractTopLevelNodeFromVideoDirectoryXML(videoDirectoryXML)
	{
		var rootURLNode = {};

		for (var i = 0; i < videoDirectoryXML.childNodes.length; i++)
		{
			var childNode = videoDirectoryXML.childNodes[i];

			if (childNode.nodeName === this.VideoDirectoryXMLTopLevelNodeName)
			{
				rootURLNode = childNode;
				break;
			}
		}

		return rootURLNode;
	}

	static FixUpObfuscatedDFURL(url)
	{
		if (url.hostname !== DigitalFoundryVideoInformationService.DigitalFoundryVideoSiteHostName)
		{
			url.hostname = DigitalFoundryVideoInformationService.DigitalFoundryVideoSiteHostName;
		}

		return url;
	}

	static ExtractURLFromURLNode(urlNode)
	{
		var url = {};
		var potentialMainURLNode = null;

		for (var i = 0; i < urlNode.childNodes.length; i++)
		{
			potentialMainURLNode = urlNode.childNodes[i];

			if (potentialMainURLNode.nodeType === Node.ELEMENT_NODE)
			{
				url = new URL(potentialMainURLNode.textContent);
				url = this.FixUpObfuscatedDFURL(url);
				break;
			}
		}

		return url;
	}

	static ExtractVideoURLsFromVideoDirectoryXML(videoDirectoryXML)
	{
		var rootURLNode = this.ExtractTopLevelNodeFromVideoDirectoryXML(videoDirectoryXML, rootURLNode);

		var urls = [];

		for (var i = 0; i < rootURLNode.childNodes.length; i++)
		{
			var urlNode = rootURLNode.childNodes[i];

			if (urlNode.nodeType === Node.ELEMENT_NODE)
			{
				var url = this.ExtractURLFromURLNode(urlNode);
				urls.push(url);
			}
		}

		return urls;
	}

	static ParseVideoDirectoryXMLIntoListOfVideos(videoDirectoryXML)
	{
		console.log(videoDirectoryXML);

		var videoURLs = this.ExtractVideoURLsFromVideoDirectoryXML(videoDirectoryXML);
		var videoList = [];

		for (var i = 0; i < videoURLs.length; i++)
		{
			var videoURL = videoURLs[i];
			var video = Video.CreateFromURL(videoURL);
			videoList.push(video);
		}

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