const slide7 = {
  id: 7,
  title: "Search Technologies",
  content: `## 🔎 Search Technologies: Finding the Right Knowledge

Our system employs sophisticated search strategies to find the most relevant Rosicrucian teachings for each query:

![Search Technologies](https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop)

### 📍 K-Nearest Neighbors (KNN) Search

\`\`\`mermaid
graph TD
    A[Query Vector] --> B[Vector Space]
    B --> C{Distance Calculation}
    C --> D[Euclidean Distance]
    C --> E[Cosine Similarity]
    C --> F[Dot Product]
    D --> G[Rank by Distance]
    E --> G
    F --> G
    G --> H[Return K Nearest Documents]
\`\`\`

We typically use K=15 to retrieve the most similar documents from our knowledge base.
`
};

export default slide7; 