//Update the Table based on the url hash to support site navigation changes
window.onhashchange = function(){
    console.log("hash change");    
    LoadTableFromHash();
};
window.onpageshow = function (){
    console.log("page show");    
    LoadTableFromHash();
};
function LoadTableFromHash()
{
    if(window.location.hash != "")
    {
        document.getElementById("category").value = window.location.hash.split('#')[1];
        SelectTable(window.location.hash.split('#')[1]);
    }
    else
    {
        document.getElementById("category").selectedIndex = 0;
        SelectTable("pop");
    }
}

//Global vars
var filepath;
var csvdata;

function SelectTable(filename)
{
    //console.log("Select table called");
    
    //filepath = "csv/"+ doc.getElementById("category").value;
    filepath = "csv/"+filename+".csv";
    //document.getElementById("demo").innerHTML = filepath;

    //Clear HTML Data Table
    document.getElementById("showData").innerHTML = "";
    ClearFilter("price");
    ClearFilter("platform");
    ClearFilter("categories");
    ClearFilter("tag");
    checkHeight(); //footer.js

    //Load CSV Data
    LoadDoc(filepath, CreateTableFromArray2D);
    
    //Update Table Name
    SetTableName();
}

function LoadDoc(filepath, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("papa").innerHTML = this.responseText;
            csvdata = Papa.parse(this.responseText);
            //console.log(csvdata);
            callback(csvdata.data);
        }
    };
    xhttp.open("GET", filepath, true);
    xhttp.send();
}

function CreateTableFromArray2D(array2D)
{
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    table.onload = checkHeight();//footer.js

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    for(var i = 0; i < array2D.length; i++)
    {
        var tr = table.insertRow(-1);                       // TABLE ROW.

        for(var j = 0; j < array2D[i].length; j++)
        {
            if(i == 0)
            {
                if(j==1){continue;}                         // Dont make Table Cell for Links column.
                var th = document.createElement("th");      // TABLE HEADER.
                if(j==0){th.style.borderRightStyle = "none";tr.appendChild(th);th = document.createElement("th");}
                th.textContent = array2D[i][j];
                tr.appendChild(th);
            }
            else
            {
                if(j==1){continue;}                         // Dont make Table Cell for Links column.
                var tabCell = tr.insertCell(-1);            // TABLE Cell.
                if(j==0){   
                    var img = document.createElement("img");
                    // Using event listener to catch errors
                    img.addEventListener('error', function(e) {
                        //console.log(e.target.src);
                        this.src = "images/placeholder.png";
                    });
                    img.src = "images/resources/" + GetImageName(array2D[i][j+1]) + ".png";
                    img.className = "tableimg";
                    img.addEventListener('load',function(e){console.log(e.target.src);checkHeight()}); //footer.js
                    tabCell.appendChild(img);
                    tabCell = tr.insertCell(-1);
                    var a = document.createElement("a");
                    a.href = array2D[i][j+1];
                    a.textContent = array2D[i][j];
                    tabCell.appendChild(a);
                    j++;
                }
                else{
                    tabCell.textContent = array2D[i][j];
                }
            }
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.appendChild(table);

    //FilterTable();
    MakeFilterChoices(2,"price");
    MakeFilterChoices(3,"platform");
    MakeFilterChoices(4,"categories");
    MakeFilterChoices(5,"tag");
}

var filtersPrice;
var fitlersPlatform;

function UpdateFilterArray(filterName)
{
    var filterArrayAll = document.getElementsByName(filterName);
    //console.log(filterArrayAll);
    var filterArrayCurrent = [];
    for(var i = 0; i < filterArrayAll.length; i++)
    {
        if(filterArrayAll[i].checked == true)
        {
            filterArrayCurrent.push(filterArrayAll[i].value);
        }
    }
    return filterArrayCurrent;
}

// Add filtering for categories and tags
function FilterTable()
{
    filtersPrice = UpdateFilterArray("price");
    fitlersPlat = UpdateFilterArray("platform");
    fitlersCat = UpdateFilterArray("categories");
    fitlersTag = UpdateFilterArray("tag");

    filterTableByColumn();
    checkHeight();//footer.js
}

function filterTableByColumn() 
{
    var table, tr, i;
    table = document.getElementById("myTable");
    if(table)
    {
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) 
        {
            if (CheckFilter(filtersPrice, tr, i, 2) && CheckFilter(fitlersPlat, tr, i, 3) && CheckFilter(fitlersCat, tr, i, 4) && CheckFilter(fitlersTag, tr, i, 5))
            {
                tr[i].style.display = "";
            } 
            else 
            {
                tr[i].style.display = "none";
            }
        }     
    }
}

function CheckFilter(filterArr, tr, i, colIndex)
{
    var td, j, txtValue, isfiltered = false;
    
    td = tr[i].getElementsByTagName("td")[colIndex];
    if(filterArr.length == 0)
    {
        isfiltered = true;
    }
    if (td) 
    {
        // If table column contains any of the filters, set isfiltered to true.
        for(j=0;j<filterArr.length;j++)
        {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().includes(filterArr[j])) 
            {
                isfiltered = true;
                break;
            } 
        }
    }
    return isfiltered;
}

function GetImageName(url)
{
    // Remove Http
    url = url.replace(/h.*?\/\//,"")

    // Split trailing url info
    url = url.split('/');
    
    // Return the image name.
    //console.log(url[0]);
    return url[0];
}     

//Set URL Hash
function SetHash(value)
{
    window.location.hash = value;            
}
function SetTableName()
{
    var header = document.getElementById("tname");
    var category = document.getElementById("category");
    header.innerHTML = category.options[category.selectedIndex].text;
}

//Code to reset the selection autofill for Chrome and Brave browsers.
const ua = window.navigator.userAgent.toLowerCase();
const isChrome = /chrome|crios/.test(ua) && ! /edge|opr\//.test(ua)
const isBrave = isChrome && !window.googletag;
console.log(isChrome);
console.log(isBrave);
if(isChrome || isBrave){
        setTimeout(function(){resetcat();}, 10) ;
}
function resetcat(){
    if(document.getElementById("category").selectedIndex != 0){
        console.log("reset");
        document.getElementById("category").selectedIndex = 0;
    }
}

function GetFilterNames(column_index)
{
    var set = new Set();
    for (var j=1;j < csvdata.data.length;j++)
    {
        var cells = csvdata.data[j][column_index].split(", ");
        cells.forEach(element => {
            set.add(element);
        });
    }
    return Array.from(set).sort();
}

function MakeFilterChoices(column_index, filter_id)
{
    var arr = GetFilterNames(column_index);
    var list = document.getElementById(filter_id);

    list.innerHTML = "";

    arr.forEach(element => {
        if(element != "")
        {
            var item = document.createElement("li");
            var label = document.createElement("label");
            var input = document.createElement("input");
            
            input.type = "checkbox";
            input.name = filter_id;
            input.value = element.toLowerCase();
            input.onclick = function() {FilterTable();}

            label.appendChild(input);
            label.appendChild(document.createTextNode(element));
            
            item.appendChild(label);
            list.appendChild(item);
        }
    });
}

function ClearFilter(id)
{
    document.getElementById(id).innerHTML = "";
}