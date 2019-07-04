import { VideoEntry } from "./VideoEntry";

const MainViewTableID = "videos";
const MainViewTableHeadersID = "videoTableHeaders";

export class MainView
{
	static get Table() { return document.getElementById(MainViewTableID); }

	static UpdateVideoView(videos)
	{
		videos.forEach((video) =>
		{
			VideoEntry.CreateAndAppendToHTMLTable(MainView.Table, video);
		});
	}
}


function SetupMainGrid()
{
	var videoTableHeaderRow = document.getElementById(MainViewTableHeadersID);
	var videoTableHeaders = videoTableHeaderRow.cells;

	for (let i = 0; i < videoTableHeaders.length; i++)
	{
		var videoTableHeader =  videoTableHeaders[i];

		videoTableHeader.addEventListener('click', () =>
		{
			w3.sortHTML('#videos','.video', `td:nth-child(${i + 1})`);
		});
	}
}

function InitializeMainView()
{
	SetupMainGrid();
}

document.addEventListener('DOMContentLoaded', InitializeMainView, false);



