using DocumentManagementSystem.Documents;

namespace DocumentManagementSystem.Factories
{
    public class ExcelDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new ExcelDocument();
        }
    }
}