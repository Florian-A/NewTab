
// Configuration

var eng = {},
	current = {},
	fadeDur = 200,
	titlePrefix = "Search ",

	idxWidth = 700,
	idxLogoFull  = [225,80],
	idxLogoSmall = [157,56],
	idxMargin = 24,
	idxFadedOpacity = 0.3,

	idxHeight = 0;

	$( "#form" ).submit(function( event ) {
	  alert( "Handler for .submit() called." );
	  event.preventDefault();
	});


// Initial Setup Function

$(function()
{
	// Create Engine Index

	indexCreate();

	// Behavior

	$("#i").keyup(function(ev) 		{ fetchSuggestions(ev.which); });
	$(document).click(function(ev) 	{ closeSugBox(ev.srcElement) });

	// Set up first engine

	build(firstProp(eng), false);

	$( "#form" ).submit(function(){
		return doSearch();
	});

	$( "#lang" ).click(function(){
		return nextLanguage();
	});

	$(document).on('click', "p#method a", function(){
		return setPlace(this);
	})

});


// Keyboard stuff

var isCtrl = false;
var isCmd = false;

$(document).keyup(function(e) 
{
	if (e.which == 17) isCtrl=false;
	if (e.which == 91) isCmd=false;	
}
).keydown(function(e) 
{
	if (e.which == 17) isCtrl=true;
	if (e.which == 91) isCmd=true;
	
	if (e.which == 49 && isCtrl == true) 	{ /* Key "1" */ 	nextEngine(); return false; }
	if (e.which == 50 && isCtrl == true) 	{ /* Key "2" */ 	nextPlace(); return false; }
	if (e.which == 51 && isCtrl == true) 	{ /* Key "3" */ 	nextLanguage(); return false; }
		
	if (e.which == 38) 						{ /* Arrow Up */ 	prevSugResult(); }	
	if (e.which == 40) 						{ /* Arrow Down */ 	nextSugResult(); }	
	if (e.which == 27) 						{ /* ESC */ 		closeSugBox(false); }	
	if (e.which == 13) 						{ /* Enter */ 		applySugResult(); }
});
