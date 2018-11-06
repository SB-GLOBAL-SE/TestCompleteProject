function VerifyRecognizedText(textToMatch, textToCheck)
{
  var blockText = OCR.Recognize(Aliases.AcroRd32.wndAcrobatSDIWindow.AVFlipContainerView.AVDocumentMainView.AVFlipContainerView.AVSplitterView.AVSplitationPageView.AVSplitterView.AVScrolledPageView.AVScrollView.AVPageView);
  var matchedText = blockText.BlockByText(textToMatch, spLeftMost).Text;

  if ( matchedText.trim === textToCheck.trim ){
    Log.Checkpoint("String Matched on Document"); return true } 
  else {
    Log.Error("String Doesn't Match Document"); return false }
}

function getCaptchaText()
{
  var OCRText = OCR.Recognize(Aliases.browser.pageCheckout.formForm1.imageCaptchaimg).FullText ;
  Log.Message(OCRText);
  if ( OCRText === ""){
     Log.Error("Can't get Text from Captcha Image"); return false }
     else {
       Log.Checkpoint("Extracted Text From Captcha Image" + OCRText ); return OCRText } 
}