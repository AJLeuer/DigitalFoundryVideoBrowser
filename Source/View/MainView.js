import Tabulator from "tabulator-tables";
import Moment from "moment";
window.moment = Moment; //temporary fix for an open bug in Tabulator
import { Video } from "../Model/Video";


const MainViewVideoTableID = "videos";
const MainViewVideoTableHeadersID = "videoTableHeaders";
var Table = null;

export class MainView
{
	static UpdateVideoView(video)
	{
		Table.addData([video]);
	}

	static SetupMainGrid()
	{
		Table = new Tabulator(`#${MainViewVideoTableID}`,
		{
			reactiveData:true,
			layout:"fitColumns",
			height:"100%",
			layoutColumnsOnNewData: true,
			index: "Title",
			columns:
				[
					{ title:"Title", field: "Title", align: "left", sorter: "string", formatter: "link", formatterParams:{ labelField: "Title", urlField: "URL", target:"_blank"}, widthGrow:5 },
					{ title:"Date", field: "UploadDate", align:"left", sorter: "date", formatter: "datetime", widthGrow:2 }
				],
		});
	}

	static InitializeMainView()
	{
		MainView.SetupMainGrid();
	}
}

document.addEventListener('DOMContentLoaded', MainView.InitializeMainView, false);



