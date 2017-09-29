displayDashboardGat(0);

function displayDashboardGat(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionGat(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-gat.xml", true);
    xmlhttp.send();
}

function myFunctionGat(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;
		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	
		 
		dashlet +="<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";
		 
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
	}	
  }
  document.getElementById("showDashboardGat").innerHTML = dashlet;
}

displayDashboardLiv(0);

function displayDashboardLiv(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionLiv(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-liv.xml", true);
    xmlhttp.send();
}

function myFunctionLiv(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
 		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;
		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	

		dashlet +="<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";    
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
	}	
  }
  document.getElementById("showDashboardLiv").innerHTML = dashlet;
}

displayDashboardEnv(0);

function displayDashboardEnv(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionEnv(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-env.xml", true);
    xmlhttp.send();
}

function myFunctionEnv(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
 
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;

		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	
		dashlet +=
		"<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";
		 
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
		}	
  }
  document.getElementById("showDashboardEnv").innerHTML = dashlet;
}

displayDashboardPs(0);

function displayDashboardPs(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionPs(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-ps.xml", true);
    xmlhttp.send();
}
function myFunctionPs(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;
		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	
		dashlet +=
		"<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";  
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
		}	
	}
  document.getElementById("showDashboardPs").innerHTML = dashlet;
}

displayDashboardEco(0);

function displayDashboardEco(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionEco(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-eco.xml", true);
    xmlhttp.send();
}

function myFunctionEco(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;

		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	 
		dashlet += "<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";   
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
		}	
  }
  document.getElementById("showDashboardEco").innerHTML = dashlet;
}

displayDashboardFin(0);

function displayDashboardFin(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionFin(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-fin.xml", true);
    xmlhttp.send();
}

function myFunctionFin(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;
		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}	
		dashlet +="<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ "<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";  
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
		}	
  }
  document.getElementById("showDashboardFin").innerHTML = dashlet;
}

displayDashboardCs(0);

function displayDashboardCs(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionCs(this, i);
        }
    };
    xmlhttp.open("GET", "/uploads/dashboard/tab-metric-cs.xml", true);
    xmlhttp.send();
}

function myFunctionCs(xml) {
	var dashNo =0;
	var dashlet=" ";
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("MetricDataRow");
	for (i = 0; i <x.length; i++)
	{ 
		if(dashNo === 0){
			dashlet +=" <div class='row ' style='margin-top:30px'> " + "<div class='col-md-3 col-sm-6 container  col-md-offset-1-and-half container'> " ;
		}else if (dashNo === 1) {
			dashlet +=" <div class='col-md-3 col-sm-6 container col-md-offset-1'>";
		}else{
			dashlet +="<div class='col-md-3 col-sm-6 container col-md-offset-1'>" ;
		}		 
		dashlet +=
		"<a href='http://guelph.ca/city-hall/city-administrators-office/strategic-planning-corporate-initiatives/public-reporting/performance-dashboard/"
		+
		x[i].getElementsByTagName("URLFactSheet")[0].childNodes[0].nodeValue 
		+ 
		"' class='deco-none'>"
		+
		"<div class='col-md-12 top ' style='background-color: "
		+ 
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+
		" '>"
		+
		"<h2 class='metricName'>"
		+
		x[i].getElementsByTagName("MetricName")[0].childNodes[0].nodeValue 
		+
		"</h2></div><div class='metricValue col-md-12'>" 
		+
		x[i].getElementsByTagName("MetricValue")[0].childNodes[0].nodeValue 
		+
		"</div><div class='col-md-12 col-xs-12 col-sm-12 metricUnit' style='height: 82px; display: table; overflow:hidden' ><div style='display: table-cell; vertical-align: middle; '>"
		+
		x[i].getElementsByTagName("MeasureName")[0].childNodes[0].nodeValue
		+
		"</div></div>"
		+ 
		"<div class='col-md-3 col-md-offset-1 col-xs-3 col-xs-offset-1'> <div class='data-action-icon' style='background-color: "
		+
		x[i].getElementsByTagName("MetricValuebg")[0].childNodes[0].nodeValue 
		+ 
		"'><i class='material-icons metricStatusIcon '>" 
		+
		x[i].getElementsByTagName("MetricStatusImage")[0].childNodes[0].nodeValue 
		+
		"</i></div></div>"
		+
		"<div class='col-md-6  col-md-offset-1 col-xs-7  col-xs-offset-1 '><p class='metricStatus' style='display:block; height:71.11px'>"
		+
		x[i].getElementsByTagName("MetricStatus")[0].childNodes[0].nodeValue 
		+ 
		"</p></div>" 
		+
		"</a>";  
		if(dashNo === 0){
			dashlet +="</div>";
			dashNo++;
		}else if (dashNo === 1) {
			dashlet +="</div>";
			dashNo++;
		}else{
			dashlet +="</div>" + "</div>" ;
			dashNo= 0;                
		}	
  }
  document.getElementById("showDashboardCs").innerHTML = dashlet;
}





