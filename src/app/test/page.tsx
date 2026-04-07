"use client";

const routes = [
  {
    href: "/join",
    label: "DM Session Shell",
    desc: "Join code display for GM — session orchestration hub",
    icon: "keyboard_command_key",
    category: "session",
    status: "active",
  },
  {
    href: "/initiative",
    label: "Initiative Tracker",
    desc: "Turn order management with combat flow controls",
    icon: "swap_vert",
    category: "combat",
    status: "active",
  },
  {
    href: "/dice",
    label: "Dice Roller",
    desc: "Dice engine with generators and weather modifiers",
    icon: "casino",
    category: "core",
    status: "active",
  },
  {
    href: "/timer",
    label: "Turn Timer",
    desc: "Countdown encounters with encounter builder",
    icon: "timer",
    category: "combat",
    status: "active",
  },
  {
    href: "/quests",
    label: "Active Quests",
    desc: "Mission command dashboard for quest tracking",
    icon: "map",
    category: "campaign",
    status: "active",
  },
  {
    href: "/quests/dashboard",
    label: "Quests Dashboard",
    desc: "Alternative bento-style quest layout grid",
    icon: "dashboard",
    category: "campaign",
    status: "active",
  },
  {
    href: "/campaigns",
    label: "Campaign Manager",
    desc: "GM campaign bento grid for world management",
    icon: "auto_awesome",
    category: "campaign",
    status: "active",
  },
  {
    href: "/campaigns/new",
    label: "Campaign Forge",
    desc: "Party initialization wizard — create new adventures",
    icon: "construction",
    category: "campaign",
    status: "active",
  },
  {
    href: "/characters",
    label: "Character Vault",
    desc: "Character card grid with stats and portraits",
    icon: "person",
    category: "core",
    status: "active",
  },
  {
    href: "/map",
    label: "Region Map",
    desc: "Tactical map view with region exploration",
    icon: "explore",
    category: "world",
    status: "active",
  },
  {
    href: "/player",
    label: "Player View",
    desc: "Player sidebar with quick-access navigation",
    icon: "account_circle",
    category: "session",
    status: "active",
  },
  {
    href: "/session/join",
    label: "Join Session",
    desc: "Player session join with code entry",
    icon: "link",
    category: "session",
    status: "active",
  },
];

const categoryConfig: Record<string, { color: string; glow: string; label: string }> = {
  session: {
    color: "var(--primary)",
    glow: "rgba(208, 188, 255, 0.15)",
    label: "Session",
  },
  combat: {
    color: "var(--secondary)",
    glow: "rgba(255, 185, 95, 0.15)",
    label: "Combat",
  },
  campaign: {
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.15)",
    label: "Campaign",
  },
  core: {
    color: "var(--primary-dim)",
    glow: "rgba(160, 120, 255, 0.15)",
    label: "Core",
  },
  world: {
    color: "var(--tertiary)",
    glow: "rgba(255, 179, 173, 0.15)",
    label: "World",
  },
};

const statusConfig: Record<string, { color: string; label: string; pulse: boolean }> = {
  active: { color: "#34d399", label: "Active", pulse: true },
  beta: { color: "var(--secondary)", label: "Beta", pulse: true },
  wip: { color: "var(--primary-dim)", label: "WIP", pulse: false },
  deprecated: { color: "var(--outline)", label: "Deprecated", pulse: false },
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
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)", color: "var(--on-surface)", fontFamily: "var(--font-body)" }}
    >
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 4px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: "var(--secondary)" }}
              />
              <div
                className="absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping opacity-60"
                style={{ background: "var(--secondary)" }}
              />
            </div>
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--secondary)" }}
            >
              Dycery Terminal
            </span>
            <span style={{ color: "var(--outline)" }}>|</span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Route Index
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <h1
                className="text-5xl font-black tracking-tight leading-none"
                style={{ fontFamily: "var(--font-headline)", color: "var(--on-bg)" }}
              >
                Shell Routes
              </h1>
              <p
                className="text-sm mt-3"
                style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}
              >
                <span style={{ color: "var(--primary-dim)" }}>src/app/(shell)/</span>
                — 12 pages unified
              </p>
            </div>
            <div className="text-right">
              <div
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
              >
                Last updated:{" "}
                <span style={{ color: "var(--on-surface-var)" }}>{buildInfo.timestamp}</span>
              </div>
            </div>
          </div>

          {/* Decorative gradient line */}
          <div
            className="mt-8 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(255,185,95,0.5), rgba(208,188,255,0.3), transparent)",
            }}
          />
        </header>

        {/* Status Legend */}
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <div
            className="text-xs uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            Status:
          </div>
          {Object.entries(statusConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="relative">
                <div
                  className={`w-2 h-2 rounded-full ${config.pulse ? "animate-pulse" : ""}`}
                  style={{ background: config.color }}
                />
              </div>
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: config.color }}
              >
                {config.label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--outline)" }} />
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Inactive
            </span>
          </div>
        </div>

        {/* Route Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, i) => {
            const cat = categoryConfig[route.category] || categoryConfig.core;
            const status = statusConfig[route.status] || statusConfig.active;
            return (
              <a
                key={route.href}
                href={route.href}
                className="group relative flex flex-col gap-3 p-5 rounded-lg border transition-all duration-200 overflow-hidden"
                style={{
                  background: "var(--surface-low)",
                  borderColor: "rgba(73, 68, 84, 0.4)",
                  animationDelay: `${i * 40}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.color;
                  e.currentTarget.style.background = "var(--surface-mid)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(73, 68, 84, 0.4)";
                  e.currentTarget.style.background = "var(--surface-low)";
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${cat.glow}, transparent 60%)`,
                  }}
                />

                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] px-2 py-0.5 rounded border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: cat.color,
                        borderColor: `${cat.color}40`,
                        background: `${cat.color}10`,
                      }}
                    >
                      {cat.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${status.pulse ? "animate-pulse" : ""}`}
                        style={{ background: status.color }}
                      />
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-lg transition-colors duration-200"
                    style={{ color: "var(--outline)", fontSize: "1.25rem" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--outline)";
                    }}
                  >
                    {route.icon}
                  </span>
                </div>

                {/* Route path */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
                  >
                    /
                  </span>
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--secondary)",
                    }}
                  >
                    {route.href.replace("/", "") || "root"}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2
                    className="text-base font-bold"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--on-bg)",
                    }}
                  >
                    {route.label}
                  </h2>
                  <p
                    className="text-xs mt-1.5 leading-relaxed"
                    style={{ color: "var(--outline)", lineHeight: 1.6 }}
                  >
                    {route.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div
                  className="flex items-center gap-1 transition-colors duration-200"
                  style={{ color: "var(--outline)" }}
                >
                  <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    Navigate
                  </span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                  <div
                    className="absolute top-0 right-0 w-px h-8"
                    style={{
                      background: `linear-gradient(to bottom, ${cat.color}40, transparent)`,
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 h-px w-8"
                    style={{
                      background: `linear-gradient(to left, ${cat.color}40, transparent)`,
                    }}
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="p-4 rounded-lg border"
            style={{
              background: "var(--surface-low)",
              borderColor: "rgba(73, 68, 84, 0.4)",
            }}
          >
            <div
              className="text-[10px] uppercase mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Total Routes
            </div>
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--secondary)" }}
            >
              {routes.length}
            </div>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{
              background: "var(--surface-low)",
              borderColor: "rgba(73, 68, 84, 0.4)",
            }}
          >
            <div
              className="text-[10px] uppercase mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Framework
            </div>
            <div
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--on-surface-var)" }}
            >
              {buildInfo.framework}
            </div>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{
              background: "var(--surface-low)",
              borderColor: "rgba(73, 68, 84, 0.4)",
            }}
          >
            <div
              className="text-[10px] uppercase mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Build Type
            </div>
            <div
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--on-surface-var)" }}
            >
              {buildInfo.build}
            </div>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{
              background: "var(--surface-low)",
              borderColor: "rgba(73, 68, 84, 0.4)",
            }}
          >
            <div
              className="text-[10px] uppercase mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Version
            </div>
            <div
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--primary)" }}
            >
              {buildInfo.version}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div
          className="mt-8 p-4 rounded-lg flex flex-wrap items-center gap-x-6 gap-y-2"
          style={{
            background: "rgba(45, 52, 73, 0.3)",
            border: "1px solid rgba(73, 68, 84, 0.3)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#34d399" }}
            />
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--on-surface-var)" }}
            >
              status:{" "}
              <span style={{ color: "#34d399" }}>operational</span>
            </span>
          </div>
          <span style={{ color: "var(--outline-var)" }}>|</span>
          <div
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            routes: <span style={{ color: "var(--on-surface-var)" }}>{routes.length}</span>
          </div>
          <span style={{ color: "var(--outline-var)" }}>|</span>
          <div
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            theme: <span style={{ color: "var(--primary)" }}>dycery-terminal</span>
          </div>
          <span style={{ color: "var(--outline-var)" }}>|</span>
          <div
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            colors:{" "}
            <span style={{ color: "var(--secondary)" }}>amber</span> ·{" "}
            <span style={{ color: "var(--primary)" }}>violet</span> ·{" "}
            <span style={{ color: "var(--on-bg)" }}>navy</span>
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-low)" }}>
          <div
            className="text-[10px] uppercase tracking-wider mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            Category Colors
          </div>
          <div className="flex flex-wrap gap-4">
            {Object.entries(categoryConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ background: config.color, opacity: 0.8 }}
                />
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: config.color }}
                >
                  {config.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 pt-6"
          style={{ borderTop: "1px solid rgba(73, 68, 84, 0.3)" }}
        >
          <div
            className="flex items-center justify-between text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
          >
            <span>src/app/test/page.tsx</span>
            <span className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "rgba(255, 185, 95, 0.5)" }}
              />
              Dycery v{buildInfo.version}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
