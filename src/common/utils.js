var oConsole = document.getElementById('console');
var oList = oConsole.getElementsByTagName('ul')[0];
function fpLog(sMessage) {
  var oElement = document.createElement('li');
  oElement.appendChild(document.createTextNode('- ' + sMessage));
  oList.appendChild(oElement);
}
function fpLog2(sMessage) {
  var oElement = document.createElement('li');
  oElement.innerHTML = sMessage;
  oList.appendChild(oElement);
}
function clearConsole() {
    while(oList.hasChildNodes()) //当div下还存在最后的子节点时 循环继续
    {  
        oList.removeChild(oList.lastChild);  
    }  
}
window.oConsole = oConsole;
window.clearConsole = clearConsole;
window.fpLog = fpLog;
window.fpLog2 = fpLog2;

/*if (!window.console) {
  window.console = {};
  window.console.info = function(sMessage) {
    fpLog(sMessage);
  };
} else {
  if (window.console.log) {
    var fpConsoleLog = window.console.info;
    window.console.info = function(sMessage) {
      fpLog(sMessage);
      fpConsoleLog.call(window.console, sMessage);
    };
  }
}*/
