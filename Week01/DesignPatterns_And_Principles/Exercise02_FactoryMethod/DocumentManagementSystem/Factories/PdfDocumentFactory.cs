using DocumentManagementSystem.Documents;

namespace DocumentManagementSystem.Factories
{
    public class PdfDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new PdfDocument();
        }
    }
}