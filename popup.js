document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('searching').addEventListener('click',
  onclick, false)
  
  function onclick() {
    chrome.tabs.query({currentWindow: true, active: true},
      function (tabs) {
        //get inputted words by user
        var inputString = document.getElementById('searchWord').value;
        var replaceString = document.getElementById('replaceWord').value;
        inputString = inputString.toString();
        replaceString = replaceString.toString();

        //use length of first word to be replaced to decipher msg later
        var length = inputString.length;
        length = length.toString();
        var s = inputString.concat(replaceString, length);
        s = s.toString();

        chrome.tabs.sendMessage(tabs[0].id, s);
         
      })
  }
}, false)
