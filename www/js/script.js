
var megazoom;
var data_ultraflex;
var data_ultrasys;
var data_mst;

$(".fancybox").fancybox();

$(document).on('pageinit', function(event, ui) {
	var ThePage = event.target.id;

	switch(ThePage){
		case "ultraflex-pid":
			data_ultraflex = $("#megazoomPlayList-ultraflex")[0].outerHTML;
			UltraFlexFooter(ThePage);
			break;
		case "ultraflex-appdesc":
			UltraFlexFooter(ThePage);
			break;
		case "ultraflex-diff-ultraflex":
			UltraFlexFooter(ThePage);
			break;
		case "ultraflex-diff-ultrasys":
			UltraFlexFooter(ThePage);
			break;
		case "ultraflex-diff-ultratherm":
			UltraFlexFooter(ThePage);
			break;
		case "ultraflex-diff-aseptank":
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-pid":
			data_ultrasys = $("#megazoomPlayList-ultrasys")[0].outerHTML;
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-appdesc":
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-diff-ultraflex":
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-diff-ultrasys":
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-diff-ultratherm":
			UltraFlexFooter(ThePage);
			break;
		case "ultrasys-diff-aseptank":
			UltraFlexFooter(ThePage);
			break;
		case "mst-pid":
			data_mst = $("#megazoomPlayList-mst")[0].outerHTML;
			break;
	}
});
/*
$(document).on('pageshow', function(event, ui) {
	var ThePage = event.target.id;

	switch(ThePage){
		case "ultraflex-pid":
			PID("ultraflex");
			break;
		case "ultrasys-pid":
			PID("ultrasys");
			break;
		case "mst-pid":
			PID("mst");
			break;
	}
});
*/

$(document).on('pageshow', function(event, ui) {
	$(".nav-popup").hide();
	
	var ThePage = event.target.id;
		
	switch(ThePage){
		case "ultraflex-pid":
			PID("ultraflex");
			break;
		case "ultrasys-pid":
			PID("ultrasys");
			break;
		case "mst-pid":
			PID("mst");
			break;
	}
	
});

function UltraFlexFooter(ThePage){
	$("#"+ThePage + " #nav-" + ThePage).hide();
	$("#"+ThePage + " #link-" + ThePage).click(function() {
		if ($("#"+ThePage + " #nav-" + ThePage).is(':visible')){
			$("#"+ThePage + " #nav-" + ThePage).slideUp();
		}
		else{
			$("#"+ThePage + " #nav-" + ThePage).slideDown();
		}	
		
	});
	
}

function PID(id){
	
	if(megazoom){
		megazoom.destroy();
		megazoom = null;
		
		switch(id){
			case "ultraflex":
				$("#"+id+"-pid .ui-content").append(data_ultraflex);
			break;
			case "ultrasys":
				$("#"+id+"-pid .ui-content").append(data_ultrasys);
			break;
			case "mst":
				$("#"+id+"-pid .ui-content").append(data_mst);
			break;
		}
		
	}
	
		megazoom =  new FWDMegazoom({
				//----main----//
				parentId:id+"-map",
				playListAndSkinId:"megazoomPlayList-"+id,
				displayType:"responsive",
				skinPath:"css/skin_round_silver/skin/",
				imagePath:"img/pid_"+id+".svg",
				preloaderText:"Loading P&ID...",
				useEntireScreen:"yes",
				addKeyboardSupport:"yes",
				addDoubleClickSupport:"yes",
				imageWidth:1880,
				imageHeight:1216,
				zoomFactor:4,
				doubleClickZoomFactor:1,
				startZoomFactor:"default",
				panSpeed:8,
				zoomSpeed:50,
				backgroundColor:"#FFFFFF",
				preloaderFontColor:"#585858",
				preloaderBackgroundColor:"#FFFFFF",
				//----lightbox-----//
				lightBoxWidth:800,
				lightBoxHeight:625,
				lightBoxBackgroundOpacity:.8,
				lightBoxBackgroundColor:"#000000",
				//----controller----//
				buttons:"scrollbar, fullscreen",
				buttonsToolTips:"Zoom level: , Full screen/Normal screen",
				controllerPosition:"bottom",
				inversePanDirection:"yes",
				startSpaceBetweenButtons:10,
				spaceBetweenButtons:10,
				startSpaceForScrollBarButtons:20,
				startSpaceForScrollBar:6,
				hideControllerDelay:3,
				controllerMaxWidth:900,
				controllerBackgroundOpacity:1,
				controllerOffsetY:0,
				scrollBarOffsetX:0,
				scrollBarHandlerToolTipOffsetY:4,
				zoomInAndOutToolTipOffsetY:-4,
				buttonsToolTipOffsetY:0,
				hideControllerOffsetY:2,
				buttonToolTipFontColor:"#585858",
				//----navigator----//
				showNavigator:"false",
				showNavigatorOnMobile:"false",
				navigatorImagePath:"img/pid_ultraflex_thumb.jpg",
				navigatorPosition:"topright",
				navigatorOffsetX:6,
				navigatorOffsetY:6,
				navigatorHandlerColor:"#FF0000",
				navigatorBorderColor:"#FFFFFF",
				//----info window----//
				infoWindowBackgroundOpacity:.6,
				infoWindowBackgroundColor:"#FFFFFF",
				infoWindowScrollBarColor:"#585858",
				//----markers-----//
				showMarkersInfo:"no",
				markerToolTipOffsetY:0,
				markerToolTipOffsetY:2,
				//----context menu----//
				showScriptDeveloper:"no",
				contextMenuLabels:"Move left, Move right, Move down, Move up, Zoom in/Zoom out, Full screen/Normal screen",
				contextMenuBackgroundColor:"#d1cfcf",
				contextMenuBorderColor:"#8f8d8d",
				contextMenuSpacerColor:"#acacac",
				contextMenuItemNormalColor:"#585858",
				contextMenuItemSelectedColor:"#FFFFFF",
				contextMenuItemDisabledColor:"#b7b4b4"
			});
}

function generateURL(){
	jQuery("#ultraflex-flipbook").attr('src', 'book.html?id=ultraflex&pages=32&toc=2&size=magazine');
	
}