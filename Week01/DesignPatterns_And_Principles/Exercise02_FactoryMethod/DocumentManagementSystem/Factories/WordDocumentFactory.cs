using DocumentManagementSystem.Documents;

namespace DocumentManagementSystem.Factories
{
    public class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument()
        {
            return new WordDocument();
        }
    }
}