"use client";

export default function TestPage() {
  const routes = [
    { href: "/join", label: "DM Session Shell", desc: "Join code display for GM" },
    { href: "/initiative", label: "Initiative Tracker", desc: "Turn order management" },
    { href: "/dice", label: "Dice Roller", desc: "Dice engine + generators" },
    { href: "/timer", label: "Turn Timer", desc: "Countdown + encounter builder" },
    { href: "/quests", label: "Active Quests", desc: "Mission command dashboard" },
    { href: "/quests/dashboard", label: "Quests Dashboard", desc: "Alternative quest layout" },
    { href: "/campaigns", label: "Campaign Manager", desc: "GM campaign bento grid" },
    { href: "/campaigns/new", label: "Campaign Forge", desc: "Party initialization" },
    { href: "/characters", label: "Character Vault", desc: "Character card grid" },
    { href: "/map", label: "Region Map", desc: "Tactical map view" },
    { href: "/player", label: "Player View", desc: "Player sidebar" },
    { href: "/session/join", label: "Join Session", desc: "Player session join" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest">Dycery Terminal</span>
          </div>
          <h1 className="font-headline text-4xl font-black text-slate-100 tracking-tight">Route Index</h1>
          <p className="text-slate-400 text-sm mt-2 font-mono">/{"{shell}"} route group — all pages unified</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className="group flex flex-col gap-2 p-5 bg-slate-900 border border-slate-800 rounded-lg hover:border-amber-500/50 hover:bg-slate-800 transition-all no-underline"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">{route.href}</span>
                <span className="material-symbols-outlined text-slate-600 group-hover:text-amber-500 transition-colors">arrow_forward</span>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-slate-100">{route.label}</h2>
                <p className="text-slate-500 text-xs mt-1">{route.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-4 bg-slate-900/50 border border-slate-800 rounded font-mono text-xs text-slate-500">
          <div className="text-slate-400 mb-2">build: OK | routes: {routes.length} | status: all static</div>
          <div>Colors: slate-950 bg | amber-500 accent | violet-400 primary | slate-200 text</div>
        </div>
      </div>
    </div>
  );
}
