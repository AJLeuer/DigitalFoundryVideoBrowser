
function SetupMainGrid()
{
	var videoTable = document.getElementById("videoTableHeaders");
	var videoTableHeaders = videoTable.cells;

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

InitializeMainView();



