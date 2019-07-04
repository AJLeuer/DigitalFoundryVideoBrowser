
const TextanceAPIURL =  new URL("http://textance.herokuapp.com/title/");

export class WebPageTitleLookupService
{
	static LookupWebPageTitle(url, callBack)
	{
		var webPageTitleRetrievalRequest = fetch(`${TextanceAPIURL.href}${url.href}`);

		webPageTitleRetrievalRequest
			.then((response) =>
			{
				return response.text();
			})
			.then(function (responseBody)
			{
				callBack(responseBody);
			});


		return webPageTitleRetrievalRequest;
	}
}