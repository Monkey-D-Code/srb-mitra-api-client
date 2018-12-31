const PostRequest = ((url,data , callback)=>{
                        
                        
    // SEND AJAX REQUEST TO THE PASSEED URL
    $.ajax({
          type: 'POST',
          url: url,
          cache: false,
          crossDomain: true,
          headers: {
    
                "Authorization":'Token 4ce5e5530d2b8ed250894448b060017c27e85be9',
            },
          data: data,
          
          async:true
      }).done((response)=>{
          
          callback(response);
          
      }).fail((jqXHR,exception)=>{
            
            let msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            
            callback(msg);
    });
    
});


const GetRequest = ((url , callback)=>{
    
   
    
    // SEND AJAX REQUEST TO THE PASSEED URL
    $.ajax({
          type: 'GET',
          url: url,
          cache: false,
          crossDomain: true,
          headers: {
                "Content-Type":"application/json",
                
            },
          async:true,
      }).done((response)=>{
          
          callback(response);
          
      }).fail((jqXHR,exception)=>{
            
            let msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            
            callback(msg);
    });
    
 

    
});
