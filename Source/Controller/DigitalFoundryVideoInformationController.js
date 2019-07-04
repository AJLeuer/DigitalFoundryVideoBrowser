import { DigitalFoundryVideoInformationService } from "../Services/DigitalFoundryVideoInformationService";
import { MainView } from "../View/MainView";

export class DigitalFoundryVideoInformationController
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