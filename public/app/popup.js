document.addEventListener('DOMContentLoaded', function() {
    let urlValues = ['page', 'link', 'image', 'audio']
    chrome.storage.sync.get(null, function(result) {
      let newArr = [];

      for (let key in result){
        newArr.push([key, result[key]]);
      }

      let sortedArr = newArr.sort((a, b) => b[0] - a[0]);

      if (document.getElementById('output1')){
        if(urlValues.includes(sortedArr[0][1][1])){
          document.getElementById("output1").innerHTML += "<a href=\"" + sortedArr[0][1][0] + "\" target=\"_blank\">" + sortedArr[0][1][0] + "</a>"
        }
        else{
          document.getElementById('output1').innerHTML = sortedArr[0][1][0];
        }
        if(urlValues.includes(sortedArr[1][1][1])){
          document.getElementById("output2").innerHTML += "<a href=\"" + sortedArr[1][1][0] + "\" target=\"_blank\">" + sortedArr[1][1][0] + "</a>"
        }
        else{
          document.getElementById('output2').innerHTML = sortedArr[1][1][0];
        }
        if(urlValues.includes(sortedArr[2][1][1])){
          document.getElementById("output3").innerHTML += "<a href=\"" + sortedArr[2][1][0] + "\" target=\"_blank\">" + sortedArr[2][1][0] + "</a>"
        }
        else{
          document.getElementById('output3').innerHTML = sortedArr[2][1][0];
        }
        if(urlValues.includes(sortedArr[3][1][1])){
          document.getElementById("output4").innerHTML += "<a href=\"" + sortedArr[3][1][0] + "\" target=\"_blank\">" + sortedArr[3][1][0] + "</a>"
        }
        else{
          document.getElementById('output4').innerHTML = sortedArr[3][1][0];
        }
        if(urlValues.includes(sortedArr[4][1][1])){
          document.getElementById("output5").innerHTML += "<a href=\"" + sortedArr[4][1][0] + "\" target=\"_blank\">" + sortedArr[4][1][0] + "</a>"
        }
        else{
          document.getElementById('output5').innerHTML = sortedArr[4][1][0];
        }
        if(urlValues.includes(sortedArr[5][1][1])){
          document.getElementById("output6").innerHTML += "<a href=\"" + sortedArr[5][1][0] + "\" target=\"_blank\">" + sortedArr[5][1][0] + "</a>"
        }
        else{
          document.getElementById('output6').innerHTML = sortedArr[5][1][0];
        }
      }
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



chrome.storage.onChanged.addListener(function(changes, namespace) {
    let newArr = []
    for (let key in changes){
      newArr.push([key, changes[key].newValue])
    }
    let sortedArr = newArr.sort((a, b) => b[0] - a[0]);

    console.log('New value is %s %s %s !!', sortedArr[0][0], sortedArr[0][1][0], sortedArr[0][1][1])
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
    if(sortedArr[0][1][0]){
      chrome.browserAction.setBadgeText({ text: sortedArr[0][1][0] })
    }

  });



