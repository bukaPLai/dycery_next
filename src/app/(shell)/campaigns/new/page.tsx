'use client';

import React from 'react';

export default function CampaignForgePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
      {/* Back Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700/50 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-10 h-10 rounded text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-amber-500 tracking-widest uppercase">Campaign Setup</span>
            <h1 className="font-headline text-lg font-bold text-slate-100">Initialization Protocol</h1>
          </div>
        </div>
        {/* System Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded border border-slate-700/20">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(255,185,95,0.6)]"></div>
            <span className="text-xs font-mono text-slate-300">SYS.ONLINE</span>
          </div>
        </div>
      </header>

      <main className="flex h-full grow flex-col pb-12">
        <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-8">
          <div className="flex flex-col max-w-[960px] flex-1 gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-2 p-4 bg-slate-900 rounded border border-slate-700 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-700 to-transparent opacity-50 pointer-events-none"></div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500 text-[28px]">group</span>
                <p className="font-headline text-slate-100 tracking-tight text-[32px] font-bold leading-tight">03. Party Initialization</p>
              </div>
              <p className="text-slate-300 text-sm font-body max-w-2xl mt-1">
                Establish the operative unit. Minimum 1 entity required. Maximum capacity: 4 entities. Ensure balanced parameter distribution for optimal operational success in Sector 7.
              </p>
            </div>

            {/* Party Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {/* Character Card: Thorne */}
              <div className="group relative flex flex-col gap-3 rounded bg-slate-800 border border-slate-700/20 overflow-hidden hover:border-amber-500/50 transition-colors shadow-[0_4px_24px_rgba(42,23,0,0.04)]">
                <div className="relative w-full aspect-[4/5] bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjHN2PUWywUdTsN5eG76n0Zxii3kwfaQArSivFg0uKLQE8thDi0hZi8Sp7w1T0_pGHlaFjZSUQRVis7F4KxNb-WgARFqyy2fcakNzZSZXmd27nlBrm6b2gkD1LeIA1XFXx33kYbYP-4cRXl__O6sUzfS2wTlFlZ5CqvwDzqcX_E8Vz1zWK0iNBsmH_asU3VzGa4ov7G3Mq0FCqpkokOq0DiprHl6kRekkmCJ8zJhRpo_5FHqzZcNzq_j5i-_L1YgBU1cbD3j7RTHZ-")',
                    }}
                  ></div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="bg-slate-600 px-2 py-0.5 rounded flex items-center gap-1 border border-slate-700/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_4px_rgba(208,188,255,0.8)]"></span>
                      <span className="text-[10px] font-mono text-slate-100 uppercase">RDY</span>
                    </div>
                  </div>
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline text-slate-100 text-xl font-bold leading-tight">Thorne</h2>
                      <span className="text-xs font-mono text-violet-400">LVL.01</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono uppercase tracking-wider">Shadow Operative</p>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex flex-col p-3 gap-2 bg-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">HP</span>
                    <span className="text-slate-100">45/45</span>
                  </div>
                  <div className="h-1 w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-700/10">
                    <div className="h-full bg-rose-300 w-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-mono text-amber-500">DEX INT</span>
                    <button className="text-slate-300 hover:text-rose-400 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Character Card: Elara */}
              <div className="group relative flex flex-col gap-3 rounded bg-slate-800 border border-slate-700/20 overflow-hidden hover:border-amber-500/50 transition-colors shadow-[0_4px_24px_rgba(42,23,0,0.04)]">
                <div className="relative w-full aspect-[4/5] bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyv5EmvqQuS-ZN6Z3odgq9SF-46a77QE93cKucrerqahBkoe1yI5ZXqNlMbcaIgHokYZvKG41vCeo_Y6bRR8aGPcc_JJTJVsgcv6DLBaiLwbS7_nNIdvvsJoVQSUFwV-Nc8c3PEDodje4sGIA2-9HJKg3lnATcaW9yd_12kCtXAByUrn2iZVho8OHf73Dl0aTR-90zLNzAi1PBnOSITKM5TLLRZaYd0l8OdlpzAzZy0vinsJHHFxAgO7MRT_05W1U3Yjmw7ryFUF_x")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="bg-slate-600 px-2 py-0.5 rounded flex items-center gap-1 border border-slate-700/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_4px_rgba(208,188,255,0.8)]"></span>
                      <span className="text-[10px] font-mono text-slate-100 uppercase">RDY</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline text-slate-100 text-xl font-bold leading-tight">Elara</h2>
                      <span className="text-xs font-mono text-violet-400">LVL.01</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono uppercase tracking-wider">Net-Weaver</p>
                  </div>
                </div>
                <div className="flex flex-col p-3 gap-2 bg-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">HP</span>
                    <span className="text-slate-100">30/30</span>
                  </div>
                  <div className="h-1 w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-700/10">
                    <div className="h-full bg-rose-300 w-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono mt-1">
                    <span className="text-slate-300">MP</span>
                    <span className="text-violet-400">50/50</span>
                  </div>
                  <div className="h-1 w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-700/10">
                    <div className="h-full bg-violet-400 w-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-mono text-amber-500">INT WIS</span>
                    <button className="text-slate-300 hover:text-rose-400 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Character Card: Kael */}
              <div className="group relative flex flex-col gap-3 rounded bg-slate-800 border border-slate-700/20 overflow-hidden hover:border-amber-500/50 transition-colors shadow-[0_4px_24px_rgba(42,23,0,0.04)]">
                <div className="relative w-full aspect-[4/5] bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhXaluhECZPl0ATc8OTmh-2penrwzfMWzZDYCfIz3dO2C3gkyFR0bRxqlxTME0JUbKQXCMJsIvfarbGJfU6nSi0slUg0TeO5-P1Y6LnjBu7565mrFsylitEoq61gKZhCAcKKZUdri4eI9kBeRx9wvergOiCrpeoa5Oh_UUSZaPGPdKFGE9NL3-d_uNXyioF11_MVKjn2he8sH_StOaVNxC9hjZwgFX0FJh35JfkymZ-ANuBH37pKErtXak-QMd5qCQhkVcVlrA_0nA")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="bg-slate-600 px-2 py-0.5 rounded flex items-center gap-1 border border-slate-700/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_4px_rgba(208,188,255,0.8)]"></span>
                      <span className="text-[10px] font-mono text-slate-100 uppercase">RDY</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-headline text-slate-100 text-xl font-bold leading-tight">Kael</h2>
                      <span className="text-xs font-mono text-violet-400">LVL.01</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono uppercase tracking-wider">Juggernaut</p>
                  </div>
                </div>
                <div className="flex flex-col p-3 gap-2 bg-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">HP</span>
                    <span className="text-slate-100">65/65</span>
                  </div>
                  <div className="h-1 w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-700/10">
                    <div className="h-full bg-rose-300 w-full"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-mono text-amber-500">STR CON</span>
                    <button className="text-slate-300 hover:text-rose-400 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Add Player Slot */}
              <div className="group relative flex flex-col items-center justify-center gap-4 rounded bg-slate-950 border border-dashed border-slate-700/40 hover:border-amber-500 transition-colors aspect-[4/5] min-h-[300px] cursor-pointer">
                {/* Circular Amber Plus Button */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 text-slate-950 shadow-[0_0_16px_rgba(255,185,95,0.3)] group-hover:shadow-[0_0_24px_rgba(255,185,95,0.6)] transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px] font-bold">add</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-headline text-slate-100 text-lg font-bold">Add Entity</p>
                  <p className="text-xs text-slate-300 font-mono">SLOT 04 [EMPTY]</p>
                </div>
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded"></div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex justify-end border-t border-slate-700/50 pt-6 mt-4">
              <button className="flex items-center justify-center h-12 px-8 rounded bg-gradient-to-b from-amber-500 to-amber-700 text-slate-950 font-bold tracking-wide hover:brightness-110 transition-all shadow-[0_0_12px_rgba(255,185,95,0.2)]">
                <span className="text-sm font-body uppercase">Initialize Protocol</span>
                <span className="material-symbols-outlined ml-2 text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
