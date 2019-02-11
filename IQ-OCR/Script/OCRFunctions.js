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


function IFimage1()
{
  var TimeoutValue;

  //Runs the "iexplore" tested application.
  TestedApps.iexplore.Run(1,false)
  TimeoutValue = Options.Run.Timeout;
  Options.Run.Timeout = 5000;
  //Returns whether the search area contains this image.
  //LastResult = ImageRepository.ImageSet1.UserName_PreSet_Check.Exists(Aliases.iexplore.wndIEFrame.FrameTab.TabWindowClass.ShellDocObjectView.InternetExplorerServer);
  if(ImageRepository.ImageSet1.IAmNot2.Exists(Aliases.iexplore.wndIEFrame.FrameTab.TabWindowClass.ShellDocObjectView.InternetExplorerServer))
  //{
    //Simulates a single click with the left mouse button on the UI element specified by this image within the search area.
    ImageRepository.ImageSet1.IAmNot2.Click(-1, -1, skNoShift, Aliases.iexplore.wndIEFrame.FrameTab.TabWindowClass.ShellDocObjectView.InternetExplorerServer);
  //}
  Options.Run.Timeout = TimeoutValue;
}  
