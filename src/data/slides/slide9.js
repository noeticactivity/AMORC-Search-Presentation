const slide9 = {
  id: 9,
  title: "Hybrid Search",
  content: `## 🧪 Hybrid Search: Best of Both Worlds

Our system can combine semantic understanding with keyword precision:

\`\`\`mermaid
graph TD
    A[User Query] --> B[Split Processing]
    B --> C[Semantic Search]
    B --> D[Keyword Search]
    C --> E[Vector Results]
    D --> F[BM25 Results]
    E --> G[Result Fusion]
    F --> G
    G --> H[Reranked Results]
\`\`\`

### Advantages of Hybrid Search

- Captures semantic meaning while preserving keyword relevance
- Improves recall (finding more relevant documents)
- Particularly effective for specialized terminology
- More robust against "vocabulary mismatch" problem
- Configurable weighting between semantic and keyword results
`
};

export default slide9; 