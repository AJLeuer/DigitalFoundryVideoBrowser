import Tabulator from "tabulator-tables";
import Moment from "moment";
import { Video } from "../Model/Video";

window.moment = Moment; //temporary fix for an open bug in Tabulator


const MainViewVideoTableID = "videos";
const MainViewVideoTableHeadersID = "videoTableHeaders";

export class MainView
{
	static get Table() { return document.getElementById(MainViewVideoTableID); }

	static UpdateVideoView(videos)
	{
		videos.forEach((video) =>
		{
			//VideoEntry.CreateAndAppendToHTMLTable(MainView.Table, video);
		});
	}
}


function SetupMainGrid()
{
	var table = new Tabulator(`#${MainViewVideoTableID}`,
	{
		// layout: "fitColumns",
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

	table.setData(defaultDummyVideoTableData);
}

function InitializeMainView()
{
	SetupMainGrid();
}

document.addEventListener('DOMContentLoaded', InitializeMainView, false);



