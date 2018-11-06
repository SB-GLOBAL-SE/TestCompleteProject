function Test2()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btFirefox).Run("http://smartbeardermot/shoppingcart/login.php");
  //Sets the text 'dermot@localhost' in the 'textboxLoginEmail' text editor.
  Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap.textboxLoginEmail.SetText("dermot@localhost");
  //Sets the text 'password' in the 'passwordboxLoginPassword' text editor.
  Aliases.browser.pageSignUpLoginForm.form.panelFieldWrap2.passwordboxLoginPassword.SetText("password");
  //Clicks the 'buttonLogIn' control.
  Aliases.browser.pageSignUpLoginForm.form.buttonLogIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageAwesomeShoppingStoreProducts.Wait();
  //Clicks the 'buttonAddToCart' button.
  Aliases.browser.pageAwesomeShoppingStoreProducts.buttonAddToCart.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageAwesomeShoppingStoreViewCart.Wait();
  //Clicks the 'textboxSubmit' button.
  Aliases.browser.pageAwesomeShoppingStoreViewCart.panelContainer.textboxSubmit.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageCheckout.Wait();
  //Clicks the 'buttonSecurePayOfflinePlaceOrder' button.
  Aliases.browser.pageCheckout.form.buttonSecurePayOfflinePlaceOrder.ClickButton();
  //Checks whether the 'Visible' property of the Aliases.browser.pageCheckout.formForm1.imageCaptchaimg object equals True.
  aqObject.CheckProperty(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg, "Visible", cmpEqual, true);
  //Check whether '*' matches the text optically recognized in the image Aliases.browser.pageCheckout.formForm1.imageCaptchaimg.
  OCR.Recognize(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg).CheckText("*");
  //Clicks at point (42, 10) of the 'textboxCaptchaCode' object.
  Aliases.browser.pageCheckout.formForm1.panelPanelBody.textboxCaptchaCode.Click(42, 10);
  //Sets the text 'd&tftx' in the 'textboxCaptchaCode' text editor.
  Aliases.browser.pageCheckout.formForm1.panelPanelBody.textboxCaptchaCode.SetText("d&tftx");
  //Clicks the 'buttonSecureCheckout' button.
  Aliases.browser.pageCheckout.formForm1.buttonSecureCheckout.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHttpSmartbeardermotShoppingc.Wait();
  //Clicks the 'Logout (current)' item of the 'navbarAwesomeShoppingStore' bar.
  Aliases.browser.pageHttpSmartbeardermotShoppingc.navbarAwesomeShoppingStore.ClickItem("Logout (current)");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSignUpLoginForm.Wait();
  //Closes the browser page.
  Aliases.browser.pageSignUpLoginForm.Close();
}