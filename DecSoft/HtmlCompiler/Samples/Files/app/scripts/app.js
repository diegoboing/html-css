
$(function () {

  $('#write-file-in-root-button').on('click', function () {
  
    dhc.files.writeTextFile({
      filePath: 'my_text_file.txt',
      contents: $('#input-textarea').val()
    }).then(() => {
       alert('The file has been written!');   
    },
    (error) => {
      alert('An error occur: ' + error);
    });	 
  });
  
  $('#write-file-in-subfolder-button').on('click', function () {
  
    dhc.files.writeTextFile({
      filePath: 'my_subfolder/my_text_file.txt',
      contents: $('#input-textarea').val()
    }).then(() => {
      alert('The file has been written!');   
    },
    (error) => {
      alert('An error occur: ' + error);
    });	 
  });
  
  $('#read-file-in-root-button').on('click', function () {
  
    dhc.files.fileExists({
      filePath: 'my_text_file.txt'
    }).then((result) => {
      if (result) {
        // In DecSoft HTML Compiler apps we can use AJAX requests to read local app files:
        $.get('my_text_file.txt', function (contents) {
          $('#input-textarea').val(contents);
        });		   
  	  } else {
  	    alert('The my_text_file.txt file do not exist.');
  	  }
    },
    (error) => {
      alert('An error occur: ' + error);
    });	 	 
  });
  
  $('#read-file-in-subfolder-button').on('click', function () {
    dhc.files.fileExists({
      filePath: 'my_subfolder/my_text_file.txt'
    }).then((result) => {
      if (result) {
        $.get('my_subfolder/my_text_file.txt', function (contents) {
          $('#input-textarea').val(contents);
        });		   
  	  } else {
  	    alert('The my_text_file.txt file do not exist.');
  	  }
    },
    (error) => {
      alert('An error occur: ' + error);
    });	
  });	 
  
  $('#delete-file-in-root-button').on('click', function () {
  
    dhc.files.fileExists({
      filePath: 'my_text_file.txt'
    }).then((result) => {
      if (result) {
        dhc.files.deleteFile({
          filePath: 'my_text_file.txt'
        }).then((result) => {
          if (result) {
            alert('The file has been deleted!');		   
     	  } else {
  		    alert('The file cannot be deleted!');
  		  }
        },
        (error) => {
          alert('An error occur while delete the file: ' + error);
        });
  	  } else {
  	    alert('The my_text_file.txt file do not exist.');
  	  }
    },
    (error) => {
      alert('An error occur while check if the file exists: ' + error);
    });	 	 
  });	 
  
  $('#delete-file-in-subfolder-button').on('click', function () {
  
    dhc.files.fileExists({
      filePath: 'my_subfolder/my_text_file.txt'
    }).then((result) => {
      if (result) {
        dhc.files.deleteFile({
          filePath: 'my_subfolder/my_text_file.txt'
        }).then((result) => {
          if (result) {
            alert('The file has been deleted!');		   
     	  } else {
  		    alert('The file cannot be deleted!');
  		  }
        },
        (error) => {
          alert('An error occur while delete the file: ' + error);
        });
  	  } else {
  	    alert('The my_text_file.txt file do not exist.');
  	  }
    },
    (error) => {
      alert('An error occur while check if the file exists: ' + error);
    });	 	 
  });		 
  
  $('#delete-dir-button').on('click', function () {
  
    dhc.folders.dirExists({
      dirPath: 'my_subfolder'
    }).then((result) => {
      if (result) {
        dhc.folders.deleteDir({
          dirPath: 'my_subfolder'
        }).then((result) => {
          if (result) {
            alert('The directory has been deleted!');		   
     	  } else {
  		    alert('The directory cannot be deleted!');
  		  }
        },
        (error) => {
          alert('An error occur while delete the directory: ' + error);
        });
  	  } else {
  	    alert('my_subfolder directory do not exist.');
  	  }
    },
    (error) => {
      alert('An error occur while check if the directory exists: ' + error);
    });	 	 
  }); 
  
  $('#open-text-file-button').on('click', function () {
	  
    dhc.dialogs.openFile({
      title: 'Open a text file',
	  fileName: 'my_text_file.txt',	  
      fileTypes: 'Text files|*.txt'	  
	}).then((filePath) => {
	  if (filePath !== '') {
	    alert('You choose the file path: ' + filePath);	
      } 
	});	    
  });
  
  $('#save-text-file-button').on('click', function () {
	  
    dhc.dialogs.saveFile({
      title: 'Save a text file',
	  fileName: 'my_text_file.txt',
      fileTypes: 'Text files|*.txt',
      overwritePrompt: true	  
	}).then((filePath) => {
	  if (filePath !== '') {	
        dhc.files.writeTextFile({
          filePath: filePath,
          contents: $('#input-textarea').val()
        }).then(() => {
          alert('The file has been saved!');   
        },
        (error) => {
          alert('An error occur: ' + error);
        });	
	  }
	});	    
  });  
  
  $('#get-temp-dir-button').on('click', function () {
  
    dhc.folders.getTempDir().then((dirPath) => {
      alert('Here is the temporal directory path: ' + dirPath);   
    });	 
  });
  
  $('#get-user-desktop-dir-button').on('click', function () {
  
    dhc.folders.getUserDesktopDir().then((dirPath) => {
      alert('Here is the user desktop directory path: ' + dirPath);   
    });	 
  });  

  $('#get-user-documents-dir-button').on('click', function () {
  
    dhc.folders.getUserDocumentsDir().then((dirPath) => {
      alert('Here is the user documents directory path: ' + dirPath);   
    });	 
  });
  
  $('#get-app-data-dir-button').on('click', function () {
  
    dhc.folders.getAppDataDir().then((dirPath) => {
      alert('Here is the app data directory path: ' + dirPath);   
    });	 
  });  
   
});
   