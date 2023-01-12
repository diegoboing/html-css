
// DOM is ready
$(function () {
	
  // Look if the app is running in the compiled executable
  dhc.isRuntime().then((isRuntime) => {

    // If we are not in runtime...
    if (!isRuntime) {
	  // ... just do not continue.
      return false;
    }

    // Inform to the user about this sample and what is suppose to be done.
    document.getElementById('runtime-text').innerHTML = 
     'Now yes! Change the window position and the size, then close the app and open it again.';
   
    // Loook if we previously save the app_size.json file
    dhc.files.fileExists({
      filePath: 'app_size.json'
    }).then((result) => {
	  
      // If the app_size.json file exists...
      if (result) {
		
  	    // Get the contents of the app_size.json file.
        $.get({
          url: 'app_size.json', 
          cache: false
        }).then(function(contents){ 
	  
	      // If we previously save the app maximized, just maximize the app window.
          if (contents.state === 'maximized') {
            dhc.window.setState({"state": "maximized"});
          } else {
		    // In other case, just set the size of the app window.
            dhc.window.setSize(contents).then((result) => {});
          }
       });
      } else {
        //alert('The my_text_file.txt file do not exist.');
      }
    },
    (error) => {
      alert('An error occur while read the app_size.json file: ' + error);
    });	   
  });	
});

// This event is fired when the app window will be close.
dhc.events.onCloseQuery = function () {

  // Get the size of the app window.
  dhc.window.getSize().then((size) => {

    // Get also the state of the app window.
    dhc.window.getState().then((state) => {
   
      // Add the state the object in which we get the app window size.
      size.state = state;
   
      // Save the size object (as a JSON string) in the app_size.json file.
      dhc.files.writeTextFile({
        filePath: 'app_size.json',
        contents: JSON.stringify(size)
      }).then(() => {
		  
		// And then let the app to be closed.
		dhc.app.close();  
      },
      (error) => {
        alert('An error occur while saved the app_size.json file: ' + error);
		dhc.app.close();
      });
    });
  });
};