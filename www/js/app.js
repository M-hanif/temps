document.addEventListener("deviceready", onDeviceReady, false);


    function onDeviceReady()
    {
        // Add event listener to the back button
        document.addEventListener("backbutton", backButtonHandler, false);
    }
    
    function backButtonHandler(e )
   {
	   alert("hellooooo");
if( $("#homepageLanding").length > 0 )
      {
         // Code to exit app
         navigator.app.exitApp();
      }
      else
      {
        // Code to navigate to the history action
         navigator.app.backHistory();
      }
}