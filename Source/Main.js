import { DigitalFoundryVideoInformationController } from "./Controller/DigitalFoundryVideoInformationController";
import { DigitalFoundryVideoInformationService } from "./Services/DigitalFoundryVideoInformationService";


console.log("Digital Foundry video directory retrieval in progress");
console.log("Retrieving video listings from the following URL: ", DigitalFoundryVideoInformationService.DigitalFoundryVideoListingURL);


DigitalFoundryVideoInformationController.Start();
