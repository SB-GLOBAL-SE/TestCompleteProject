//USEUNIT OCRFunctions
function Captch()
{
  var NewVariable, LastResult;
  NewVariable = "";
  //Checks whether the 'Visible' property of the Aliases.browser.pageCheckout.formForm1.imageCaptchaimg object equals True.
  aqObject.CheckProperty(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg, "Visible", cmpEqual, true);
  //Runs a script routine.
  LastResult = getCheckoutCaptchaText();
  Project.Variables.CaptchaText = LastResult;
  //Posts an information message to the test log.
  Log.Message("Project Variable Captcha Text = " + Project.Variables.CaptchaText, "");
  //Sets the text Project.Variables.CaptchaText in the 'textboxCaptchaCode' text editor.
  Aliases.browser.pageCheckout.formForm1.panelPanelBody.textboxCaptchaCode.SetText(Project.Variables.CaptchaText);
  //Clicks at point (42, 10) of the 'textboxCaptchaCode' object.
  Aliases.browser.pageCheckout.formForm1.panelPanelBody.textboxCaptchaCode.Click(42, 10);
  //Clicks the 'buttonSecureCheckout' button.
  Aliases.browser.pageCheckout.formForm1.buttonSecureCheckout.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHttpSmartbeardermotShoppingc.Wait();
}

function Test1()
{
  Browsers.Item(btFirefox).Navigate("http://smartbeardermot/shoppingcart/login.php");
  let page = Aliases.browser.pageSignUpLoginForm;
  let form = page.form;
  let textbox = form.panelFieldWrap.textboxLoginEmail;
  textbox.SetText("dermot@localhost");
  let passwordBox = form.panelFieldWrap2.passwordboxLoginPassword;
  passwordBox.SetText("password");
  passwordBox.Keys("[Enter]");
  let page2 = Aliases.browser.pageAwesomeShoppingStoreProducts;
  page2.Wait();
  aqObject.CheckProperty(Aliases.browser.pageAwesomeShoppingStoreProducts.textnodeDisplay4, "contentText", cmpContains, "Hello", false);
  
  
  page2.navbarAwesomeShoppingStore.ClickItem("Logout (current)");
  page.Wait();
  wndMozillaDialogClass.BrowserWindow.Close();
  Browsers.Item(btFirefox).Run("about:blank");
}

function Test2()
{
  Aliases.explorer.wndShell_TrayWnd.Start.Click(17, 64);
  let notepad = Aliases.notepad;
  let wndNotepad = notepad.wndNotepad;
  let edit = wndNotepad.Edit;
  edit.Click(188, 324);
  edit.Keys("testComplete[Enter]");
  wndNotepad.MainMenu.Click("Format|Font...");
  let dlgFont = notepad.dlgFont;
  dlgFont.cbxSize.ClickItem("20");
  dlgFont.btnOK.ClickButton();
}