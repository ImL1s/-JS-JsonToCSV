
function setATagDownloadFile(alink,fileName,dataType,content){

    alink.download = fileName;
    alink.href = "data:"+ dataType,+content;
    
}

function setATagDownloadCSV(alink,fileName,content){

    alink.download = fileName;
    alink.href = "data:text/plain,"+content;
}

// 調用後瀏覽器將自動下載傳入的檔案
// fileName :下載顯示的文件名稱
// content :實際下載的內容
function downloadFileAuto(fileName,content){

    var aLink = document.createElement('a');
    aLink.innerHTML = 'ddd';
    // document.getElementsByTagName('body')[0].appendChild(aLink);
    var blob = new Blob([content]);
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
}