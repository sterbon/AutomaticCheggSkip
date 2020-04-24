function skipQues() {
    var activityTab = document.getElementsByClassName("sc-jTzLTM gKItAZ sc-jqCOkK gRVFSE sc-bbmXgH fGVldU")[0];
    activityTab.click();
    
    skipReason = document.getElementsByClassName('sc-jXQZqI dwrThn')[3].click();
    dropDown = getElementByXpath('//*[@id="root"]/section/section/div[2]/div/div/div[4]/div/div/div[1]/div/div/div/div').click();
    
    reason = getElementByXpath('//*[@id="root"]/section/section/div[2]/div/div/div[4]/div/div/div[1]/div/div/div/ul/li[9]').click();
    skipBtn = document.getElementsByClassName('sc-gZMcBi hyTroz')[2];
    skipBtn.click();
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

skipQues();