"use client";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface overflow-hidden font-body">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-2xl shadow-primary/10 font-headline antialiased">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-primary">Dycery Terminal</span>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Campaign</span>
            <span className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Timer</span>
            <span className="text-primary font-bold border-b-2 border-primary pb-1 cursor-default">Round: 1</span>
            <span className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Code: XY7Z</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:bg-slate-800/50 rounded-lg transition-all p-2 active:scale-95 duration-150">
            <span className="material-symbols-outlined text-slate-400">help</span>
          </button>
          <button className="hover:bg-slate-800/50 rounded-lg transition-all p-2 active:scale-95 duration-150">
            <span className="material-symbols-outlined text-slate-400">settings</span>
          </button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 flex flex-col pt-16 pb-8 bg-slate-950 border-r border-slate-800 font-headline text-sm">
        <div className="px-6 py-4 mb-4">
          <div className="text-lg font-black text-primary">Dycery Terminal</div>
          <div className="text-[10px] text-slate-500 tracking-widest uppercase">Region Map Active</div>
        </div>
        <nav className="flex-1 space-y-1">
          <div className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">casino</span>
            <span>Dice Roller</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">format_list_numbered</span>
            <span>Initiative</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">assignment</span>
            <span>Active Quests</span>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 text-primary border-r-4 border-primary px-4 py-3 cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
            <span>Map</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">group</span>
            <span>NPCs</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">pest_control</span>
            <span>Bestiary</span>
          </div>
        </nav>
        <div className="px-6 mt-auto">
          <div className="p-3 bg-surface-container-high rounded-lg border border-outline-variant/30">
            <div className="text-[10px] text-secondary font-bold mb-1">SYSTEM STATUS</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs text-slate-300">Syncing Data...</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 mt-14 h-[calc(100vh-3.5rem)] relative overflow-hidden bg-surface-container-lowest">
        {/* Region Map Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 map-grid opacity-30"></div>
          <div className="absolute inset-0 scanline opacity-5 pointer-events-none"></div>

          {/* Map Visualization */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full relative">
              <img
                alt="Top-down dark fantasy topographical map of a dense forest with rivers and mystical glowing elements"
                className="w-full h-full object-cover mix-blend-luminosity opacity-40 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSsfpWzpYuBE9hFa7ITXVwRWadlHCmgaeJHeD389pnv1fOs1k_O7bu45aNrXC97H0hh3-fVFNgWV9X4P2aYZ71STerovXDb0A1edZ-tRZmcR9tDggPfFgYMtk9TSHTm4_a3YTRVKam_OyGb0BD1ecftEtIK_puaJ9Q-lKrom-BgQ98x6MFrhGRzQKMUh8-zF80gevt2cIMVZ0prY7GMgB0UvhldzHfoB2UWhIdt-eu5lrf6WFkqoNcF8xlbAJE2AD5jnZahANav9TY"
              />

              {/* Tactical Markers */}
              {/* Marker 1: Village */}
              <div className="absolute top-[40%] left-[30%] group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-secondary/20 rounded-full animate-ping"></div>
                  <div className="w-8 h-8 bg-surface-container-highest border-2 border-secondary rounded-full flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(245,158,11,0.5)] cursor-pointer z-10 transition-transform hover:scale-110">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                  </div>
                </div>
                <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 w-48 bg-slate-900/95 backdrop-blur-md border border-secondary/50 p-3 rounded shadow-2xl">
                  <div className="text-secondary font-headline font-bold text-sm mb-1 uppercase tracking-wider">Oakheart Village</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <span className="text-slate-500">Environment</span>
                    <span className="text-slate-200">Woodland Hub</span>
                    <span className="text-slate-500">Danger</span>
                    <span className="text-emerald-400">Minimal</span>
                    <span className="text-slate-500">Entities</span>
                    <span className="text-slate-200">Townsfolk, Guard</span>
                  </div>
                </div>
              </div>

              {/* Marker 2: Ruins */}
              <div className="absolute top-[25%] left-[65%] group">
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 bg-surface-container-highest border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(139,92,246,0.5)] cursor-pointer z-10 transition-transform hover:scale-110">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  </div>
                </div>
                <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 w-48 bg-slate-900/95 backdrop-blur-md border border-primary/50 p-3 rounded shadow-2xl">
                  <div className="text-primary font-headline font-bold text-sm mb-1 uppercase tracking-wider">Eldritch Spire</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <span className="text-slate-500">Environment</span>
                    <span className="text-slate-200">Arcane Ruin</span>
                    <span className="text-slate-500">Danger</span>
                    <span className="text-secondary">Elevated</span>
                    <span className="text-slate-500">Entities</span>
                    <span className="text-slate-200">Arcane Wraiths</span>
                  </div>
                </div>
              </div>

              {/* Marker 3: Cave */}
              <div className="absolute top-[70%] left-[45%] group">
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 bg-surface-container-highest border-2 border-tertiary rounded-full flex items-center justify-center text-tertiary shadow-[0_0_15px_rgba(239,68,68,0.5)] cursor-pointer z-10 transition-transform hover:scale-110">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
                  </div>
                </div>
                <div className="absolute left-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 w-48 bg-slate-900/95 backdrop-blur-md border border-tertiary/50 p-3 rounded shadow-2xl">
                  <div className="text-tertiary font-headline font-bold text-sm mb-1 uppercase tracking-wider">The Void Maw</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <span className="text-slate-500">Environment</span>
                    <span className="text-slate-200">Underdark Vent</span>
                    <span className="text-slate-500">Danger</span>
                    <span className="text-tertiary font-bold">CRITICAL</span>
                    <span className="text-slate-500">Entities</span>
                    <span className="text-slate-200">Gorgon Nest</span>
                  </div>
                </div>
              </div>

              {/* Marker 4: Boss Lair */}
              <div className="absolute top-[60%] left-[80%] group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 border-2 border-tertiary/20 rounded-full animate-pulse"></div>
                  <div className="w-10 h-10 bg-surface-container-highest border-2 border-tertiary rounded flex items-center justify-center text-tertiary shadow-[0_0_25px_rgba(239,68,68,0.6)] cursor-pointer z-10 transition-transform hover:scale-125 rotate-45">
                    <span className="material-symbols-outlined text-lg -rotate-45" style={{ fontVariationSettings: "'FILL' 1" }}>skull</span>
                  </div>
                </div>
                <div className="absolute right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 w-56 bg-slate-950/98 backdrop-blur-xl border border-tertiary p-4 rounded shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                  <div className="text-tertiary font-headline font-black text-base mb-2 uppercase tracking-tighter">Dragon's Reach</div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span className="text-slate-500">Region</span>
                      <span className="text-slate-200">Volcanic Peak</span>
                      <span className="text-slate-500">Lethality</span>
                      <span className="text-tertiary font-bold">EXTREME</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-[10px] text-slate-500 block mb-1">KNOWN ENTITY</span>
                      <span className="text-sm font-bold text-secondary">Ignis the Scourge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interface Overlays */}
        {/* Region Header */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-slate-950/90 backdrop-blur-md border-l-4 border-primary p-4 shadow-2xl">
            <h1 className="font-headline text-2xl font-black text-primary tracking-tight leading-none">THE WHISPERING WOODS</h1>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-medium">Sector 04 - High Danger Zone</p>
          </div>
        </div>

        {/* Travel Tracker Panel */}
        <div className="absolute bottom-6 left-6 z-10 w-80">
          <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded p-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
              <span className="font-headline font-bold text-xs text-secondary flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">directions_walk</span>
                Travel Tracker
              </span>
              <span className="text-[10px] text-slate-500">ACTIVE SESSION</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Current Distance</div>
                  <div className="text-xl font-headline font-bold text-on-surface">14.2 km</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Est. Time</div>
                  <div className="text-xl font-headline font-bold text-primary">6h 15m</div>
                </div>
              </div>
              <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-2xl">thunderstorm</span>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Heavy Mist & Thunder</div>
                    <div className="text-[10px] text-slate-400">-2 Perception | Difficult Terrain</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 bg-slate-900 border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:bg-slate-800 transition-colors rounded">Log Rest</button>
                <button className="py-2 bg-violet-600 border border-violet-500 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-violet-500 transition-colors rounded">Start Enc</button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-6 right-6 z-10 w-56">
          <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded p-4 shadow-2xl">
            <div className="text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest border-b border-slate-800 pb-2">Map Legend</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-4 h-4 border border-secondary rounded-full flex items-center justify-center text-[10px] text-secondary">
                  <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                </div>
                <span>Settlement</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-4 h-4 border border-primary rounded-full flex items-center justify-center text-[10px] text-primary">
                  <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                </div>
                <span>Ancient Ruin</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-4 h-4 border border-tertiary rounded-full flex items-center justify-center text-[10px] text-tertiary">
                  <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
                </div>
                <span>Natural Hazard</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-4 h-4 bg-tertiary/20 border border-tertiary rounded rotate-45 flex items-center justify-center text-[10px] text-tertiary">
                  <span className="material-symbols-outlined text-[10px] -rotate-45" style={{ fontVariationSettings: "'FILL' 1" }}>skull</span>
                </div>
                <span>Boss Lair</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compass & Zoom Controls */}
        <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
          <div className="bg-slate-950/90 border border-slate-800 p-2 flex flex-col gap-2 shadow-xl rounded">
            <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors rounded">
              <span className="material-symbols-outlined">add</span>
            </button>
            <div className="h-[1px] bg-slate-800 mx-1"></div>
            <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors rounded">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
          <div className="bg-slate-950/90 border border-slate-800 w-12 h-12 flex items-center justify-center text-primary shadow-xl rounded">
            <span className="material-symbols-outlined text-2xl">explore</span>
          </div>
        </div>

        {/* Bottom Data Strip (Bloomberg Terminal Style) */}
        <div className="absolute bottom-0 w-full z-20 bg-slate-950/95 border-t border-slate-800 py-1 px-4 flex items-center justify-between text-[10px] font-mono tracking-tighter">
          <div className="flex gap-4">
            <span className="text-slate-500">SYSTEM: <span className="text-emerald-500">OPERATIONAL</span></span>
            <span className="text-slate-500">LAT: <span className="text-slate-300">45.23.01.N</span></span>
            <span className="text-slate-500">LONG: <span className="text-slate-300">12.11.88.W</span></span>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold">PARTY POSITION: 30.0 / 40.0</span>
            <span className="text-slate-500">ENTITY COUNT: <span className="text-secondary">42 DETECTED</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-primary"></div>
              <div className="w-1 h-3 bg-primary/60"></div>
              <div className="w-1 h-3 bg-primary/30"></div>
              <div className="w-1 h-3 bg-slate-800"></div>
            </div>
            <span className="text-slate-400">SIGNAL STRENGTH: OPTIMAL</span>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .map-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
        }
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 50%);
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
}
