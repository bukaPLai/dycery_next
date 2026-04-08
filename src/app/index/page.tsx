"use client";

import React from "react";

const routes = [
  // Core routes
  {
    href: "/join",
    label: "Join",
    desc: "DM Session Shell — join code display for GM",
    icon: "keyboard_command_key",
    category: "session",
  },
  {
    href: "/initiative",
    label: "Initiative",
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
  // Campaign routes
  {
    href: "/quests",
    label: "Quests",
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
    label: "Campaigns",
    desc: "Campaign list and management",
    icon: "folder",
    category: "campaign",
  },
  {
    href: "/campaigns/new",
    label: "New Campaign",
    desc: "Create a new campaign",
    icon: "add_circle",
    category: "campaign",
  },
  {
    href: "/characters",
    label: "Characters",
    desc: "Character vault — manage party members",
    icon: "person",
    category: "world",
  },
  {
    href: "/player",
    label: "Player View",
    desc: "Player sidebar navigation — Dice, Initiative, Quests, Map, NPCs, Bestiary",
    icon: "person",
    category: "world",
  },
  // Map route
  {
    href: "/map",
    label: "Tactical Map",
    desc: "Region map with markers, travel tracker, legend, zoom",
    icon: "map",
    category: "world",
  },
  // Session routes
  {
    href: "/session/join",
    label: "Session Join",
    desc: "Join an active session via code",
    icon: "login",
    category: "session",
  },
  // Test routes
  {
    href: "/test",
    label: "Test Index",
    desc: "Route index for testing all shell pages",
    icon: "science",
    category: "core",
  },
];

const categoryConfig: Record<string, { color: string; label: string }> = {
  session: { color: "var(--primary)", label: "Session" },
  combat: { color: "var(--secondary)", label: "Combat" },
  campaign: { color: "#34d399", label: "Campaign" },
  core: { color: "var(--primary-dim)", label: "Core" },
  world: { color: "var(--tertiary)", label: "World" },
};

const buildInfo = {
  timestamp: new Date().toISOString(),
  framework: "Next.js 15",
  build: "App Router",
  version: "1.0.0",
};

export default function IndexPage() {
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

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
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
              Dycery Next
            </span>
            <span style={{ color: "var(--outline)" }}>|</span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--outline)" }}
            >
              Route Index
            </span>
          </div>

          <h1
            className="text-5xl font-black tracking-tight leading-none"
            style={{ fontFamily: "var(--font-headline)", color: "var(--on-bg)" }}
          >
            /index
          </h1>
          <p
            className="text-sm mt-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}
          >
            Central route registry — {routes.length} routes registered
          </p>

          {/* Gradient line */}
          <div
            className="mt-8 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(255,185,95,0.5), rgba(208,188,255,0.3), transparent)",
            }}
          />
        </div>

        {/* Route Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, i) => {
            const cat = categoryConfig[route.category] || categoryConfig.core;
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
                {/* Category badge */}
                <div className="flex items-center justify-between">
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
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ color: "var(--outline)", fontSize: "1.25rem" }}
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
                    className="text-sm font-medium"
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

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
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
              Categories
            </div>
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--primary)" }}
            >
              {Object.keys(categoryConfig).length}
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
              Next.js 15
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
              Timestamp
            </div>
            <div
              className="text-xs font-bold"
              style={{ fontFamily: "var(--font-mono)", color: "var(--on-surface-var)" }}
            >
              {buildInfo.timestamp}
            </div>
          </div>
        </div>

        {/* Status bar */}
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
              status: <span style={{ color: "#34d399" }}>operational</span>
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
            path: <span style={{ color: "var(--primary)" }}>/index</span>
          </div>
        </div>
      </div>
    </div>
  );
}
