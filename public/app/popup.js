

document.addEventListener('DOMContentLoaded', function() {
    let urlValues = ['page', 'link', 'image', 'audio']
    chrome.storage.sync.get(null, function(result) {
      let newArr = [];

      for (let key in result){
        newArr.push([key, result[key]]);
      }

      let sortedArr = newArr.sort((a, b) => b[0] - a[0]);

      let popupItemNumber
      if(sortedArr.length < 30) {
        popupItemNumber = sortedArr.length
      }
      else {
        popupItemNumber = 30
      }
      console.log('popupItemNumber', popupItemNumber)

      let itemString = ''

      for(let i = 0; i < popupItemNumber; i++){
        let currentItem = ''
        //may need to put ids here
        if(urlValues.includes(sortedArr[i][1][1])){
          currentItem += "<a href=\"" + sortedArr[i][1][0] + "\" target=\"_blank\">" + sortedArr[i][1][0] + "</a>"
        }
        else{
          currentItem += '<div>' + sortedArr[i][1][0] + '</div>'
        }
        itemString += currentItem
      }
      console.log('itemstring', itemString)

      document.getElementById("itemList").innerHTML = itemString


      // if (document.getElementById('output1')){
      //   if(urlValues.includes(sortedArr[0][1][1])){
      //     document.getElementById("output1").innerHTML += "<a href=\"" + sortedArr[0][1][0] + "\" target=\"_blank\">" + sortedArr[0][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output1').innerHTML = sortedArr[0][1][0];
      //   }
      //   if(urlValues.includes(sortedArr[1][1][1])){
      //     document.getElementById("output2").innerHTML += "<a href=\"" + sortedArr[1][1][0] + "\" target=\"_blank\">" + sortedArr[1][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output2').innerHTML = sortedArr[1][1][0];
      //   }
      //   if(urlValues.includes(sortedArr[2][1][1])){
      //     document.getElementById("output3").innerHTML += "<a href=\"" + sortedArr[2][1][0] + "\" target=\"_blank\">" + sortedArr[2][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output3').innerHTML = sortedArr[2][1][0];
      //   }
      //   if(urlValues.includes(sortedArr[3][1][1])){
      //     document.getElementById("output4").innerHTML += "<a href=\"" + sortedArr[3][1][0] + "\" target=\"_blank\">" + sortedArr[3][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output4').innerHTML = sortedArr[3][1][0];
      //   }
      //   if(urlValues.includes(sortedArr[4][1][1])){
      //     document.getElementById("output5").innerHTML += "<a href=\"" + sortedArr[4][1][0] + "\" target=\"_blank\">" + sortedArr[4][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output5').innerHTML = sortedArr[4][1][0];
      //   }
      //   if(urlValues.includes(sortedArr[5][1][1])){
      //     document.getElementById("output6").innerHTML += "<a href=\"" + sortedArr[5][1][0] + "\" target=\"_blank\">" + sortedArr[5][1][0] + "</a>"
      //   }
      //   else{
      //     document.getElementById('output6').innerHTML = sortedArr[5][1][0];
      //   }
      // }
    })

    if (document.getElementById('title')){
      document.getElementById('title').addEventListener('click', function() {
        document.getElementById("title").style.fontWeight = 'bold';
      });
    }
    if (document.getElementById('output1delete')){
      title1.addEventListener('click', function() {
        document.getElementById("title").style.fontWeight = 'bold';
      });
    }
});




