//When("she enters her credentials", function (){
//  throw new NotImplementedError();
//});
//
//Then("she is logged in successfully", function (){
//  throw new NotImplementedError();
//});
//
//When("they enter their credentials", function (){
//  throw new NotImplementedError();
//});
//
//Then("they are logged in successfully", function (param1){
//  throw new NotImplementedError();
//});
//
//When("she enters her credentials", function (){
//  throw new NotImplementedError();
//});
//
//Then("she is logged in successfully", function (){
//  throw new NotImplementedError();
//});
//
//When("they enter their credentials", function (){
//  throw new NotImplementedError();
//});
//
//Then("they are logged in successfully", function (param1){
//  throw new NotImplementedError();
//});




function SimplePurchase()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btFirefox).Run("http://smartbeardermot/shoppingcart/login.php");
  //Runs a keyword test.
  KeywordTests.Login.Run();
  //Runs a keyword test.
  //KeywordTests.PurchaseXbox.Run();
  //Runs a keyword test.
  KeywordTests.PurchaseBDPlayer.Run();
  //Runs a keyword test.
  KeywordTests.Checkout.Run();
  //Runs a keyword test.
  KeywordTests.Captcha.Run();
  //Runs a keyword test.
  KeywordTests.PurchaseLogout.Run();
  //Closes the browser page.
  Aliases.browser.pageSignUpLoginForm.Close();
   IssueTracking.CreateWorkItem("New WorkItem","Some Description","3 - Medium","TestComplete");
   Log.CreateIssueFromCurrentLog()
}