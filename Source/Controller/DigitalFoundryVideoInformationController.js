class DigitalFoundryVideoInformationController
{
	static Start()
	{
		this.DisplayAvailableVideos();
	}

	static DisplayAvailableVideos()
	{
		DigitalFoundryVideoInformationService.RegisterForUpdatedVideoInfo(MainView.UpdateVideoView);
		DigitalFoundryVideoInformationService.RetrieveUpdatedVideoInfo();
	}
}