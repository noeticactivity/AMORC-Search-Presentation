const slide12 = {
  id: 12,
  title: "The Math Behind the Magic",
  content: `## 🧮 The Math Behind the Magic: Beyond AI

An important insight about our system: the fundamental search technology is primarily mathematics, not artificial intelligence.

![Vector Math Diagram](https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop)

### 📐 Vector Similarity: Pure Mathematics

At its core, the "intelligence" in our semantic search comes from:

1. **Vector Transformations**: Converting text to numbers using embedding models
2. **Linear Algebra**: Computing distances in high-dimensional spaces
3. **Statistical Analysis**: Ranking documents by numerical similarity scores

\`\`\`python
# The essence of semantic search is mathematical vector operations
def cosine_similarity(vec_a, vec_b):
    # Dot product of two vectors
    dot_product = sum(a * b for a, b in zip(vec_a, vec_b))
    
    # Magnitudes of vectors
    magnitude_a = math.sqrt(sum(a * a for a in vec_a))
    magnitude_b = math.sqrt(sum(b * b for b in vec_b))
    
    # Cosine similarity formula
    return dot_product / (magnitude_a * magnitude_b)
\`\`\`
`
};

export default slide12; 