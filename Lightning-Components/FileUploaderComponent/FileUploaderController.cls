public class FileUploaderController {
	@AuraEnabled
    public static List<ContentDocumentLink> returnListofFiles(String parentId){
       return [Select id,ContentDocument.Title,
       ContentDocument.CreatedBy.Name,ContentDocument.CreatedDate,
       ContentDocument.LastModifiedBy.Name,ContentDocumentId FROM ContentDocumentLink 
       WHERE LinkedEntityId=: parentId ];
    }
}