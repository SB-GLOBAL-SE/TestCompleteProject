function getOrderID()
{
  var OCRText = OCR.Recognize(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg).FullText ;
  Log.Message(OCRText);
  if ( OCRText === ""){
     Log.Error("Can't get Text from Captcha Image"); return false }
     else {
       Log.Checkpoint("Extracted Text From Captcha Image" + OCRText ); return OCRText } 
}

function RandomizedValue()
{
  var min = 1, max = 9999999;
      return Math.round(Math.random()*(max-min)+min);  

}