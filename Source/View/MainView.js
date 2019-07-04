import { VideoEntry } from "./VideoEntry";
import Tabulator from "tabulator-tables";
import { Video } from "../Model/Video";
//import { w3 } from "../Libraries/w3";

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
			{ title:"Title", field: "Title", align: "left", sorter: "string" },
			{ title:"Date", field: "UploadDate", align:"left", sorter: "date" }
		],
	});

	var defaultDummyVideoTableData =
	[
		new Video("Some Game Video", new Date("1999-09-26")),
		new Video("Another Game Video", new Date("2002-03-03"))
	];

	table.setData(defaultDummyVideoTableData);

	// var videoTableHeaderRow = document.getElementById(MainViewTableHeadersID);
	// var videoTableHeaders = videoTableHeaderRow.cells;
	//
	// for (let i = 0; i < videoTableHeaders.length; i++)
	// {
	// 	var videoTableHeader = videoTableHeaders[i];
	//
	// 	videoTableHeader.addEventListener('click', () =>
	// 	{
	// 		w3.sortHTML('#videos','.video', `td:nth-child(${i + 1})`);
	// 	});
	// }
}

function InitializeMainView()
{
	SetupMainGrid();
}

document.addEventListener('DOMContentLoaded', InitializeMainView, false);



