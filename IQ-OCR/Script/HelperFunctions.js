function CloseBrowser()
{
  //Closes the browser page.
  Aliases.browser.pageSignUpLoginForm.Close();
}

function ChromeSavePasswordHandler(Sender, Window, LogParams)
{
  //Checks whether the Chrome browser is currently being used for testing.
  if((Browsers.CurrentBrowser.Family == btChrome))
    if(Aliases.browser.wndChrome_WidgetWin_1.Visible)
    {
      //Closes the 'wndChrome_WidgetWin_1' window.
      Aliases.browser.wndChrome_WidgetWin_1.Close();
    }
}

function EventControl1_OnOverlappingWindow(Sender, Window, OverlappingWindow, LogParams)
{
  
}