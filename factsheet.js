$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "/uploads/dashboard/metric-factsheet.xml",
    dataType: "xml",
     success: parseXml
  });
});

function parseXml(xml)
{  
   var TabID = $(xml).find("FactDataRow[id= '" + dash + "'  ] TabID").text();
   var Goal = $(xml).find("FactDataRow[id= '" + dash + "'  ] Goal").text();
   var MetCol = $(xml).find("FactDataRow[id= '" + dash + "'  ] MetricStatusbg ").text();
   var MetVal = $(xml).find("FactDataRow[id= '" + dash + "'  ] MetricValue").text();  
   var MesNam = $(xml).find("FactDataRow[id= '" + dash + "'  ] MeasureName").text();  
   var MetSta = $(xml).find("FactDataRow[id= '" + dash + "'  ] MetricStatus").text();  
   var MtStIm = $(xml).find("FactDataRow[id= '" + dash + "'  ] MetricStatusImage ").text();      
   var MesDes = $(xml).find("FactDataRow[id= '" + dash + "'  ] MeasureDescription ").text();
   var MesImp = $(xml).find("FactDataRow[id= '" + dash + "'  ] MeasureImportance ").text();
   var ExpPer = $(xml).find("FactDataRow[id= '" + dash + "'  ] ExplanationofPerformance ").text();
   var DatSrc = $(xml).find("FactDataRow[id= '" + dash + "'  ] DataSource ").text();
   var DiYoKn = $(xml).find("FactDataRow[id= '" + dash + "'  ] DidYouKnow").text();
   var UseLin = $(xml).find("FactDataRow[id= '" + dash + "'  ] UsefulLinks ").text();
   var LasUpd = $(xml).find("FactDataRow[id= '" + dash + "'  ] Lastupdate ").text();
   var ConEma = $(xml).find("FactDataRow[id= '" + dash + "'  ] ContactEmail ").text();
   var MetNam = $(xml).find("FactDataRow[id= '" + dash + "'  ] MetricName").text();
   var TabTit = $(xml).find("FactDataRow[id= '" + dash + "'  ] DataTrackingTitle1 ").text();
   var Table = $(xml).find("FactDataRow[id= '" + dash + "'  ] DataTrackingTable1").text();   

  $("#showDashboard").html("<div class='row' style='background-color: #9c27b0;'><div class='col-md-8 col-md-offset-2'><h1 style='color: #fff; font-size: 400%; text-align: center; font-weight: 800; padding-top: 50px; padding-bottom: 20px;'>"+ MetNam + "</h1><h1 style='color: #fff; font-size: 200%; text-align: center;'>Factsheet</h1></div></div><div class='row' style='margin-top: 40px;'><div class='col-md-8 col-md-offset-2'><a href='http://guelph.staging.wpengine.com/dashboard-3/#!tab" + TabID +"'>Dashboard </a>» " + MetNam + "<div id='metric'>");  
  $("#metric").append("<div class='row factDash'><div class='col-md-5 col-sm-6' style='border-right: 1px solid rgb(221, 221, 221);padding-left:15px'><h2 style='text-align:left'>Goal</h2><p style='text-align:left; font-size:110%;'>" + Goal + "</p></div><div class='col-md-5 col-sm-6' style='border-right: 1px solid rgb(221, 221, 221); padding-left:30px;'><div style='height: 182px; display: table; overflow:hidden'><div style='display: table-cell; vertical-align: middle; '><h2 class='metricValue'>" +MetVal + "</h2><div class='lead measureName'>" + MesNam + "</div></div></div></div><div class='col-md-2 col-sm-12' style='text-align: center;'><i class='material-icons metricStatusIcon data-action-icon' style='background-color:" + MetCol+";'>" + MtStIm + "</i><div class='lead'>" + MetSta + "</div></div></div>");


if  (!MesDes){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Measure description</h2>" + MesDes + "<br/>");
}

if  (!MesImp){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Measure importance</h2>" + MesImp + "<br/>");
}

if  (!ExpPer){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Explanation of performance</h2>" +ExpPer + "<br/>");
}

if  (!TabTit){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>" +TabTit + "</h2>");
}

if  (!Table){
  $("#metric").append(" ");
}else{
 $("#metric").append(Table);
}

if  (!DatSrc){
  $("#metric").append(" <br/>");
}else{
 $("#metric").append("<h2>Data source</h2>" + DatSrc + "<br/>");
}

if  (!DiYoKn){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Did you know?</h2>" + DiYoKn + "<br/>");
}

if  (!UseLin){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Useful links</h2>" + UseLin + "<br/>");
}

if  (!ConEma){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Contact email</h2>" + ConEma + "<br/>");
}

if  (!LasUpd){
  $("#metric").append(" ");
}else{
 $("#metric").append("<h2>Last updated</h2>" + LasUpd + "<br/>");
}
  
}   