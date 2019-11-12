function pageOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    chrome.storage.sync.set({[seconds1]: [info["pageUrl"], 'page', 'black']}, function() {
      console.log('pageUrl is set to ' + info["pageUrl"]);
    });
    chrome.storage.sync.get([seconds1], function(result) {
      console.log(result[seconds1][0] + ' is set to ' + result[seconds1][1] + 'and the timeId is ' + seconds1);
    });
  }

  function selectionOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    chrome.storage.sync.set({[seconds1]: [info["selectionText"], 'selection', 'black']}, function() {
      console.log('selectionText is set to ' + info["selectionText"]);
    });
    chrome.storage.sync.get([seconds1], function(result) {
      console.log(result[seconds1][0] + ' is set to ' + result[seconds1][1] + 'and the timeId is ' + seconds1);
    });
  }

  function linkOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    chrome.storage.sync.set({[seconds1]: [info["linkUrl"], 'link', 'black']}, function() {
      console.log('link is set to ' + info["linkUrl"]);
    });
    chrome.storage.sync.get([seconds1], function(result) {
      console.log(result[seconds1][0] + ' is set to ' + result[seconds1][1] + 'and the timeId is ' + seconds1);
    });
  }

  function imageOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    chrome.storage.sync.set({[seconds1]: [info["srcUrl"], 'image', 'black']}, function() {
      console.log('image is set to ' + info["srcUrl"]);
    });
    chrome.storage.sync.get([seconds1], function(result) {
      console.log(result[seconds1][0] + ' is set to ' + result[seconds1][1] + 'and the timeId is ' + seconds1);
    });
  }

  function audioOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    chrome.storage.sync.set({[seconds1]: [info["srcUrl"], 'audio', 'black']}, function() {
      console.log('audio is set to ' + info["srcUrl"]);
    });
    chrome.storage.sync.get([seconds1, 'type'], function(result) {
      console.log(result[seconds1][0] + ' is set to ' + result[seconds1][1] + 'and the timeId is ' + seconds1);
    });
  }

  // function videoOnClick (info, tab){
  //   console.log("item " + info.menuItemId + " was clicked");
  //   console.log("info: " + JSON.stringify(info));
  //   console.log("tab: " + JSON.stringify(tab));
  //   chrome.storage.sync.set({data: info["srcUrl"], type: 'image'}, function() {
  //     console.log('image is set to ' + info["srcUrl"]);
  //   });
  //   chrome.storage.sync.get(['data', 'type'], function(result) {
  //     console.log(result.type + ' is set to ' + result.data);
  //   });
  // }

  var pageId = chrome.contextMenus.create({
    "title": "Save page to Web Clipper", 
    "contexts": ['page'], 
    "onclick": pageOnClick
  })

  var selectionId = chrome.contextMenus.create({
    "title": "Save selection to Web Clipper", 
    "contexts": ['selection'], 
    "onclick": selectionOnClick
  })

  var linkId = chrome.contextMenus.create({
    "title": "Save link to Web Clipper", 
    "contexts": ['link'], 
    "onclick": linkOnClick
  })

  var imageId = chrome.contextMenus.create({
    "title": "Save image to Web Clipper", 
    "contexts": ['image'], 
    "onclick": imageOnClick
  })

  // var videoId = chrome.contextMenus.create({
  //   "title": "Add video to your inspiration list", 
  //   "contexts": ['video'], 
  //   "onclick": videoOnClick
  // })

  var audioId = chrome.contextMenus.create({
    "title": "Save audio to Web Clipper", 
    "contexts": ['audio'], 
    "onclick": audioOnClick
  })
  

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
    console.log('changes', changes)
  }
});

