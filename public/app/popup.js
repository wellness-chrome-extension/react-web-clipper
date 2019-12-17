// document.addEventListener("DOMContentLoaded", function() {
//   let urlValues = ["page", "link", "image", "audio"];
//   chrome.storage.sync.get(null, function(result) {
//     let newArr = [];
//     for (let key in result) {
//       newArr.push([key, result[key]]);
//     }
//     let sortedArr = newArr.sort((a, b) => b[0] - a[0]);
//     let popupItemNumber = sortedArr.length

//     let itemString = "";
//     for (let i = 0; i < popupItemNumber; i++) {
//       let currentItem = "";
//       //may need to put ids here
//       if (urlValues.includes(sortedArr[i][1][1])) {
//         currentItem +=
//           "<div class='Item-container'> <div class='List-item-container'> <div class='List-item'> <a href=\"" +
//           sortedArr[i][1][0] +
//           '" target="_blank">' +
//           sortedArr[i][1][0] +
//           '</a> </div> <span class="arrow"> &#8681; </span> </div> <span class="star" style="color:' +
//           sortedArr[i][1][2] +
//           ';" data-timeId=' +
//           sortedArr[i][0] +
//           '>&#9733;&ensp;</span> <button class="remove" data-timeId=' +
//           sortedArr[i][0] +
//           "> x</button> </div>";
//       } else {
//         currentItem +=
//           '<div class="Item-container"> <div class="List-item-container"> <div class="List-item">' +
//           sortedArr[i][1][0] +
//           '</div> <span class="arrow"> &#8681; </span> </div> <span class="star" style="color:' +
//           sortedArr[i][1][2] +
//           ';" data-timeid=' +
//           sortedArr[i][0] +
//           '>&#9733;&ensp;</span> <button class="remove" data-timeid=' +
//           sortedArr[i][0] +
//           "> x</button> </div>";
//       }
//       itemString += currentItem;
//     }

//     document.getElementById("itemList").innerHTML = itemString;
//     let starredString = "";
//     for (let i = 0; i < sortedArr.length; i++) {
//       let currentItem = "";
//       //may need to put ids here
//       if (
//         urlValues.includes(sortedArr[i][1][1]) &&
//         sortedArr[i][1][2] === "red"
//       ) {
//         currentItem +=
//           "<div class='Item-container'> <div class='List-item-container'> <div class='List-item'> <a href=\"" +
//           sortedArr[i][1][0] +
//           '" target="_blank">' +
//           sortedArr[i][1][0] +
//           '</a> </div> <span class="arrow"> &#8681; </span> </div> <span class="star" style="color:' +
//           sortedArr[i][1][2] +
//           ';" data-timeid=' +
//           sortedArr[i][0] +
//           '>&#9733;&ensp;</span> <button class="remove" data-timeid=' +
//           sortedArr[i][0] +
//           "> x</button> </div>";
//       } else if (sortedArr[i][1][2] === "red") {
//         currentItem +=
//           '<div class="Item-container"> <div class="List-item-container"> <div class="List-item">' +
//           sortedArr[i][1][0] +
//           '</div> <span class="arrow"> &#8681; </span> </div> <span class="star" style="color:' +
//           sortedArr[i][1][2] +
//           ';" data-timeid=' +
//           sortedArr[i][0] +
//           '>&#9733;&ensp;</span> <button class="remove" data-timeid=' +
//           sortedArr[i][0] +
//           "> x</button></div>";
//       }
//       starredString += currentItem;
//     }

//     document.getElementById("starredItems").innerHTML = starredString;
//     let starElement = document.getElementsByClassName("star");

//     for (let i = 0; i < starElement.length; i++) {
//       starElement[i].addEventListener("click", function() {
//         if (starElement[i].style.color === "black") {
//           chrome.storage.sync.set(
//             {
//               [starElement[i].dataset.timeid]: [
//                 result[starElement[i].dataset.timeid][0],
//                 result[starElement[i].dataset.timeid][1],
//                 "red"
//               ]
//             },
//             function() {
//               location.reload();
//             }
//           );
//         }
//         if (starElement[i].style.color === "red") {
//           chrome.storage.sync.set(
//             {
//               [starElement[i].dataset.timeid]: [
//                 result[starElement[i].dataset.timeid][0],
//                 result[starElement[i].dataset.timeid][1],
//                 "black"
//               ]
//             },
//             function() {
//               location.reload();
//             }
//           );
//         }
//       });
//     }

//     let expandElement = document.getElementsByClassName("arrow");

//     for (let i = 0; i < expandElement.length; i++) {
//       expandElement[i].addEventListener("click", function() {
//         console.log(expandElement[i].parentNode.className)
//         if (expandElement[i].parentNode.className === "List-item-container"){
//           expandElement[i].parentNode.className = "Expanded-list-item-container"
//           console.log('First', expandElement[i].parentNode.className)
//         }
//         else{
//           expandElement[i].parentNode.className = "List-item-container"
//           console.log('Second', expandElement[i].parentNode.className)
//         }
//       });
//     }

    
//     const form = document.getElementById('item-form');
//     const log = document.getElementById('log');
//     const addedItem = document.getElementById('add-item').value;

//     function logSubmit(event) {
//       log.textContent = `Form Submitted! Time stamp: ${event.timeStamp} ${addedItem}`;
//       console.log(addedItem)
//       event.preventDefault();
//     }

//     form.addEventListener('submit', logSubmit);




//     let removeElement = document.getElementsByClassName("remove");
//     for (let i = 0; i < removeElement.length; i++) {
//       removeElement[i].addEventListener("click", function() {
//         chrome.storage.sync.remove([removeElement[i].dataset.timeid], function() {
//           location.reload();
//         });
//       });
//     }
//   });
// });
