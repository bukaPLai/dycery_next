"use client";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B101E] text-gray-100 flex flex-col relative overflow-x-hidden selection:bg-[#FFB042]/30">

      {/* Ambient glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#FFB042]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Nav */}
      <nav className="relative z-10 w-full px-8 py-6 flex items-center justify-between border-b border-[#2A344A] bg-[#0B101E]/80 backdrop-blur-md">
        <div className="flex items-center gap-12">
          <div className="font-headline font-black text-xl tracking-wider text-[#FFB042] leading-tight">
            DYCERY<br/>TERMINAL
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B9BB4]">
            <a className="hover:text-[#FFB042] transition-colors" href="#">Campaigns</a>
            <a className="text-gray-100 bg-white/10 px-3 py-1 rounded-md" href="#">Codex</a>
            <a className="hover:text-[#FFB042] transition-colors" href="#">Archives</a>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[#8B9BB4]">
          <button className="hover:text-[#FFB042] transition-colors">
            <span className="material-symbols-outlined">volume_up</span>
          </button>
          <button className="hover:text-[#FFB042] transition-colors">
            <span className="material-symbols-outlined">contrast</span>
          </button>
          <button className="hover:text-[#FFB042] transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 border-2 border-[#131A2A]" />
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6 py-20 w-full max-w-7xl mx-auto">

        <section className="text-center w-full max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#8B9BB4] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FFB042] animate-pulse" />
            SYSTEM ONLINE: V4.2.0
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-black text-[#FFB042] mb-6 leading-tight tracking-tight">
            THE DYCERY'S<br/>TERMINAL
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
            The Bloomberg Terminal for Game Masters. High-density data, sub-millisecond precision, and pure arcane efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="flex items-center gap-3 bg-[#FFB042] text-[#0B101E] font-bold px-8 py-4 rounded hover:bg-opacity-90 transition-all shadow-lg shadow-[#FFB042]/20">
              OPEN THE APP
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button className="flex items-center gap-3 bg-transparent border border-[#2A344A] text-gray-300 font-semibold px-8 py-4 rounded hover:bg-white/5 transition-all">
              PLAYER VIEW
              <span className="material-symbols-outlined">group</span>
            </button>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Dice Engine */}
            <div className="glass-panel rounded-xl p-8 flex flex-col lg:col-span-2 border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>casino</span>
              </div>
              <div className="mt-auto">
                <div className="text-xs font-bold tracking-widest text-[#FFB042]/80 mb-2">MODULE 01</div>
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Dice Engine</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed max-w-md">
                  Physics-simulated rolling with instant math resolution and critical hit detection.
                </p>
              </div>
            </div>

            {/* Initiative */}
            <div className="glass-panel rounded-xl p-8 flex flex-col border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>format_list_numbered</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Initiative</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Real-time turn tracking. Maintain flow without administrative overhead.
                </p>
              </div>
            </div>

            {/* Turn Timer */}
            <div className="glass-panel rounded-xl p-8 flex flex-col border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>timer</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Turn Timer</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Enforce decision-making under pressure with elegant temporal constraints.
                </p>
              </div>
            </div>

            {/* Encounter Builder */}
            <div className="glass-panel rounded-xl p-8 flex flex-col border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>swords</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Encounter Builder</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Dynamic CR scaling and intelligent loot tables for balanced battles.
                </p>
              </div>
            </div>

            {/* Quest Log */}
            <div className="glass-panel rounded-xl p-8 flex flex-col border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>map</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Quest Log</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Graph-based narrative tracking. Visualize branching storylines.
                </p>
              </div>
            </div>

            {/* Generators */}
            <div className="glass-panel rounded-xl p-8 flex flex-col lg:col-span-3 items-center text-center border border-[#2A344A]/60 hover:border-[#FFB042]/40 transition-all">
              <div className="w-14 h-14 rounded-lg bg-[#FFB042]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl" style={{color:'#FFB042'}}>auto_awesome</span>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-headline text-2xl font-bold mb-3 text-white">Procedural Generators</h3>
                <p className="text-[#8B9BB4] text-sm leading-relaxed">
                  Instant generation of authentic names, rich lore fragments, immersive taverns, and meaningful loot.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="relative z-10 w-full py-8 mt-12 text-center border-t border-[#2A344A]">
        <p className="text-[10px] tracking-widest text-gray-500 font-medium uppercase">
          Works Offline. Runs in your browser. © 2024 Arcanist Labs.
        </p>
      </footer>
    </div>
  );
}
