function getCurrentLocaleOfClient()
{
	if (navigator.languages && navigator.languages.length)
	{
		return navigator.languages[0];
	}
	else
	{
		return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en-gb';
	}
}

class VideoEntry
{
	static get ClassName() { return "video"; }

	UnderlyingHTMLTableRowElement;
	Video;

	TitleCell;
	DateCell;

	static CreateAndAppendToHTMLTable(htmlTable, video)
	{
		var htmlTableRowElement = htmlTable.insertRow();
		return new VideoEntry(htmlTableRowElement, video);
	}

	constructor(underlyingHTMLTableRowElement, video)
	{
		this.UnderlyingHTMLTableRowElement = underlyingHTMLTableRowElement;
		this.UnderlyingHTMLTableRowElement.className = VideoEntry.ClassName;
		this.Video = video;

		this.TitleCell = this.UnderlyingHTMLTableRowElement.insertCell();
		this.DateCell = this.UnderlyingHTMLTableRowElement.insertCell();

		var titleCellContent = document.createElement('a');
		var dateCellContent = document.createElement('a');

		// titleCellContent.href = "http://foo";

		titleCellContent.innerText = this.Video.Title;
		dateCellContent.innerText = this.Video.UploadDate.toLocaleDateString(getCurrentLocaleOfClient());

		this.TitleCell.appendChild(titleCellContent);
		this.DateCell.appendChild(dateCellContent);
	}
}
