
function isInstalled()
{
//  var installedScript = "C:\\temp\\installed.ps1";
  var installedScript = Project.Variables.PowershellPath;
  var oShell = Sys.OleObject("WScript.Shell"); // Or oShell = WshShell
  var oExec = oShell.Exec("powershell -command " + installedScript);
  oExec.StdIn.Close(); // Close standard input before reading output

  // Get PowerShell output
  var strOutput = oExec.StdOut.ReadAll();
  // Trim leading and trailing empty lines
  strOutput = aqString.Trim(strOutput, aqString.stAll);
    if ( strOutput.match("NOT") ) { Log.Message("Not installed") ; return 1 } else { Log.Message("Installed") ; return 0 };
}