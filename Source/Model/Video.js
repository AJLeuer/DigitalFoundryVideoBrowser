import {WebPageTitleLookupService} from "../Services/WebPageTitleLookupService";

export class Video
{
	constructor(title, url, uploadDate)
	{
		this.Title = title;
		this.URL = url;
		this.UploadDate = uploadDate;
	}

	static CreateFromURL(url)
	{
		var video = new Video(url.href, url.href, new Date(url)); //temporarily setting the title to the url until we get back the real title

		var videoTitleUpdater = (videoTitle) =>
		{
			video.Title = videoTitle;
		};

		WebPageTitleLookupService.LookupWebPageTitle(url, videoTitleUpdater);

		return video;
	}
}