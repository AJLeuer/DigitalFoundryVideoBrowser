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
		DigitalFoundryVideoInformationService.RegisterForRetrievedVideoInfo(MainView.UpdateVideoView);
		DigitalFoundryVideoInformationService.RetrieveUpdatedVideoInfo();
	}
}