export default function Home() {
  const differentiators = [
    {
      title: "Adaptive experiment orchestration",
      description:
        "Launch multi-variant experiments that continuously rebalance toward the highest-performing journeys without manual babysitting.",
      metric: "92%",
      metricLabel: "launch-to-learning acceleration",
    },
    {
      title: "Experience graph intelligence",
      description:
        "Model user paths as a living graph to surface friction points, drop-offs, and untapped conversion loops in real time.",
      metric: "4.3x",
      metricLabel: "lift across key funnels",
    },
    {
      title: "Auto-suggested next bets",
      description:
        "Let Ege turn signals into shippable suggestions complete with copy, creative direction, and expected impact ranges.",
      metric: "36 hrs",
      metricLabel: "average time saved per iteration",
    },
  ];

  const operatingSystem = [
    {
      phase: "Sense",
      items: [
        "Event-level data ingestion and anomaly detection",
        "Automatic clustering of opportunities by revenue impact",
      ],
    },
    {
      phase: "Decide",
      items: [
        "Hypothesis auto-generation powered by your product voice",
        "Effort vs. impact scoring tailored to your team capacity",
      ],
    },
    {
      phase: "Act",
      items: [
        "Guided change specs ready for design, product, and engineering",
        "Integrated validation checklist with built-in guardrails",
      ],
    },
    {
      phase: "Learn",
      items: [
        "Narrative-ready insight packs delivered to stakeholders",
        "Continuous knowledge base to avoid re-running the same tests",
      ],
    },
  ];

  const pulses = [
    {
      title: "Weekly Momentum Pulse",
      description:
        "A synthesised digest that calls out the three moves to unblock, double-down, and deprecate.",
      tone: "signal",
    },
    {
      title: "Launch Readiness Companion",
      description:
        "Live checks against dependencies, QA, and stakeholder approvals so nothing slips through the cracks.",
      tone: "launch",
    },
    {
      title: "Executive Spotlight",
      description:
        "A branded deck-ready summary translating experiments into pipeline, retention, and LTV language.",
      tone: "board",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <div className="absolute inset-0 -z-10 grid-sheen opacity-40" />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/60 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-sky-300">
            ege
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-neutral-300 sm:flex">
            <a href="#platform" className="transition hover:text-white">
              Platform
            </a>
            <a href="#operating-system" className="transition hover:text-white">
              Operating System
            </a>
            <a href="#pulses" className="transition hover:text-white">
              Pulses
            </a>
            <a href="#request" className="transition hover:text-white">
              Early Access
            </a>
          </nav>
          <a
            href="#request"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-sky-200"
          >
            Join the beta
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-24 pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-10">
            <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-300">
              The experience growth engine
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Ship outcome-led product experiences in half the time.
              </h1>
              <p className="max-w-xl text-lg text-neutral-300">
                Ege helps product, design, and growth teams spot what matters,
                prioritise the right experiments, and deliver experience updates
                that compound revenue and retention.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#request"
                className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-300"
              >
                Request a live workspace
              </a>
              <a
                href="#platform"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:text-sky-200"
              >
                Explore the platform ↓
              </a>
            </div>
            <dl className="flex flex-wrap gap-8 text-sm text-neutral-300">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Teams onboarded
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">37</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Median payback
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  3.2 months
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Signals processed / day
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  18.4M
                </dd>
              </div>
            </dl>
          </div>
          <div className="glass-panel relative overflow-hidden">
            <div className="absolute left-1/2 top-4 h-24 w-24 -translate-x-1/2 rounded-full bg-sky-400/40 blur-3xl" />
            <div className="relative space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-200">
                Control Tower
              </h2>
              <div className="space-y-5 text-sm text-neutral-200">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="font-medium text-white">Live performance map</p>
                  <p className="mt-1 text-neutral-300">
                    Forecast revenue, activation, and retention impact for every
                    experiment in flight with scenario analysis.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="font-medium text-white">Collaboration codec</p>
                  <p className="mt-1 text-neutral-300">
                    Syncs product notes, design feedback, and analyst insight in
                    one shared timeline so decisions stay contextual.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="font-medium text-white">Governance guardrails</p>
                  <p className="mt-1 text-neutral-300">
                    Auto-detects high-risk changes and enforces approval flows
                    before they reach production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                What makes Ege different
              </h2>
              <p className="mt-3 max-w-2xl text-neutral-300">
                Purpose-built to accelerate product iteration cycles with an
                opinionated workflow that eliminates the busywork holding teams
                back.
              </p>
            </div>
            <a
              href="#operating-system"
              className="self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200 transition hover:text-sky-200"
            >
              Dive deeper →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="glass-panel flex flex-col gap-6 border-white/5 bg-gradient-to-br from-white/10 to-white/[0.04] p-6"
              >
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    {item.metric}
                  </span>
                </header>
                <p className="text-sm text-neutral-200">{item.description}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {item.metricLabel}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="operating-system" className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              The operating system behind the engine
            </h2>
            <p className="text-neutral-300">
              Ege turns product intuition into a measurable, repeatable system.
              Each phase syncs seamlessly with your existing analytics,
              roadmap, and design tools.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {operatingSystem.map((phase) => (
              <div
                key={phase.phase}
                className="glass-panel border-white/10 bg-black/40"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                  {phase.phase}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-neutral-200">
                  {phase.items.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="pulses" className="space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Pulses tuned for every audience
              </h2>
              <p className="mt-3 max-w-xl text-neutral-300">
                Curate automated narratives that adapt to the voice and
                priorities of product managers, analysts, and executives.
              </p>
            </div>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-200">
              Always on, always current
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pulses.map((pulse) => (
              <article
                key={pulse.title}
                className="glass-panel border-white/10 bg-black/40 transition hover:border-sky-400/40 hover:bg-sky-400/10"
              >
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-400">
                  <span>{pulse.tone}</span>
                  <span>live</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {pulse.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-200">
                  {pulse.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="request"
          className="glass-panel border-white/10 bg-black/50 text-neutral-100"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Ready to rewire your growth motions?
              </h2>
              <p className="max-w-2xl text-neutral-300">
                Tell us about your current product stack and objectives. We will
                assemble a dedicated canvas with preloaded playbooks, metrics,
                and governance rules tailored to your workflow.
              </p>
            </div>
            <form className="grid w-full max-w-xl gap-4">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Work email
                </span>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Biggest growth challenge
                </span>
                <textarea
                  rows={3}
                  placeholder="Share the experience goals you're tackling this quarter."
                  className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-200"
              >
                Secure my workspace
              </button>
              <p className="text-xs text-neutral-400">
                We review every request manually. Expect a response within two
                business days.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60 px-6 py-6 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ege Labs.</p>
          <div className="flex gap-6">
            <a href="#platform" className="transition hover:text-white">
              Platform
            </a>
            <a href="#operating-system" className="transition hover:text-white">
              Operating System
            </a>
            <a href="#pulses" className="transition hover:text-white">
              Pulses
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
