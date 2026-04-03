"use client";

import { useState } from "react";

export default function CampaignManagerPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* TopNavBar */}
      <header className="bg-slate-950 flex justify-between items-center w-full px-6 py-3 h-16 sticky top-0 z-50 font-headline tracking-tight">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-amber-500 uppercase">
            Dycery Terminal
          </span>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-amber-500 border-b-2 border-amber-500 pb-1" href="#">
              Campaigns
            </a>
            <a
              className="text-slate-200 opacity-70 hover:opacity-100 transition-opacity"
              href="#"
            >
              Codex
            </a>
            <a
              className="text-slate-200 opacity-70 hover:opacity-100 transition-opacity"
              href="#"
            >
              Archives
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex bg-slate-800 items-center px-3 py-1.5 rounded-lg border border-slate-700/20">
            <span className="material-symbols-outlined text-sm opacity-50 mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 text-slate-200 placeholder:text-slate-400"
              placeholder="Search archives..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="material-symbols-outlined text-slate-200 opacity-70 hover:bg-slate-800 p-2 rounded-lg transition-colors">
            notifications
          </button>
          <button className="material-symbols-outlined text-slate-200 opacity-70 hover:bg-slate-800 p-2 rounded-lg transition-colors">
            settings
          </button>
          <div className="h-8 w-8 rounded-full bg-slate-700 border border-slate-600/30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Archmage profile portrait with glowing eyes"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVrNmXvvi9PXuFA30yWX1CFcUZEEdcgWjKg-DIw-w8qu15ugHh1VJ3SQW-m2UHcrPnBiG2SvrX9Eo7kZVS2qhQKnz8-n1o9Jljk8oeqHLWjslZL7-EMjsxbBS-NakdxX4SOxQgkzrpFYbYbKrl2i5bzol0W9hl0ZN83-3tTuctcxs4MBB3Wf785p-mOjd4aOPUxsHEaAVdm8_DzBGirB0AA2117KpDdbqxB1rlynv-ob6YmBAnWoU6IWvolnO-P9j8lI_jN2KSHQC"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar */}
        <aside className="hidden md:flex bg-slate-800 flex-col h-full w-64 py-6 border-r-0 font-body text-sm font-medium sticky top-16">
          <div className="px-6 mb-8 flex items-center gap-3">
            <div className="h-10 w-10 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600/20">
              <span
                className="material-symbols-outlined text-violet-400"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="text-slate-200 font-bold tracking-tight">Active Realm</h3>
              <p className="text-[10px] text-violet-400 uppercase tracking-widest font-bold">
                Level 14 Party
              </p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 text-violet-400 border-l-4 border-violet-400 ml-[-4px] translate-x-1 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a
              className="flex items-center gap-3 px-6 py-3 text-slate-200 hover:text-violet-400 hover:bg-slate-700 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              Characters
            </a>
            <a
              className="flex items-center gap-3 px-6 py-3 text-slate-200 hover:text-violet-400 hover:bg-slate-700 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">map</span>
              World Map
            </a>
            <a
              className="flex items-center gap-3 px-6 py-3 text-slate-200 hover:text-violet-400 hover:bg-slate-700 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">scrollable_header</span>
              Quests
            </a>
            <a
              className="flex items-center gap-3 px-6 py-3 text-slate-200 hover:text-violet-400 hover:bg-slate-700 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">inventory_2</span>
              Vault
            </a>
          </nav>
          <div className="mt-auto px-6 space-y-4">
            <button className="w-full bg-violet-400/10 border border-violet-400/30 text-violet-400 py-2.5 rounded hover:bg-violet-400/20 transition-all font-bold uppercase tracking-widest text-xs">
              New Session
            </button>
            <a
              className="flex items-center gap-3 py-3 text-slate-200 opacity-60 hover:opacity-100 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">logout</span>
              Log Out
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-6 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-slate-200">
                  Campaign Manager
                </h1>
                <p className="text-slate-400 font-medium mt-1">
                  Orchestrate your narratives and manage the weave of fate.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700/10">
                  <span className="text-[10px] text-violet-400 uppercase font-bold block mb-1">
                    Total Runtime
                  </span>
                  <span className="font-mono text-xl font-medium tracking-tighter">428h 12m</span>
                </div>
                <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700/10">
                  <span className="text-[10px] text-amber-500 uppercase font-bold block mb-1">
                    Active Souls
                  </span>
                  <span className="font-mono text-xl font-medium tracking-tighter">18 Users</span>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Active Campaigns (Col-Span 2) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-violet-400">swords</span>
                    Active Chronicles
                  </h2>
                  <span className="font-mono text-xs text-violet-400">3 ACTIVE RECORDS</span>
                </div>

                {/* Campaign Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Campaign Card 1 */}
                  <div className="bg-slate-800 group hover:bg-slate-700 transition-all p-5 rounded-lg border border-slate-700/5 flex flex-col justify-between h-64 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-400/5 blur-3xl -mr-10 -mt-10" />
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline text-xl font-bold text-slate-200 group-hover:text-violet-400 transition-colors">
                          The Lost Mine
                        </h3>
                        <span className="font-mono text-[10px] bg-violet-400/20 text-violet-400 px-2 py-0.5 rounded">
                          PHANDELVER
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-700/10 pb-2">
                          <span className="text-xs text-slate-400">Party Level</span>
                          <span className="font-mono font-bold text-amber-500">LVL 05</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-700/10 pb-2">
                          <span className="text-xs text-slate-400">Last Ritual</span>
                          <span className="font-mono text-xs">2023-11-24</span>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <div className="bg-slate-900 px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">groups</span>4
                            PLAYERS
                          </div>
                          <div className="bg-slate-900 px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">history</span>12
                            SESS
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-amber-500 text-slate-900 py-2 mt-4 font-bold rounded uppercase tracking-tighter text-sm hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2">
                      Launch Session
                      <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    </button>
                  </div>

                  {/* Campaign Card 2 */}
                  <div className="bg-slate-800 group hover:bg-slate-700 transition-all p-5 rounded-lg border border-slate-700/5 flex flex-col justify-between h-64">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline text-xl font-bold text-slate-200 group-hover:text-violet-400 transition-colors">
                          Shadow of Dragon
                        </h3>
                        <span className="font-mono text-[10px] bg-rose-400/20 text-rose-400 px-2 py-0.5 rounded uppercase">
                          High Threat
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-700/10 pb-2">
                          <span className="text-xs text-slate-400">Party Level</span>
                          <span className="font-mono font-bold text-amber-500">LVL 12</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-slate-700/10 pb-2">
                          <span className="text-xs text-slate-400">Last Ritual</span>
                          <span className="font-mono text-xs">2023-11-20</span>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <div className="bg-slate-900 px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">groups</span>6
                            PLAYERS
                          </div>
                          <div className="bg-slate-900 px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">history</span>48
                            SESS
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-amber-500 text-slate-900 py-2 mt-4 font-bold rounded uppercase tracking-tighter text-sm hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2">
                      Launch Session
                      <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    </button>
                  </div>

                  {/* Campaign Card 3 - Wide */}
                  <div className="bg-slate-800 group hover:bg-slate-700 transition-all p-5 rounded-lg border border-slate-700/5 flex flex-col justify-between h-64 md:col-span-2">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 aspect-video md:aspect-square bg-slate-900 rounded-lg border border-slate-700/10 overflow-hidden relative">
                        <img
                          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                          alt="Dark gothic castle under a red moon"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8OWMONdXY6-pyxlKDhVNsk5GiR-1RIoMjsCs2KCKt1XNYuvUU8f9l-QZI0JrglupPKDiYOsezPoAA875JDlXxcd7L0bCwKRglWvtpgobnNfBVG_P0YS1SQ_EtzX-UWthcWl9o6ppexA_jZHjDPKBH-1bSLDbKsLJuywUtOVz89QnkepK8TruMju_zJ9VBJvzd1a-5EOULGgN1kNfcD01Eag5Y-NxD_QWa9sy0Mt0Pb-jsH8PvSbTumYqFzKaMaC5wwSWRxFanNFn"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline text-2xl font-bold text-slate-200">
                            Curse of Strahd
                          </h3>
                          <span
                            className="material-symbols-outlined text-rose-400"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            skull
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                          A shadow falls over Barovia. The vampire lord awaits in the spires of
                          Castle Ravenloft. Your party&apos;s hope is the only light left.
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          <div className="flex items-center justify-between border-b border-slate-700/10 pb-1">
                            <span className="text-[10px] uppercase font-bold text-slate-400">
                              Level
                            </span>
                            <span className="font-mono text-sm font-bold text-amber-500">LVL 08</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-slate-700/10 pb-1">
                            <span className="text-[10px] uppercase font-bold text-slate-400">
                              Last Play
                            </span>
                            <span className="font-mono text-sm">YESTERDAY</span>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                          <button className="flex-1 bg-amber-500 text-slate-900 py-2 font-bold rounded uppercase tracking-tighter text-sm hover:scale-[1.02] active:scale-95 transition-transform">
                            Launch
                          </button>
                          <button className="px-4 bg-slate-700 border border-slate-600/20 hover:bg-slate-600 transition-colors rounded material-symbols-outlined">
                            more_horiz
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Creation and Forge */}
              <div className="space-y-6">
                <h2 className="font-headline text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500">magic_button</span>
                  Great Forge
                </h2>

                {/* Create New Campaign Card */}
                <div className="bg-slate-800 border-2 border-dashed border-violet-400/30 p-8 rounded-xl flex flex-col items-center text-center gap-6 group hover:border-violet-400 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-transparent pointer-events-none" />
                  <div className="h-20 w-20 rounded-full bg-slate-900 border border-slate-700/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-4xl text-violet-400"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      add_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-slate-200">
                      New Campaign
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">
                      Manifest a new world from the void of creation.
                    </p>
                  </div>
                  <div className="w-full space-y-4">
                    <div className="text-left">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-violet-400 mb-1 block">
                        Campaign Title
                      </label>
                      <input
                        className="w-full bg-slate-900 border border-slate-700/20 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all placeholder:text-slate-500"
                        placeholder="e.g. Descent into Avernus"
                        type="text"
                      />
                    </div>
                    <div className="text-left">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-violet-400 mb-1 block">
                        Realm Setting
                      </label>
                      <select className="w-full bg-slate-900 border border-slate-700/20 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-violet-400 focus:border-violet-400 outline-none transition-all appearance-none cursor-pointer text-slate-200">
                        <option>Forgotten Realms</option>
                        <option>Eberron</option>
                        <option>Wildemount</option>
                        <option>Custom Homebrew</option>
                      </select>
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-4 rounded-lg font-extrabold uppercase tracking-widest text-sm shadow-xl shadow-amber-500/10 hover:brightness-110 active:scale-95 transition-all mt-4">
                      Forge Campaign
                    </button>
                  </div>
                </div>

                {/* System Status (Quick Stats) */}
                <div className="bg-slate-900 rounded-lg p-5 border border-slate-700/10 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-xs text-violet-400">
                      analytics
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      Global Telemetry
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Active Monsters</span>
                      <span className="font-mono text-sm font-bold">1,429</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                      <div className="bg-violet-400 h-full w-[65%]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Mana Consumption</span>
                      <span className="font-mono text-sm font-bold">LOW</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="pt-10 border-t border-slate-700/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  Campaigns
                </span>
                <span className="font-mono text-3xl font-bold">03</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  Total Players
                </span>
                <span className="font-mono text-3xl font-bold">14</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  Map Fragments
                </span>
                <span className="font-mono text-3xl font-bold">82</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-2">
                  Gold Circulating
                </span>
                <span className="font-mono text-3xl font-bold text-amber-500">8.4k</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom NavBar (Hidden on Desktop) */}
      <nav className="md:hidden bg-slate-800 border-t border-slate-700/10 flex justify-around items-center py-3 px-6 sticky bottom-0 z-50">
        <a className="flex flex-col items-center gap-1 text-violet-400" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            dashboard
          </span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-200 opacity-60" href="#">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold uppercase">Party</span>
        </a>
        <div className="mt-[-24px] bg-amber-500 h-12 w-12 rounded-full flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
          <span className="material-symbols-outlined">add</span>
        </div>
        <a className="flex flex-col items-center gap-1 text-slate-200 opacity-60" href="#">
          <span className="material-symbols-outlined">map</span>
          <span className="text-[10px] font-bold uppercase">Atlas</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-200 opacity-60" href="#">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px] font-bold uppercase">Vault</span>
        </a>
      </nav>
    </div>
  );
}
