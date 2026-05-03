export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For College Students
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Protect Your Original Work from{" "}
          <span className="text-[#58a6ff]">AI Detection False Positives</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Assignment Shield analyzes your writing against multiple AI detectors and gives you actionable suggestions to keep your authentic voice — without triggering false alarms.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Multi-Detector Analysis", desc: "Checks your text against leading AI detection APIs simultaneously." },
            { icon: "✏️", title: "Smart Revision Tips", desc: "Pinpoints flagged sentences and suggests human-sounding rewrites." },
            { icon: "🛡️", title: "Originality Preserved", desc: "Keeps your ideas intact — only refines phrasing that triggers detectors." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Student Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited document scans",
              "Real-time AI detection scoring",
              "Sentence-level revision suggestions",
              "Supports all major AI detectors",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Subscribe Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Will this help me cheat or submit AI-written work?",
              a: "No. Assignment Shield is designed exclusively for students who write their own work and want to ensure their genuine writing isn't incorrectly flagged by AI detectors. It does not generate or rewrite content for you."
            },
            {
              q: "Which AI detectors does it check against?",
              a: "We run your text through multiple leading detection APIs including GPTZero, Originality.ai, and others, giving you a comprehensive risk score before you submit."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your billing portal with no questions asked. You'll retain access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Assignment Shield. All rights reserved.
      </footer>
    </main>
  );
}
