window.onload = () => {
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("Hello! It appears that you're using Internet Explorer. While I have no idea how my website looks using that browser, I can certainly say that it likely won't look as good as opposed to using Google Chrome or Firefox. For the best experience on this website, I would highly recommend using any of those browsers instead as IE has trouble loading any basic webpages.");
    }

    window.location.href = "home.html";
}