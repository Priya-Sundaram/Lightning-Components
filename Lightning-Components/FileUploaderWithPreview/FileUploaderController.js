({
    init :function(cmp, event, helper){
    	var action = cmp.get("c.returnListofFiles");  
        action.setParams({parentId:cmp.get('v.recId')});
        action.setCallback(this,function(response){
            if(response.getState() === 'SUCCESS'){
                //console.log('Response '+JSON.stringify(response.getReturnValue()));
                cmp.set('v.filesList',response.getReturnValue());
            }    
        });
        $A.enqueueAction(action);
    },
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        window.location.reload();
    }
})