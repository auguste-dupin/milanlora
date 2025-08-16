import Link from "next/link";
import CaseChart from "@/components/CaseChart";

export const metadata = {
  title: "Positive EV MLB Model — Milán Lora",
  description: "Case study for a machine learning model that identifies profitable betting opportunities in MLB markets."
};

export default function CaseStudy() {
  return (
    <div className="container py-12 md:py-24">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <Link href="/work" className="text-sm text-accent hover:text-accent mb-2 block">← Back to Work</Link>
        <h1 className="h1">Positive EV MLB Model</h1>
        <p className="lede mt-2">A machine learning model to find and exploit pricing inefficiencies in Major League Baseball moneyline markets.</p>
      </header>

      <main className="grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="h2 mb-3">Problem</h2>
            <p className="text-zinc-300 leading-relaxed">
              Sports betting markets are competitive and noisy. Identifying consistent, profitable opportunities (positive expected value, or +EV) requires a systematic approach that can parse complex data signals, from player performance to market odds movement, without succumbing to common biases.
            </p>
          </section>
          <section>
            <h2 className="h2 mb-3">Approach</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The approach involved building a feature-rich dataset from multiple sources, including historical game data and odds. Key steps included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li><strong>Feature Engineering:</strong> Created rolling averages, situational stats, and odds-implied metrics.</li>
              <li><strong>Labeling:</strong> Used a triple-barrier method to define outcomes (win, loss, no bet) based on whether odds were beaten, creating a more robust target than simple win/loss.</li>
              <li><strong>Modeling:</strong> Trained an XGBoost model to predict the probability of beating the closing line odds, a proxy for profitable bets.</li>
              <li><strong>Policy:</strong> Implemented a fractional Kelly criterion policy for bankroll management to optimize bet sizing based on the model's confidence.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="h2 mb-3">Outcome</h2>
            <p className="text-zinc-300 leading-relaxed">
              Backtesting showed a consistent positive return on investment over several seasons. A live paper-trading phase confirmed the model's edge, matching historical performance. The synthetic chart below represents the typical profit curve from a simulated season, demonstrating steady growth.
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
              <h3 className="text-sm font-semibold text-zinc-200 mb-2">Simulated P/L Trend</h3>
              <CaseChart />
            </div>
          </section>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24 card p-6 space-y-4">
            <h3 className="font-semibold text-white">TL;DR</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Role:</strong> ML Engineer, Developer</li>
              <li><strong>Tools:</strong> Python (Pandas, Scikit-learn, XGBoost), SQL</li>
              <li><strong>Year:</strong> 2023</li>
              <li className="pt-2 border-t border-zinc-800/50">Engineered features from historical data</li>
              <li >Used triple-barrier labeling for robust targets</li>
              <li >Applied Kelly criterion for risk management</li>
              <li >Validated with out-of-sample backtesting</li>
            </ul>
          </div>
        </aside>

      </main>
    </div>
  );
}