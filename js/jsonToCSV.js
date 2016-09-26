var maxRowLength = 0;
var currentRowLength = 1;


// objArray :傳入的JSON數據
// rowLength:一列(Row)有幾個資料
function ConvertToCSV(objArray, rowLength) {
    var isObject = typeof objArray != 'object';
    var array = isObject ? JSON.parse(objArray) : objArray;
    var str = '';

    currentRowLength = 1;
    maxRowLength = rowLength;
    var temp = getTableContent(array);
    temp = temp.substring(0, temp.length - 3);

    return temp;
}

// 遞歸
function getTableContent(array) {

    var obj = array;
    var isArray = Array.isArray(obj);
    var isObject = (typeof obj == 'object');
    var line = '';

    if (!isArray && !isObject) {

        line += array;
        line += ',';

        if (currentRowLength == maxRowLength) {
            currentRowLength = 0;
            line += '\r\n';
        }

        currentRowLength++;


    } else {

        for (var content in array) {

            var temp = array[content];

            line += getTableContent(temp, content);
        }
    }




    return line;
}
