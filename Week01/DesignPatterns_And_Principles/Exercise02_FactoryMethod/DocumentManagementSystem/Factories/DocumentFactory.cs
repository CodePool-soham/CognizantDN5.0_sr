using DocumentManagementSystem.Documents;

namespace DocumentManagementSystem.Factories
{
    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();
    }
}