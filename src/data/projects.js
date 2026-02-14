export const projects = [
  {
    id: 'crisp-stock-prediction',
    title: 'CRISP: Contextual Risk-Invariant Stock Prediction Engine',
    description: 'Stock prediction engine using Invariant Risk Minimization achieving 30%+ improvement over ERM baselines',
    category: 'ml-ai',
    thumbnail: '/images/projects/crisp.png',
    techStack: ['Python', 'PyTorch', 'Time Series', 'IRM', 'Statistical ML'],
    featured: true,

    problem: `Standard machine learning models often fail to generalize across market shifts because they learn spurious correlations instead of causal features. Traditional Empirical Risk Minimization (ERM) approaches struggle when the distribution of data changes significantly, such as during different market conditions.

The challenge was to build a stock prediction system that could maintain performance across various market regimes - high volatility periods, different time windows, and changing market trends. This required moving beyond traditional approaches and implementing causality-aware machine learning.`,

    approach: `Built a prediction engine leveraging Invariant Risk Minimization (IRM), a technique that encourages models to learn causal relationships rather than spurious correlations. The key innovation was creating multiple training environments that represent different market conditions:

1. **Multi-Environment Design**: Formulated distinct environments based on time periods, volatility levels, and trend regimes to expose the model to various market conditions during training
2. **Causal Feature Learning**: Implemented IRM's penalty term to ensure the model learns features that are predictive across all environments, not just correlations specific to one regime
3. **Robust Evaluation**: Designed comprehensive out-of-distribution (OOD) testing scenarios to validate the model's generalization capabilities under realistic market shifts

The technical implementation involved custom loss functions, careful environment partitioning strategies, and extensive hyperparameter tuning to balance the IRM penalty with prediction accuracy.`,

    results: `Achieved 30%+ improvement over traditional ERM baselines on out-of-distribution test sets, demonstrating superior generalization across market shifts. The model successfully suppressed spurious correlations and learned causal features that remained predictive across different market regimes.

Key learnings: The importance of environment design in IRM - how we partition the training data into environments significantly impacts what causal features the model learns. Also discovered that while IRM improves OOD generalization, it requires careful balancing to avoid overly conservative predictions.`,

    github: null,
    demo: null,
    blog: null,
  },
  {
    id: 'peermatch-gnn',
    title: 'PeerMatch: Peer Recommendation with GNN',
    description: 'GraphSAGE-based peer recommendation system achieving 98.4% ROC-AUC through relational modeling',
    category: 'ml-ai',
    thumbnail: '/images/projects/peermatch.png',
    techStack: ['Python', 'PyTorch', 'GraphSAGE', 'GNN', 'Deep Learning'],
    featured: true,

    problem: `Traditional recommendation systems often ignore the complex relational structure between users, treating recommendations as isolated prediction tasks. In educational settings, finding compatible peers for collaboration requires understanding not just individual profiles, but the network of interactions, skill complementarity, and engagement patterns.

The challenge was to build a system that could recommend study partners by modeling the entire student interaction graph, handling class imbalance (most pairs are not good matches), and ensuring well-calibrated probability outputs for decision-making.`,

    approach: `Implemented a GraphSAGE-based graph neural network that models students as nodes and their interactions as edges, learning rich representations that capture both individual features and network structure:

1. **Relational Modeling**: Used GraphSAGE's neighborhood aggregation to learn student embeddings that incorporate information from their local graph structure
2. **Complementarity Scoring**: Designed a custom scoring function that considers skill diversity, engagement pattern alignment, and temporal compatibility rather than just similarity
3. **Handling Class Imbalance**: Integrated focal loss to address the 15% class imbalance, implemented hard negative mining to help the model learn discriminative features, and applied temperature scaling for probability calibration

The architecture involved multi-layer graph convolutions, attention mechanisms for neighbor aggregation, and careful feature engineering to represent student skills and behaviors.`,

    results: `Achieved 98.4% ROC-AUC, demonstrating excellent ranking ability for peer recommendations. The focal loss and hard negative mining successfully addressed the class imbalance, while temperature scaling ensured the predicted probabilities were well-calibrated for practical use.

Key learnings: Graph structure matters significantly - incorporating the relational context improved performance substantially over traditional collaborative filtering. Also learned the importance of probability calibration in recommendation systems, where the actual probability values (not just rankings) inform user decisions.`,

    github: null,
    demo: null,
    blog: null,
  },
  {
    id: 'narrative-surprise-llm',
    title: 'Measuring Narrative Surprise with LLMs',
    description: 'NLP pipeline using GPT-5 and RoBERTa-MNLI to identify plot twists with semantic divergence detection',
    category: 'ml-ai',
    thumbnail: '/images/projects/narrative.png',
    techStack: ['Python', 'GPT-5', 'RoBERTa', 'MNLI', 'NLP', 'Embeddings'],
    featured: true,

    problem: `Identifying narrative surprise or plot twists in stories is a challenging task that requires understanding both what readers expect to happen and what actually occurs. Traditional NLP approaches struggle with the nuanced, contextual nature of narrative expectations and the subjective quality of "surprise."

The challenge was to build an automated system that could read stories, predict future events based on context, and identify moments where the narrative significantly deviates from expectations - essentially mimicking how human readers experience plot twists.`,

    approach: `Designed an end-to-end pipeline that combines large language model predictions with semantic similarity analysis:

1. **Incremental Prediction**: Chunked stories into segments and used GPT-5 to predict future narrative events after each chunk, simulating reader expectations at each point
2. **Dual Detection Method**: Combined embedding-based semantic divergence (measuring how different the actual continuation is from predictions) with RoBERTa-MNLI contradiction detection (identifying logical contradictions between predictions and reality)
3. **Contextual Processing**: Implemented chunking and recap pipelines to handle long narratives while maintaining context across predictions

Processed 200+ stories with careful prompt engineering to ensure GPT-5 generated meaningful predictions, and tuned similarity thresholds to distinguish significant surprises from normal narrative variation.`,

    results: `Achieved strong alignment with human-annotated twist events across the test set, successfully identifying major plot twists while avoiding false positives on routine narrative developments. The dual-method approach (semantic divergence + contradiction detection) proved more robust than either method alone.

Key learnings: LLMs can effectively model narrative expectations, but combining semantic similarity with logical contradiction detection provides more reliable surprise detection. Also discovered that recap mechanisms are crucial for maintaining coherent predictions in longer narratives.`,

    github: null,
    demo: null,
    blog: null,
  },
  {
    id: 'crop-recommendation',
    title: 'Crop Recommendation using Hybrid Optimization',
    description: 'ML pipeline using satellite imagery achieving 96% accuracy for precision farming recommendations',
    category: 'data-science',
    thumbnail: '/images/projects/crop.png',
    techStack: ['Python', 'Satellite Imagery', 'ANN', 'Optimization', 'scikit-learn'],
    featured: true,

    problem: `Small-scale farmers in rural India often lack access to data-driven insights for crop selection, leading to suboptimal yields and economic losses. Traditional crop recommendation relies on generic regional advice rather than field-specific conditions.

The challenge was to build a system that could analyze satellite imagery and environmental data to provide personalized crop recommendations for individual farms, while achieving high accuracy across different seasonal crops and varying soil/climate conditions.`,

    approach: `Built an end-to-end machine learning pipeline combining remote sensing with nature-inspired optimization:

1. **Feature Engineering**: Extracted soil and climate features from Landsat-8 satellite imagery and county-level agricultural data, creating rich representations of field conditions
2. **Hybrid Optimization**: Engineered a nature-based hybrid optimization algorithm (EEFO-CPO) combining Enhanced Elephant Herding Optimization with Crested Porcupine Optimizer to fine-tune artificial neural network weights, exploring the solution space more effectively than standard gradient descent
3. **Model Development**: Trained ANN models for seasonal crop classification, optimizing architecture and hyperparameters for accuracy across diverse conditions

Compared performance against SVM, Random Forest, and other baselines to validate the hybrid optimization approach.`,

    results: `Achieved 96% accuracy for seasonal crop recommendations, outperforming SVM, Random Forest, and other baseline methods. The hybrid optimization algorithm (EEFO-CPO) successfully found better neural network weight configurations than traditional training approaches.

Key learnings: Satellite imagery provides valuable signals for precision agriculture when properly processed. Nature-inspired optimization can complement gradient-based training, especially for non-convex ANN optimization. The system's success demonstrated feasibility of scalable, data-driven crop recommendations for resource-constrained farmers.`,

    github: null,
    demo: null,
    blog: null,
  },
];
