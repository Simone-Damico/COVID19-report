
$(document).ready(function() {
    $('#ad').materialSelect();
    $("#treeview").treeview();
});
$("#treeview li").click(function() {
    $(this).addClass("selected");
});
var a;
function initQuery1() {
    var containerDiv = document.getElementById("containerQuery1"),
    url = "https://public.tableau.com/views/homework-BI/Query1_1";
    a  = new tableau.Viz(containerDiv, url);
    console.log()
};

function addValuesToFilter() {
    console.log(a)
  a.getWorkbook().getActiveSheet().applyFilterAsync("CDS",  
    ["[541] SCIENZE DEL TURISMO E COMUNITA' LOCALE(C.SO A DISTANZA)"],
    tableau.FilterUpdateType.REPLACE)
}
var viz;
function initQuery2() {
    var containerDiv = document.getElementById("containerQuery2"),
    url = "https://public.tableau.com/views/homework-BI/Dashboard2";
    viz = new tableau.Viz(containerDiv, url);
};

function but2(cds) {
    console.log(viz)
    viz.getWorkbook().getActiveSheet().getWorksheets()[0].applyFilterAsync(
        "Area",  ["Giuridica", "Scientifica"],
    tableau.FilterUpdateType.REPLACE)
};

function initQuery3() {
    var containerDiv = document.getElementById("containerQuery3"),
    url = "https://public.tableau.com/views/homework-BI/Dashboard3";
    query3 = new tableau.Viz(containerDiv, url);
};

var query4
function initQuery4() {
    var containerDiv = document.getElementById("containerQuery4"),
    url = "https://public.tableau.com/views/homework-BI/Sheet6";
    query4 = new tableau.Viz(containerDiv, url);
};

function but3() {
    console.log(viz)
    query4.getWorkbook().getActiveSheet().getWorksheets()[0].applyFilterAsync(
        "Corso di studi",  ["[541] SCIENZE DEL TURISMO E COMUNITA' LOCALE(C.SO A DISTANZA)"],
    tableau.FilterUpdateType.REPLACE)
};

var query5
function initQuery5() {
    var containerDiv = document.getElementById("containerQuery5"),
        url = "https://public.tableau.com/views/homework-BI/Sheet7";
    query5 = new tableau.Viz(containerDiv, url);
};


function pp() {
    var values = $('#ad').val();
    console.log(values)


}