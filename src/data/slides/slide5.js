const slide5 = {
  id: 5,
  title: "Vector Embeddings",
  content: `## 🧩 Vector Embeddings: The Technical Foundation

![Vector Embedding Visualization](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop)

### How Embeddings Work

1. **Tokenization**: Documents are broken down into meaningful chunks
2. **Embedding Generation**: Text is converted to numerical vectors
3. **Dimensional Representation**: Each document exists in high-dimensional space
4. **Similarity Calculation**: Cosine similarity determines relevance

\`\`\`python
# Simplified representation of embedding process
embed_model = OpenAIEmbedding()  # Currently used in our system
document_vectors = embed_model.embed_documents(document_chunks)
query_vector = embed_model.embed_query(user_query)
\`\`\`
`
};

export default slide5; 