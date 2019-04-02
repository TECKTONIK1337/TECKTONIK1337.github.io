$("video").prop('muted', true);

$(".mute-video").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video');

    } 
    console.log($("video").prop('muted'))
});

$( document ).ready(function()
{
	//browser checks
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;var isFirefox = typeof InstallTrigger !== 'undefined';var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));var isIE = /*@cc_on!@*/false || !!document.documentMode;var isEdge = !isIE && !!window.StyleMedia;var isChrome = !!window.chrome && !!window.chrome.webstore;var isBlink = (isChrome || isOpera) && !!window.CSS;

	if(isFirefox)
	{
		$( document ).ready(function() {
			document.getElementById("bgvidhh").muted = false;
		});
	}
});
