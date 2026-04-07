"use client";

const routes = [
  {
    href: "/join",
    label: "DM Session Shell",
    desc: "Join code display for GM — session orchestration hub",
    icon: "keyboard_command_key",
    category: "session",
  },
  {
    href: "/initiative",
    label: "Initiative Tracker",
    desc: "Turn order management with combat flow controls",
    icon: "swap_vert",
    category: "combat",
  },
  {
    href: "/dice",
    label: "Dice Roller",
    desc: "Dice engine with generators and weather modifiers",
    icon: "casino",
    category: "core",
  },
  {
    href: "/timer",
    label: "Turn Timer",
    desc: "Countdown encounters with encounter builder",
    icon: "timer",
    category: "combat",
  },
  {
    href: "/quests",
    label: "Active Quests",
    desc: "Mission command dashboard for quest tracking",
    icon: "map",
    category: "campaign",
  },
  {
    href: "/quests/dashboard",
    label: "Quests Dashboard",
    desc: "Alternative bento-style quest layout grid",
    icon: "dashboard",
    category: "campaign",
  },
  {
    href: "/campaigns",
    label: "Campaign Manager",
    desc: "GM campaign bento grid for world management",
    icon: "auto_awesome",
    category: "campaign",
  },
  {
    href: "/campaigns/new",
    label: "Campaign Forge",
    desc: "Party initialization wizard — create new adventures",
    icon: "construction",
    category: "campaign",
  },
  {
    href: "/characters",
    label: "Character Vault",
    desc: "Character card grid with stats and portraits",
    icon: "person",
    category: "core",
  },
  {
    href: "/map",
    label: "Region Map",
    desc: "Tactical map view with region exploration",
    icon: "explore",
    category: "world",
  },
  {
    href: "/player",
    label: "Player View",
    desc: "Player sidebar with quick-access navigation",
    icon: "account_circle",
    category: "session",
  },
  {
    href: "/session/join",
    label: "Join Session",
    desc: "Player session join with code entry",
    icon: "link",
    category: "session",
  },
];

const categoryColors: Record<string, string> = {
  session: "bg-violet-400/10 text-violet-400 border-violet-400/20",
  combat: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  campaign: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
  core: "bg-cyan-500/10 text-cyan-400 border-cyan-400/20",
  world: "bg-rose-500/10 text-rose-400 border-rose-400/20",
};

export default function TestPage() {
  const buildInfo = {
    version: "0.4.2-beta",
    build: "static",
    routes: routes.length,
    framework: "Next.js 15",
    timestamp: new Date().toISOString().split("T")[0],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body">
      {/* Scanline overlay effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[ repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px) ]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-amber-500 animate-ping opacity-75" />
            </div>
            <span className="font-mono text-xs text-amber-500 uppercase tracking-[0.2em]">
              Dycery Terminal
            </span>
            <span className="text-slate-700">|</span>
            <span className="font-mono text-xs text-slate-500">Route Index</span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h1 className="font-headline text-5xl font-black text-slate-100 tracking-tight leading-none">
                Shell Routes
              </h1>
              <p className="text-slate-500 text-sm mt-3 font-mono">
                <span className="text-violet-400">src/app/(shell)/</span> — all pages unified
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono text-slate-600">
                Last updated: <span className="text-slate-400">{buildInfo.timestamp}</span>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-8 h-px bg-gradient-to-r from-amber-500/50 via-violet-400/30 to-transparent" />
        </header>

        {/* Route Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, i) => (
            <a
              key={route.href}
              href={route.href}
              className="group relative flex flex-col gap-3 p-5 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-amber-500/60 hover:bg-slate-800/80 transition-all duration-200 overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-500/5 to-transparent" />

              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] px-2 py-1 rounded border ${categoryColors[route.category] || categoryColors.core}`}>
                  {route.category}
                </span>
                <span className="material-symbols-outlined text-slate-600 group-hover:text-amber-500 transition-colors duration-200 text-lg">
                  {route.icon}
                </span>
              </div>

              {/* Route path */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">/</span>
                <span className="font-mono text-sm text-amber-500/80 group-hover:text-amber-500 transition-colors font-medium">
                  {route.href.replace("/", "") || "root"}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-headline text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  {route.label}
                </h2>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  {route.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center gap-1 text-slate-600 group-hover:text-amber-500/70 transition-colors">
                <span className="text-xs font-mono">Navigate</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-amber-500/40 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-amber-500/40 to-transparent" />
              </div>
            </a>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Total Routes</div>
            <div className="text-2xl font-headline font-bold text-amber-500">{routes.length}</div>
          </div>
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Framework</div>
            <div className="text-lg font-headline font-bold text-slate-300">{buildInfo.framework}</div>
          </div>
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Build Type</div>
            <div className="text-lg font-headline font-bold text-slate-300">{buildInfo.build}</div>
          </div>
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Version</div>
            <div className="text-lg font-headline font-bold text-violet-400">{buildInfo.version}</div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 p-4 bg-slate-900/40 border border-slate-800/60 rounded-lg font-mono text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">status: <span className="text-emerald-400">operational</span></span>
            </div>
            <div className="text-slate-600">|</div>
            <div className="text-slate-500">
              routes: <span className="text-slate-300">{routes.length}</span>
            </div>
            <div className="text-slate-600">|</div>
            <div className="text-slate-500">
              theme: <span className="text-violet-400">dycery-terminal</span>
            </div>
            <div className="text-slate-600">|</div>
            <div className="text-slate-500">
              colors: <span className="text-amber-500">amber-500</span> · <span className="text-violet-400">violet-400</span> · <span className="text-slate-200">slate-200</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-slate-800/50">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600">
            <span>src/app/test/page.tsx</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500/50" />
              Dycery v{buildInfo.version}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}