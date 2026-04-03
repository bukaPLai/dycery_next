'use client';

export default function ActiveQuestsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body antialiased selection:bg-amber-500/30 selection:text-amber-200 overflow-hidden flex flex-col">
      {/* TopNavBar */}
      <header className="bg-slate-950 text-amber-500 font-mono text-sm tracking-tight border-b border-slate-800 flex justify-between items-center px-6 h-14 w-full shrink-0 z-50">
        <div className="flex items-center gap-8">
          <span className="text-xl font-headline font-black text-amber-600 uppercase tracking-widest">Dycery Terminal</span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-400 hover:text-amber-300 transition-colors duration-150 py-1" href="#">Campaign: Whispers of the Void</a>
            <a className="text-slate-400 hover:text-amber-300 transition-colors duration-150 py-1" href="#">03:45:12</a>
            <a className="text-slate-400 hover:text-amber-300 transition-colors duration-150 py-1" href="#">Round 14</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 border border-slate-800 rounded">
            <span className="text-[10px] text-slate-500 uppercase">Signal</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            <span className="font-bold text-amber-500">XJ7-9R2</span>
          </div>
          <button className="bg-amber-600 text-slate-950 font-bold px-4 py-1 hover:bg-amber-500 transition-colors">JOIN: SESSION</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar - Unified Style */}
        <aside className="w-64 flex flex-col border-r border-slate-800 bg-slate-950 shrink-0 z-40">
          {/* Brand Header */}
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded flex items-center justify-center border border-amber-500/30">
                <span className="material-symbols-outlined text-amber-500">terminal</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-amber-600 tracking-tighter font-headline uppercase leading-none">GM Console</h1>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mt-1">Dungeon Terminal</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 mt-2 px-3 space-y-1 overflow-y-auto">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-150 font-headline font-medium tracking-tight group" href="#">
              <span className="material-symbols-outlined text-amber-500/50 group-hover:text-amber-500">casino</span>
              <span>Dice Roller</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-150 font-headline font-medium tracking-tight group" href="#">
              <span className="material-symbols-outlined text-amber-500/50 group-hover:text-amber-500">format_list_numbered</span>
              <span>Initiative</span>
            </a>
            {/* Active State */}
            <a className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 text-amber-500 border-r-2 border-amber-500 transition-all duration-150 font-headline font-bold tracking-tight" href="#">
              <span className="material-symbols-outlined">assignment_late</span>
              <span>Active Quests</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-150 font-headline font-medium tracking-tight group" href="#">
              <span className="material-symbols-outlined text-amber-500/50 group-hover:text-amber-500">map</span>
              <span>Map</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-150 font-headline font-medium tracking-tight group" href="#">
              <span className="material-symbols-outlined text-amber-500/50 group-hover:text-amber-500">groups</span>
              <span>NPCs</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all duration-150 font-headline font-medium tracking-tight group" href="#">
              <span className="material-symbols-outlined text-amber-500/50 group-hover:text-amber-500">menu_book</span>
              <span>Bestiary</span>
            </a>
          </nav>

          {/* Profile / Status Area */}
          <div className="p-4 border-t border-slate-900 bg-slate-950/50">
            <div className="flex items-center gap-3">
              <img alt="GM Avatar" className="w-10 h-10 rounded grayscale border border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI3Ie5qqZ7aNxWFHxx1o2qlf5cXOQNdUmCXgvvCeeZ4XQC3naV0iYyLrmPiXvvcZij50vzritdmQ7YaSeT-yiM4Yc0xnn7auc0nRlNps-0iv5gtajqUdKpzqo8bwk3McXJ_Pc8x-FphqdhK3lxYMhQZBlLGY0Qb7wmTgBhMs-wWfkBiGxN2mwdP-eFK6yXVLkXndsmeGouM7hQdLf6rrqjzukI_Ou_ReIiIqfWYX7D7I1Lm1lFDRBF5KddguIAnEVWVOIp1R8JV_kW" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-300 truncate font-headline uppercase">GM_ARCHITECT</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase">System Active</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <a className="text-[10px] text-slate-500 flex items-center gap-2 hover:text-slate-300 transition-all uppercase tracking-widest font-mono" href="#">
                <span className="material-symbols-outlined text-xs">settings</span> Settings
              </a>
              <a className="text-[10px] text-slate-500 flex items-center gap-2 hover:text-red-400 transition-all uppercase tracking-widest font-mono" href="#">
                <span className="material-symbols-outlined text-xs">logout</span> Log Out
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8" style={{ backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-7xl mx-auto">
            {/* Context Header */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-1 w-8 bg-amber-600"></span>
                  <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest">Mission Command</span>
                </div>
                <h1 className="text-4xl font-headline font-bold text-slate-100 uppercase tracking-tight">Active Quests</h1>
              </div>
              <button className="group relative flex items-center gap-2 bg-slate-900 border border-slate-700 px-6 py-3 font-mono text-sm hover:border-amber-500 hover:bg-slate-800 transition-all">
                <span className="material-symbols-outlined text-amber-500 group-hover:rotate-90 transition-transform">add</span>
                <span>DRAFT NEW QUEST</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 animate-pulse"></div>
              </button>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Quest Card 1: Critical */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 border-l-4 border-l-red-500 p-6 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">warning</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-red-400 bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20 uppercase">Critical Priority</span>
                    <h3 className="text-xl font-headline font-bold mt-2 text-slate-100 uppercase tracking-wide">The Shadowfell Rift</h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">ID: QST-0942-VOID</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-red-500 font-mono text-sm font-bold">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      02 DAYS REMAINING
                    </div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-tighter mt-1">Timeline Locked</span>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-slate-950/50 p-4 border border-slate-800/50">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500"></span> Current Objectives
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="material-symbols-outlined text-emerald-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="line-through decoration-slate-600">Secure the Sunless Citadel gate</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Intercept the Necromancer's ritual at Midnight
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Retrieve the Shard of Night from the altar
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="determined looking human male character in rugged leather armor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnkYmMJcf7KmDGGIrw4l-2toeis-cO0L-j6yrdZZeZdnT2ZX4TNLv4rEBcS5b8qIvKSpKDbvjvL64Jr2vS-8iAd_ENqPbdDxRIoR-ae24TgXdnhptg07ZmEesWghWxyQVjsiPlldreFPJahVXZNdAmEHnrrcMHwiUPj7OkWPOmqU2vt9NuaHHyFHdyCb_fR4ionw7rXa38UghxL_qKtWbrHywZJLdPFi7khxlmCi5BAvIayIWVbdA9qVNLsz4oE4xwU2YNZEmUMXdi" />
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="mysterious elf with silver hair and glowing blue eyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGMoL5SpTXNUycQYD_wr8J4wRfbIExZSjzVG1GSBvLXA_aMB-raznJK46QW5TCxwrgsGIsG_Dilc2Culdfo0Tp2L2QaASR750YOLUyo--NMKGqL8ntYQUeeY7wfPr0BSyFZwteFf5zVbW4jldj-c3EoAzKZ7Gp2gmMjm2nZwxzOj1BxMN4ETM4VIgvFzbFFvOifN8nk-KV2y9pa50AnnLD22F39RCHRlBo8kM4P_W5P6lq33I2ePBTUpn7mUQA1jKKP5Ef_GvZgJZB" />
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">+2</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-[10px] font-mono border border-slate-700 hover:bg-slate-800 transition-colors uppercase">Edit Log</button>
                    <button className="px-3 py-1.5 text-[10px] font-mono bg-amber-600 text-slate-950 hover:bg-amber-500 transition-colors font-bold uppercase">View Detailed Manifest</button>
                  </div>
                </div>
              </div>

              {/* Quest Card 2: Active */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 border-l-4 border-l-amber-500 p-6 flex flex-col relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase">Active Pursuit</span>
                    <h3 className="text-xl font-headline font-bold mt-2 text-slate-100 uppercase tracking-wide">The Missing Blacksmith</h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">ID: QST-1102-CITY</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                      <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                      NO TIME LIMIT
                    </div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-tighter mt-1">Primary Narrative</span>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-slate-950/50 p-4 border border-slate-800/50">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500"></span> Current Objectives
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="material-symbols-outlined text-emerald-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="line-through decoration-slate-600">Investigate the forge for clues</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Locate Garin's hidden workshop in the sewers
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Rescue Garin from the Wererat gang
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="young woman with a determined expression, wearing a silver circlet and purple robes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqgXXdmzLPqu55mAl8UDZJ14unL7B41RSSUrHrurY_khxHmtHWoceu3q8g9KXMRdh8Ys1CPQrbRKVmRIeRkSvpmbAeEfXTGJu3DOhdunQSRRyMYQeMW866-yqDY_pVEW3cTJR7EnHg1KxkmOiM7AO7ZSbrgYUoT66NuMbj-xSMfsib1hsKz-MCuRozlGLnr0aCa_g8qR12q_4mZuDl1HlxZk2yPJJzP-NWZxW_q3oAU83m2YzUNlPxxHY2JAZ3UXxA1ehM350Adw61" />
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="muscular dwarven warrior with a braided red beard and runic tattoos" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5CAUNFBz911FqV_nYkTyJ7u0RvKQOm0wS56BFM6YHQjPFhff0htxc_q4XXLqIpwLrhLk3-5aADe2FE9xmvtr2jwoUa_KK9tZQu72eMwh9u-BmngHA-hh-4imyxJ0Z3IeM6N4e2BhswSz8803cycF-HFNYZfzjLhrsRuXYz1NkWU6T14XuC1nGPju_0CJPkXi-rEwwS0w39hfnXVDoGvSna6-obsNxx_iPO7-BU3H_Mg70CR9Kr0NvWR5ifasA8jnGU2UYu1YfPPPx" />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-[10px] font-mono border border-slate-700 hover:bg-slate-800 transition-colors uppercase">Edit Log</button>
                    <button className="px-3 py-1.5 text-[10px] font-mono bg-amber-600 text-slate-950 hover:bg-amber-500 transition-colors font-bold uppercase">View Detailed Manifest</button>
                  </div>
                </div>
              </div>

              {/* Quest Card 3: Side Quest */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 border-l-4 border-l-slate-600 p-6 flex flex-col relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-400/10 px-2 py-0.5 rounded border border-slate-400/20 uppercase">Side Objective</span>
                    <h3 className="text-xl font-headline font-bold mt-2 text-slate-100 uppercase tracking-wide">The Lost Library</h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">ID: QST-2231-EXPL</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                      <span className="material-symbols-outlined text-sm">explore</span>
                      EXPLORATION
                    </div>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="bg-slate-950/50 p-4 border border-slate-800/50">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-500"></span> Pending Milestones
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Find the map fragment in the Ruined Tower
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-100">
                        <span className="material-symbols-outlined text-slate-600 text-lg">radio_button_unchecked</span>
                        Decipher the Ancient Draconic texts
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="older scholar character with spectacles and dusty books" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3GfoNFggiDivbXHyqf2dgJn4rVsb0uwU9VIckSaauBduWpTe2XmPigUMc68xXlPAMtR6d4SJ6LosUqND7anRuIiy9DQZr3O3DJVMxwTZ4E1hS6q1ZwonpEYCsUNPi4b-PMlQU1O79q9uT9xxDICJLwDUbgoOX5uS-j_kHG-de-rxUUI6JKnNNT00W32eSTUfXVGmdFhek-V9jC_8pqD_zqwy14G7sHOHmd8gMKBYLFmUVmTwY_nNYGUE0ijXKc0knmm1mNGQkqicy" />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-[10px] font-mono border border-slate-700 hover:bg-slate-800 transition-colors uppercase">Edit Log</button>
                    <button className="px-3 py-1.5 text-[10px] font-mono bg-amber-600 text-slate-950 hover:bg-amber-500 transition-colors font-bold uppercase">View Detailed Manifest</button>
                  </div>
                </div>
              </div>

              {/* Empty Draft Placeholder */}
              <div className="border-2 border-dashed border-slate-800 p-6 flex flex-col items-center justify-center text-center group hover:border-amber-500/50 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-slate-700 group-hover:text-amber-500 transition-colors mb-3">note_add</span>
                <h3 className="text-sm font-mono font-bold text-slate-600 group-hover:text-amber-500 uppercase tracking-widest">Generate Task Shell</h3>
                <p className="text-[10px] text-slate-700 mt-1 uppercase">Click to define a new encounter or quest line</p>
              </div>
            </div>

            {/* Terminal Footer / Data Stream */}
            <div className="mt-12 bg-slate-950/80 border border-slate-800 p-4 font-mono text-[10px] overflow-hidden">
              <div className="flex justify-between items-center mb-2 text-amber-500">
                <span>SYSTEM_LOG::STREAM_ACTIVE</span>
                <span>VER: 4.2.1-AVERNA</span>
              </div>
              <div className="space-y-1 text-slate-600">
                <p>[03:44:58] INFO: Party entered Sector 4G - Shadowfell Perimeter.</p>
                <p>[03:45:01] WARN: Critical Quest 'The Shadowfell Rift' timer updated: -2 minutes remaining.</p>
                <p>[03:45:10] ACTION: GM updated milestone 'Investigate the forge' to STATE:COMPLETED.</p>
                <p className="animate-pulse">[03:45:12] IDLE: Waiting for player input in combat round 14...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
