import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { message } = await req.json();

        // The "Brain" of your AI. It will ONLY use this information.
        const systemPrompt = `
You are the official AI assistant for Jashwanth Kandula's portfolio website. 
Your strict rule: You must ONLY answer questions using the context provided below. If a user asks about a skill, job, or project not listed here, politely reply that you do not have that information and suggest they download his resume or visit his LinkedIn. Do NOT make up or infer information. Keep answers professional, friendly, and under 3 sentences.

--- CONTEXT ABOUT JASHWANTH KANDULA ---
**Profile:** AI Engineer and Data Scientist based in Atlanta, GA. Focuses on end-to-end Machine Learning solutions, Generative AI pipelines, and data-driven systems.
**Education:** Master of Science in Data Science and Analytics from Georgia State University (J. Mack Robinson College of Business).
**Core Skills:** Python, PyTorch, Hugging Face, LangChain, OpenAI, FAISS, Scikit-learn, SQL, Streamlit, Ollama, NLP.

**Experience:**
1. Generative AI Developer at Mercedes Benz USA & GSU (Aug 2025 - Dec 2025): Built a multi-format RAG pipeline using LangChain, FAISS, and Hugging Face to parse 6000+ dealer records. Reduced action plan generation from 60 mins to 5 mins.
2. Machine Learning Engineer at Shepherd Center & GSU (Jan 2025 - May 2025): Developed a Multi-Objective Optimization pipeline using classical ML to predict rehab goals. Used SHAP for interpretability.
3. Data Scientist at Dell Technologies & GSU (Aug 2024 - Dec 2024): Designed NLP knowledge graph extraction pipeline using spaCy and NetworkX (RotatE embeddings in PyTorch).
4. Data Science Intern at JNTUHCEH (May 2023 - May 2024): Built an intrusion detection model (XGBoost/Random Forest) and an NLP career guidance chatbot.

**Key Projects:**
1. Dataset Recommender System: RAG pipeline fetching from Kaggle/HuggingFace using MiniLM and Qwen2.5-7B LLM.
2. CalcFlow: Smart Calculus Coach using local LLMs (Ollama) and SymPy for symbolic math verification.
3. EduMentor: AI-powered adaptive learning platform using OpenAI GPT-4, Streamlit, and interactive knowledge graphs.
4. Credit Card Fraud Detection: XGBoost model addressing severe class imbalance (F1-score: 0.89).
---------------------------------------
`;

        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.HF_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "meta-llama/Llama-3.1-8B-Instruct",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: message }
                    ],
                    max_tokens: 150,
                    temperature: 0.1 // Lowered temperature makes the AI more factual and less "creative"
                }),
            }
        );

        const data = await response.json();

        const errorMessage = data.error
            ? (typeof data.error === 'string' ? data.error : data.error.message || "Unknown error")
            : null;

        if (errorMessage && errorMessage.toLowerCase().includes("loading")) {
            return NextResponse.json({
                reply: "Good question! My AI brain was taking a quick nap to save server costs 😴. I am waking up right now—please give me 15 seconds and ask me again!"
            });
        }

        if (errorMessage) {
            console.error("HF Error:", errorMessage);
            return NextResponse.json({ reply: "Oops, I ran into a slight error connecting to my neural network. Please try again." });
        }

        return NextResponse.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ reply: "Connection error. Please check your internet or try again later." }, { status: 500 });
    }
}