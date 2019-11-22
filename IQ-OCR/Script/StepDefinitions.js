//USEUNIT Personas

Given("{arg} is a registered user", function (FirstName){
  //throw new NotImplementedError();
  const testPersona = Persona(FirstName)
    Log.Message("enters creds:", testPersona.username );
});

When("^.*enter.* credentials$", function (){
  Log.Message("enters creds:", testPersona.username );
});

Then("^.* logged in successfully$", function (param1){
  Log.Message("Logged In Step", testPersona.firstname);
  //throw new NotImplementedError();
});

Given("{arg} is logged in", function (FirstName){
  throw new NotImplementedError();
});

When("they purchase their {arg}", function (Product){
  throw new NotImplementedError();
});

When("they check out", function (){
  throw new NotImplementedError();
});

Then("the purchase is successful", function (param1){
  throw new NotImplementedError();
});

Given("I have values", function (){
  Log.Message("I have values");
});

When("I execute the scenario", function (){
   Log.Message("I execute my scenario");
});

Then("the value {arg} and {arg} is echoed to the log", function (param1, param2, param3){
  if ( param1 === "Cariad" ) { Log.Error("We errored") } else { Log.Message("Params: " + param1 + " " + param2 )};
//  Log.Message("Params", param1, param2, param3);
});

Given("The Registration form is open", function (){
  Log.Message("In 'Given'");
});

When("I enter {arg}, {arg}, {arg}, {arg}", function (param1, param2, param3, param4){
  Log.Message("In 'When': " + param1 + ", " + param2 + ", " + param3 + ", " + param4);
});

Then("I should see the {arg} message on screen", function (param1){
  Log.Message("In 'Then': " + param1);
});

Given("I can open the site", function (){
  if ((Sys.WaitBrowser().Exists)){
     Browsers.Item(btFirefox).Navigate("http://smartbeardermot/shoppingcart/login.php"); 
    } else { Browsers.Item(btFirefox).Run("http://smartbeardermot/shoppingcart/login.php");  
    }
});

When("I login with {arg} and {arg}", function (param1, param2){
  let browser = Aliases.browser;
  let form = browser.pageSignUpLoginForm.form;
  let textbox = form.panelFieldWrap.textboxLoginEmail;
  textbox.SetText(param1);
  form.panelFieldWrap2.passwordboxLoginPassword.SetText(param2);
  form.buttonLogIn.ClickButton();
  browser.pageAwesomeShoppingStoreProducts.Wait();
});

Then("the value {arg} is visible on the page", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageAwesomeShoppingStoreProducts.textnodeDisplay4, "contentText", cmpContains, param1, false);
  let browser = Aliases.browser;
  browser.pageAwesomeShoppingStoreProducts.navbarAwesomeShoppingStore.ClickItem("Logout (current)");
});
