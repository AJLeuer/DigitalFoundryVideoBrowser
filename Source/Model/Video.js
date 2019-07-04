import {WebPageTitleLookupService} from "../Services/WebPageTitleLookupService";

export class Video
{
	constructor(title, url, uploadDate)
	{
		this.Title = title;
		this.URL = url;
		this.UploadDate = uploadDate;
	}

	static CreateFromURL(urlObject)
	{
		var video = new Video(urlObject.href, urlObject.href, this.ExtractDateFromURL(urlObject)); //temporarily setting the title to the url until we get back the real title

		var videoTitleUpdater = (videoTitle) =>
		{
			video.Title = videoTitle;
		};

		WebPageTitleLookupService.LookupWebPageTitle(urlObject, videoTitleUpdater);

		return video;
	}

	static ExtractDateFromURL(urlObject)
	{
		const dateTemplate = "YYYY-MM-DD";
		var path = urlObject.pathname;
		var dateString = path.slice(1, (1 + dateTemplate.length));
		const date = new Date(dateString);
		return date;
	}
}