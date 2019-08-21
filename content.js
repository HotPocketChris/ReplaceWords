chrome.runtime.onMessage.addListener(function(request) {

    //decipher msg to get inputted words
    var firstStringLength = request[request.length - 1];
    firstStringLength = parseInt(firstStringLength, 10);

    var inputString = "";
    inputString = inputString.toString();
    var replaceString = "";
    replaceString = replaceString.toString();

    request = request.toString();

    //create the words
    for (let i = 0; i < request.length - 1; i++) {
        if (i < firstStringLength) {
            var concat1 = request[i];
            concat1 = concat1.toString();
            inputString = inputString.concat(concat1);
        } else {
            var concat2 = request[i];
            concat2 = concat2.toString();
            replaceString = replaceString.concat(concat2);
        }
    } 

    // search whole website document and replace words
    let paragraphs = document.getElementsByTagName('*');

    for (let i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].innerHTML.indexOf(inputString) !== -1) {

            var replacing = paragraphs[i].innerHTML;
            var res = replacing.replace(inputString, replaceString);
            paragraphs[i].innerHTML = res;
        }         
    }
})