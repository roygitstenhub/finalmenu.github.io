// ------------For Hemberger Menu-------
let btn = document.querySelector('.toogle-nav');
btn.addEventListener('click', myfunction);

function myfunction() {
  let x = document.querySelector('.nav-items');

  x.classList.toggle('show');
  // x.classList.slideToggle('slow');
  // $(x).slideToggle('slow');
  

 

}

(function (global) {

  var xhttp = {};//object

  // var xhttp= new XMLHttpRequest();
  //all html-page adress
  var homehtml = "snippet/menu-categories.html";
  var homespl = "snippet/special-categories.html";
  var lunchhtml = "snippet/sub-snippet/lunch-menu.html";
  var appetizerhtml = "snippet/sub-snippet/Appetizers-menu.html";
  var souphtml = "snippet/sub-snippet/soup-menu.html";
  var chowmeinhtml = "snippet/sub-snippet/Chowmein-menu.html";
  //set two
  var veghtml = "snippet/sub-snippet/veg-menu.html";
  var noodlehtml = "snippet/sub-snippet/noodles-menu.html";
  var curryhtml = "snippet/sub-snippet/curry-menu.html";
  var susihtml = "snippet/sub-snippet/sushi-menu.html";
  //set three
  var dinnerhtml = "snippet/sub-snippet/dinner-menu.html";
  var deserthtml = "snippet/sub-snippet/desert-menu.html";
  var beefhtml = "snippet/sub-snippet/beef-menu.html";
  var friedhtml = "snippet/sub-snippet/friedrice-menu.html";

  // set 3
  var sidehtml = "snippet/sub-snippet/sideorder-menu.html";
  var vealhtml = "snippet/sub2-snippet/veal-menu.html";
  var panhtml = "snippet/sub2-snippet/panfried-menu.html";
  var duckhtml = "snippet/sub2-snippet/duck-menu.html";
  var meihtml = "snippet/sub2-snippet/meifan-menu.html";
  var chefhtml = "snippet/sub2-snippet/chef-menu.html";

  // inserting html for select
  let insertHtml = function (selector, html) {
    var targetEle = document.querySelector(selector);
    targetEle.innerHTML = html;
  }

  // on loading icon inside element 
  var showLoading = function (selector) {
    var html = "<div class='text-center gificon'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    xhttp.loadMenuCategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(homehtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }    //end function

    xhttp.loadSplcategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(homespl, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }

    xhttp.loadlunchcategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(lunchhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }

    xhttp.loadapptlcategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(appetizerhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }

    xhttp.loadSoupcategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(souphtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }

    xhttp.loadchowcategories = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(chowmeinhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }

    xhttp.loadvegcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(veghtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }


    xhttp.loadnoodlecat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(noodlehtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }


    xhttp.loadcurrycat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(curryhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }


    xhttp.loadsusicat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(susihtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loaddinnercat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(dinnerhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loaddesertcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(deserthtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadbeefcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(beefhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadfrcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(friedhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    // var sidehtml="snippet/sub-snippet/sideorder-menu.html";
    // var vealhtml="snippet/sub2-snippet/veal-menu.html";
    // var panhtml="snippet/sub2-snippet/panfried-menu.html";
    // var duckhtml="snippet/sub2-snippet/duck-menu.html";
    // var meihtml="snippet/sub2-snippet/meifan-menu.html";
    // var chefhtml="snippet/sub2-snippet/chef-menu.html";
    xhttp.loadsidecat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(sidehtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadvealcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(vealhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadpancat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(panhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadduckcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(duckhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadmeifancat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(meihtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }

    xhttp.loadchefcat = function () {
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(chefhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);

    }
  
    var awardhtml="snippet/award-tile.html"
    xhttp.loadaward =function (){
      showLoading("#main-contentfly");
      $ajaxUtils.sendGetRequest(awardhtml, function (respnseText) {
        document.querySelector("#main-contentfly").innerHTML = respnseText;
      }, false);
    }
    



  });//document loading





  // load the menu categories view
  // xhttp.loadMenuCategories=function()
  // {
  //   showLoading("#main-content");
  //   $ajaxUtils.sendGetRequest(allCategoriesUrl,buildAndShowCategoriesHTML);
  // };

  // //from the server
  // function buildAndShowCategoriesHTML(categories){
  //   $ajaxUtils.sendGetRequest(categoriestitle,function(categoriestitle) {
  //   //retrive single category snippet
  //  $ajaxUtils.sendGetRequest(categoriesitem,function(categoriesitem){
  //   var categoriesViewHTML=buildAndShowCategoriesViewHTML(categories,categoriestitle,categoriesitem);
  //   insertHtml("#main-content",categoriesViewHTML);
  //  },false);

  //   },false);
  // }

  // function buildAndShowCategoriesViewHTML(categories,categoriestitle,categoriesitem)
  // {
  //  var finalHTML=categoriestitle;
  //  finalHTML+="<section class='rows'>";

  // //  loop over categories
  // for(var i=0;i<categories.length;i++)
  // {
  //   //insert category
  //   var html = categoriesitem
  //   var name=""+categories[i].name;
  //   var short_name=categories[i].short_name;
  //   html=insertProperty(html,"name",name);
  //   html=insertProperty(html,"short_name",short_name);
  //   finalHTML+=html;
  // }
  // finalHTML+="</section>";
  // return finalHTML;
  // }


  global.$xhttp = xhttp;


})(window);





