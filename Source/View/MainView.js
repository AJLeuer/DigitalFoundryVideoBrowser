import Tabulator from "tabulator-tables";
import Moment from "moment";
window.moment = Moment; //temporary fix for an open bug in Tabulator
import { Video } from "../Model/Video";


const MainViewVideoTableID = "videos";
const MainViewVideoTableHeadersID = "videoTableHeaders";
var Table = null;

export class MainView
{
	static UpdateVideoView(videos)
	{
		Table.setData(videos);
	}

	static SetupMainGrid()
	{
		Table = new Tabulator(`#${MainViewVideoTableID}`,
		{
			layoutColumnsOnNewData: true,
			index: "Title",
			columns:
				[
					{ title:"Title", field: "Title", align: "left", sorter: "string", formatter: "link" },
					{ title:"Date", field: "UploadDate", align:"left", sorter: "date", formatter: "datetime" }
				],
		});

		var defaultDummyVideoTableData =
		[
			new Video("Some Game Video", new Date("1999-09-26")),
			new Video("Another Game Video", new Date("2002-03-03"))
		];

		Table.setData(defaultDummyVideoTableData);
	}

	static InitializeMainView()
	{
		MainView.SetupMainGrid();
	}
}

document.addEventListener('DOMContentLoaded', MainView.InitializeMainView, false);



