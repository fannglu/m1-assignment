var photos = []; //Declare an empty array to store img element
var fileNames = [
  "dryfood",
  "alcohol",
  "beverages",
  "fruits",
  "Household-cleaning-products",
  "pantry",
  "petsupplies",
  "promo",
  "togosupplies",
  "vegetables",
]; //empty array to store image file names
var imageList = []; // empty array to store html list that contains an image element
var image; //Declare an empty variable to store the assembled image list codes
var openDiv = "<div id='photo'>"; // a variable that contain open list
var closeDiv = "</div>"; //a variable that contains close list element
var productDescription = [
  "Dried Beans and Peas",
  "Wine & Beer",
  "Box drinks & Canned Drinks",
  "Orange, Pear, Apple",
  "Cleaning Supplies",
  "Canned Goods",
  "Pet Food",
  "Promotion",
  "To-Go Boxes and Utensils",
  "Organic Vegetables",
];
var productCaption = [
  "Dry Food",
  "Alcohol",
  "Beverages",
  "Fruits",
  "Household Cleaning Products",
  "Pantry",
  "Petsupplies",
  "Promo",
  "Togo Supplies",
  "Vegetables",
];

var openCap = "<figcaption class='productCaption'>";
var closeCap = "</figcaption>";
var openDes = "<button class='productDescription' id='CatDes' onclick='viewPD(";
var cDescClose = ")'>";
var closeDes = "</button>";

var pInfo = [
  "Dry beans and peas are mature forms of legumes, which are plants that have pods with rows of seeds inside. Some popular varieties include pinto beans, kidney beans, black beans, lentils, split peas, and garbanzo beans (chickpeas).",
  "Malt Beverages, Craft Brew, Domestic Beers, Imported Beers, Ciders, Variety Packs",
  "Non-alcoholic drinks, Juices, Water, Sparkling Water, Energy Drinks, Protein Drinks, Dairy & Non-Dairy, Sports drinks, Soft Drinks, Powdered Drink Mixes & Flavorings, Coffee and Tea",
  "Grapes, Citrus Fruits, Berries, Pear, Kiwi, Banana, Cut and Packaged Fruits, Tropical and Exotic Fruits, Apples, Melons, Stone Fruits",
  "Diswashing, Paper and Plastic, Laundry, Cleaning Supplies",
  "Condense Milk, Canned Vegies and Fruits, Canned beans, Pasta Paste, Canned Tomato",
  "Pet Toys, Pet Food, Pet Supplies",
  "Best Deal you can find!",
  "Pastics Utensils, Sustainable Boxes, To-go Boxes",
  "Fresh Vegies and Packed",
];
var closePop = "Click This to Close";


//Create a loop to create 10 images starting with index of 0
for (var i = 0; i < 10; i++) {
  // fileNames.push("Category"+(i+1)); //generate filename and store in the array
  photos.push(
    "<img src='Images/Category/" +
      fileNames[i] +
      ".jpeg' alt='Product Category " +
      fileNames[i] +
      " ' `> "
  ); //assenble full image element

  image =
    openDiv +
    photos[i] +
    openCap +
    productCaption[i] +
    openDes +
    i +
    cDescClose +
    productDescription[i] +
    closeDes +
    closeCap +
    closeDiv; //assemble the entire image list and store in variable

  imageList.push(image); // store full image list in array
}
document.getElementById("categories").innerHTML = imageList.join(" ");

// On MouseOver on product caption
function viewPD(i) {
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("title").innerHTML = productCaption[i];
  document.getElementById("desc").innerHTML = pInfo[i];
  document.getElementById("closeINFO").innerHTML = closePop;
}

var closeinfo = document.getElementById("closeINFO"); 
closeinfo.addEventListener("click",hideInfo); 
function hideInfo() {
  document.getElementById("infoBox").style.visibility = "hidden";
}
//  JQuery Image pop up 
$(document).ready(function() {
 $('img').click(function() {
   $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
   $('.box').fadeIn();

   if ($('.box').contents('img')) {
    $('.box').contents().remove('img'); //If true, clear image
    }

    var $imgCat = $(this).clone();

    $('.box').append($imgCat);


    console.log($imgCat)

  });

 $(".close, .backdrop").click(function () {
   $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
     $(".backdrop").css("display", "none");
   });
   $(".box").fadeOut();
 });


  
});
