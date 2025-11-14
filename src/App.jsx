import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [step, setStep] = useState("landing");
  const [form, setForm] = useState({ idea: "", problem: "", audience: "" });
  const [result, setResult] = useState(null);

  const evaluateIdea = async () => {
    // TODO: Replace with Gemini API call
    const mock = `Your startup idea seems promising. Focus on user research and MVP development.`;
    setResult(mock);
    setStep("result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white">
      {step === "landing" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-xl"
        >
          <h1 className="text-4xl font-bold mb-4">Dream Big. Build Bold.</h1>
          <p className="text-lg mb-8 opacity-90">
            "Great startups start with great questions — not great answers."
          </p>
          <button
            onClick={() => setStep("form")}
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:opacity-90 transition"
          >
            Evaluate Your Startup Now
          </button>
        </motion.div>
      )}

      {step === "form" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Startup Evaluation Form</h2>

          <div className="flex flex-col gap-4">
            <input
              placeholder="Describe your startup idea"
              className="p-3 rounded-xl border"
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
            />
            <input
              placeholder="What problem does it solve?"
              className="p-3 rounded-xl border"
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
            />
            <input
              placeholder="Who's your target audience?"
              className="p-3 rounded-xl border"
              value={form.audience}
              onChange={(e) => setForm({ ...form, audience: e.target.value })}
            />

            <button
              onClick={evaluateIdea}
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition"
            >
              Submit for Evaluation
            </button>
          </div>
        </motion.div>
      )}

      {step === "result" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Your Evaluation</h2>
          <p className="mb-6 whitespace-pre-line">{result}</p>

          <button
            onClick={() => setStep("landing")}
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition"
          >
            Back to Home
          </button>
        </motion.div>
      )}
    </div>
  );
}
