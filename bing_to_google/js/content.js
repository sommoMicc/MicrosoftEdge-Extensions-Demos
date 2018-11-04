// get the URL of the page
var url = document.location.href;

// if not on a docs.microsoft.com domain
if (url.indexOf("//www.bing") != -1) {
    document.location.href = url.replace("bing","google");
}