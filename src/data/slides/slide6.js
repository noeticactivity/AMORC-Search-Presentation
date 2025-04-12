const slide6 = {
  id: 6,
  title: "Vector Database",
  content: `## 📊 Vector Database: Chroma

Our system leverages Chroma DB for efficient vector storage and retrieval:

![Chroma Vector Store](https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1000&auto=format&fit=crop)

### Why Chroma?

- Designed specifically for embeddings and semantic search
- Extremely fast for large document collections
- Simple API with Python integration
- Supports complex filtering and metadata queries

\`\`\`python
# Chroma implementation (simplified)
chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection = chroma_client.get_or_create_collection("rosicrucian")
vector_store = ChromaVectorStore(chroma_collection=collection)
\`\`\`
`
};

export default slide6; 