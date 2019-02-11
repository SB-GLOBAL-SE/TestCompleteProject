function getOrderID()
{
  var OCRText = OCR.Recognize(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg).FullText ;
  Log.Message(OCRText);
  if ( OCRText === ""){
     Log.Error("Can't get Text from Captcha Image"); return false }
     else {
       Log.Checkpoint("Extracted Text From Captcha Image" + OCRText ); return OCRText } 
}