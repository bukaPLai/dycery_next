'use client';

import { useState, useCallback } from 'react';

interface RollHistoryItem {
  id: string;
  result: number;
  dice: string;
  breakdown: string;
  label: string;
  timestamp: string;
  status: 'success' | 'resolved' | 'fail_crit';
}

interface GeneratorData {
  weather?: { name: string; description: string };
  tavern?: { name: string; atmosphere: string; price: string };
  loot?: { container: string; currency: string; item: string };
  npc?: { name: string; race: string; class: string; level: string; motive: string; quirk: string };
}

const DICE_TYPES = [
  { id: 'd4', label: 'D4', icon: 'change_history' },
  { id: 'd6', label: 'D6', icon: 'check_box_outline_blank' },
  { id: 'd8', label: 'D8', icon: 'square' },
  { id: 'd10', label: 'D10', icon: 'diamond' },
  { id: 'd12', label: 'D12', icon: 'pentagon' },
  { id: 'd20', label: 'D20', icon: 'hexagon', filled: true },
];

const WEATHER_OPTIONS = [
  { name: 'Thunderstorm', description: 'Heavy precipitation reduces visibility. Ranged attacks have disadvantage. Lightning strikes on natural 1s.' },
  { name: 'Dense Fog', description: 'Visibility halved. Perception checks at disadvantage beyond 30ft. Sound travels muffled.' },
  { name: 'Blizzard', description: 'Movement reduced to half. Cold damage per hour without proper gear. Visibility near zero.' },
  { name: 'Scorching Heat', description: 'Exhaustion checks every 2 hours. Water consumption doubled. Metal burns on contact.' },
  { name: 'Strong Winds', description: 'Ranged attacks disadvantaged. Light objects blown away. Advantage on spread fire saves.' },
];

const TAVERN_NAMES = [
  { name: 'The Broken Hilt', atmosphere: 'Rowdy', price: 'Modest' },
  { name: 'The Silver Tankard', atmosphere: 'Quiet', price: 'Expensive' },
  { name: 'The Wanderer\'s Rest', atmosphere: 'Peaceful', price: 'Budget' },
  { name: 'The Guttering Flame', atmosphere: 'Suspicious', price: 'Variable' },
  { name: 'The Dragon\'s Hoard', atmosphere: 'Grand', price: 'Premium' },
];

const LOOT_ITEMS = [
  { container: 'Small Pouch', currency: '12gp 8sp', item: 'Cracked Emerald' },
  { container: 'Wooden Chest', currency: '45gp 12sp', item: 'Silver Locket' },
  { container: 'Hidden Cache', currency: '28gp 50sp', item: 'Potion of Healing' },
  { container: 'Goblin Pack', currency: '3gp 15sp', item: 'Tarnished Dagger' },
];

const NPC_NAMES = [
  { name: 'Kaelen Vance', race: 'Human', class: 'Rogue', level: '3', motive: 'Seeking lost family heirloom.', quirk: 'Constantly flips a lead coin.' },
  { name: 'Mira Thornwood', race: 'Elf', class: 'Wizard', level: '5', motive: 'Researching ancient ruins.', quirk: 'Speaks in rhymes when tired.' },
  { name: 'Brock Ironfoot', race: 'Dwarf', class: 'Fighter', level: '4', motive: 'Looking for worthy opponents.', quirk: 'Collects enemy weapons.' },
  { name: 'Sera Nightwhisper', race: 'Halfling', class: 'Bard', level: '2', motive: 'Spreading rumors for coin.', quirk: 'Hums battle hymns unconsciously.' },
];

function MaterialSymbol({ icon, filled = false, className = '' }: { icon: string; filled?: boolean; className?: string }) {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
    >
      {icon}
    </span>
  );
}

export default function DicePage() {
  const [diceInput, setDiceInput] = useState('');
  const [selectedDice, setSelectedDice] = useState('d20');
  const [isRolling, setIsRolling] = useState(false);
  const [currentRoll, setCurrentRoll] = useState<RollHistoryItem | null>(null);
  const [history, setHistory] = useState<RollHistoryItem[]>([
    { id: '1', result: 28, dice: '2d20[12, 11] + 5', breakdown: '2d20[12, 11] + 5', label: 'CRITICAL_CHALLENGE // DC 25', timestamp: '14:22:01', status: 'success' },
    { id: '2', result: 9, dice: '1d12[4] + 5', breakdown: '1d12[4] + 5', label: 'DAMAGE: FIRE_BREATH', timestamp: '14:18:54', status: 'resolved' },
    { id: '3', result: 4, dice: '1d20[1] + 3', breakdown: '1d20[1] + 3', label: 'SAVING_THROW: DEX', timestamp: '14:15:22', status: 'fail_crit' },
    { id: '4', result: 17, dice: '3d6[4, 5, 2] + 6', breakdown: '3d6[4, 5, 2] + 6', label: 'HEALING_WORD: T2', timestamp: '14:12:10', status: 'resolved' },
  ]);
  const [generators, setGenerators] = useState<GeneratorData>({
    weather: WEATHER_OPTIONS[0],
    tavern: TAVERN_NAMES[0],
    loot: LOOT_ITEMS[0],
    npc: NPC_NAMES[0],
  });

  const rollDice = useCallback((sides: number, count: number = 1, modifier: number = 0) => {
    const rolls: number[] = [];
    for (let i = 0; i < count; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }
    const total = rolls.reduce((sum, r) => sum + r, 0) + modifier;
    return { rolls, total, modifier };
  }, []);

  const parseDiceNotation = (notation: string) => {
    const match = notation.match(/^(\d+)d(\d+)([+-]\d+)?$/i);
    if (!match) return null;
    const count = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;
    return { count, sides, modifier };
  };

  const handleRoll = useCallback(() => {
    setIsRolling(true);
    
    let rollResult;
    if (diceInput.trim()) {
      const parsed = parseDiceNotation(diceInput);
      if (parsed) {
        rollResult = rollDice(parsed.sides, parsed.count, parsed.modifier);
      } else {
        rollResult = rollDice(20, 1, 0);
      }
    } else {
      const sides = parseInt(selectedDice.replace('d', ''));
      rollResult = rollDice(sides, 1, 0);
    }

    setTimeout(() => {
      const newRoll: RollHistoryItem = {
        id: Date.now().toString(),
        result: rollResult.total,
        dice: diceInput || `1${selectedDice}`,
        breakdown: diceInput || `1${selectedDice}[${rollResult.rolls.join(', ')}]`,
        label: 'ROLL_RESULT',
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
        status: 'resolved',
      };
      
      setCurrentRoll(newRoll);
      setHistory(prev => [newRoll, ...prev.slice(0, 19)]);
      setIsRolling(false);
    }, 600);
  }, [diceInput, selectedDice, rollDice]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRoll();
    }
  };

  const refreshGenerator = (type: 'weather' | 'tavern' | 'loot' | 'npc') => {
    switch (type) {
      case 'weather':
        setGenerators(prev => ({
          ...prev,
          weather: WEATHER_OPTIONS[Math.floor(Math.random() * WEATHER_OPTIONS.length)],
        }));
        break;
      case 'tavern':
        setGenerators(prev => ({
          ...prev,
          tavern: TAVERN_NAMES[Math.floor(Math.random() * TAVERN_NAMES.length)],
        }));
        break;
      case 'loot':
        setGenerators(prev => ({
          ...prev,
          loot: LOOT_ITEMS[Math.floor(Math.random() * LOOT_ITEMS.length)],
        }));
        break;
      case 'npc':
        setGenerators(prev => ({
          ...prev,
          npc: NPC_NAMES[Math.floor(Math.random() * NPC_NAMES.length)],
        }));
        break;
    }
  };

  return (
    <>
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .dice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 0.5rem;
        }
        .terminal-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: #b45309;
        }
        @keyframes dice-roll {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(15deg) scale(1.1); }
          50% { transform: rotate(-10deg) scale(0.95); }
          75% { transform: rotate(5deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .dice-rolling {
          animation: dice-roll 0.6s ease-in-out;
        }
      `}</style>

      <div className="pl-64 pt-14 min-h-screen bg-slate-950">
        <div className="p-8 grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* LEFT COLUMN: Dice Controls */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Precision Roller Card */}
            <section className="bg-slate-900/50 border border-amber-900/20 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">
                <MaterialSymbol icon="architecture" className="text-6xl text-amber-500" />
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 w-full">
                  <label className="block font-headline text-amber-500 text-xs uppercase tracking-widest mb-3">
                    Precision Input
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-slate-950 border-amber-900/30 text-amber-400 font-mono text-3xl p-4 focus:ring-0 focus:border-amber-500/50 placeholder:text-slate-800 transition-all uppercase"
                      placeholder="2d20+5"
                      type="text"
                      value={diceInput}
                      onChange={(e) => setDiceInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 pointer-events-none">
                      <span className="text-[10px] bg-amber-900/20 text-amber-500 px-2 py-1 border border-amber-500/20">CTRL</span>
                      <span className="text-[10px] bg-amber-900/20 text-amber-500 px-2 py-1 border border-amber-500/20">ENTER</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleRoll}
                  className="w-full md:w-auto h-[74px] px-12 bg-amber-500 hover:bg-amber-400 text-slate-950 font-headline font-black text-2xl tracking-widest active:scale-95 transition-all shadow-lg shadow-amber-500/10"
                >
                  ROLL
                </button>
              </div>

              {/* Quick Dice Buttons */}
              <div className="mt-8">
                <label className="block font-headline text-slate-500 text-[10px] uppercase tracking-widest mb-4">
                  Quick Strike Array
                </label>
                <div className="dice-grid">
                  {DICE_TYPES.map((die) => (
                    <button
                      key={die.id}
                      onClick={() => setSelectedDice(die.id)}
                      className={`flex flex-col items-center justify-center aspect-square bg-slate-950 border hover:border-amber-500/50 hover:bg-amber-900/10 transition-all group/die ${
                        selectedDice === die.id
                          ? 'border-amber-500/40 bg-amber-500/5'
                          : 'border-amber-900/20'
                      }`}
                    >
                      <MaterialSymbol
                        icon={die.icon}
                        filled={die.filled}
                        className={`text-amber-500 group-hover/die:scale-110 transition-transform ${
                          selectedDice === die.id ? 'text-amber-500' : ''
                        }`}
                      />
                      <span className={`font-mono text-xs mt-1 ${
                        selectedDice === die.id ? 'text-amber-500 font-bold' : 'text-slate-500'
                      }`}>
                        {die.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Current Roll Display */}
            {currentRoll && (
              <section className={`bg-slate-900/50 border border-amber-500/30 p-6 ${isRolling ? 'dice-rolling' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`font-mono text-4xl font-bold ${
                      currentRoll.status === 'success' ? 'text-amber-500' :
                      currentRoll.status === 'fail_crit' ? 'text-rose-400' : 'text-slate-400'
                    }`}>
                      {currentRoll.result}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500 font-mono uppercase">{currentRoll.breakdown}</div>
                      <div className="text-xs text-slate-400">{currentRoll.label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-600 font-mono">{currentRoll.timestamp}</div>
                  </div>
                </div>
              </section>
            )}

            {/* Session History */}
            <section className="bg-slate-950/40 border border-slate-800 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline text-slate-200 text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <MaterialSymbol icon="history" className="text-amber-500" />
                  Session History
                </h2>
                <span className="text-[10px] text-slate-600 font-mono">BUFFER_CLR: DISABLED</span>
              </div>
              <div className="space-y-3 terminal-scroll max-h-[400px] overflow-y-auto pr-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 border-l-2 flex items-center justify-between group ${
                      item.status === 'success' ? 'bg-slate-900/30 border-amber-500' :
                      item.status === 'fail_crit' ? 'bg-slate-900/10 border-rose-400' :
                      'bg-slate-900/10 border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`font-mono text-2xl font-bold ${
                        item.status === 'success' ? 'text-amber-500' :
                        item.status === 'fail_crit' ? 'text-rose-400' : 'text-slate-400'
                      }`}>
                        {item.result}
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-500 font-mono uppercase">{item.dice}</div>
                        <div className="text-[10px] text-slate-400">{item.label}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-600 font-mono">{item.timestamp}</div>
                      <div className={`text-[10px] font-bold uppercase tracking-tighter ${
                        item.status === 'success' ? 'text-amber-500/50' :
                        item.status === 'fail_crit' ? 'text-rose-400/50' :
                        'text-slate-700'
                      }`}>
                        {item.status === 'success' ? 'SUCCESS' : item.status === 'fail_crit' ? 'FAIL_CRIT' : 'RESOLVED'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Quick Generators */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-amber-500 text-xs uppercase tracking-widest font-bold">
                ORACLE_SUBSYSTEMS
              </h3>
              <div className="h-[1px] flex-1 bg-amber-900/20 ml-4"></div>
            </div>

            {/* Weather Gen */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 group hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">GEN: WEATHER</span>
                  <h4 className="font-headline text-slate-200 text-sm font-bold uppercase">
                    {generators.weather?.name}
                  </h4>
                </div>
                <button onClick={() => refreshGenerator('weather')} className="p-1 hover:text-amber-500 transition-colors">
                  <MaterialSymbol icon="refresh" className="text-sm" />
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed italic border-t border-slate-800/50 pt-2">
                {generators.weather?.description}
              </p>
            </div>

            {/* Tavern Name Gen */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 group hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">GEN: TAVERN_ID</span>
                  <h4 className="font-headline text-slate-200 text-sm font-bold uppercase">
                    {generators.tavern?.name}
                  </h4>
                </div>
                <button onClick={() => refreshGenerator('tavern')} className="p-1 hover:text-amber-500 transition-colors">
                  <MaterialSymbol icon="refresh" className="text-sm" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-slate-800/50 pt-2">
                <div className="text-[10px] text-slate-500">
                  ATMOS: <span className="text-amber-500/80">{generators.tavern?.atmosphere}</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  PRICE: <span className="text-amber-500/80">{generators.tavern?.price}</span>
                </div>
              </div>
            </div>

            {/* Quick Loot Gen */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 group hover:border-amber-500/30 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block mb-1">GEN: LOOT_TABLE</span>
                  <h4 className="font-headline text-slate-200 text-sm font-bold uppercase">
                    {generators.loot?.container}
                  </h4>
                </div>
                <button onClick={() => refreshGenerator('loot')} className="p-1 hover:text-amber-500 transition-colors">
                  <MaterialSymbol icon="refresh" className="text-sm" />
                </button>
              </div>
              <div className="space-y-1 border-t border-slate-800/50 pt-2 font-mono text-[10px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">CURRENCY</span>
                  <span className="text-amber-500">{generators.loot?.currency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">ITEM</span>
                  <span className="text-slate-300 italic">{generators.loot?.item}</span>
                </div>
              </div>
            </div>

            {/* Random NPC Gen */}
            <div className="bg-slate-900/80 border border-amber-500/20 p-4 group hover:border-amber-500/50 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] text-amber-500/50 font-mono block mb-1">GEN: ENTITY_NPC</span>
                  <h4 className="font-headline text-amber-500 text-sm font-bold uppercase">
                    {generators.npc?.name}
                  </h4>
                </div>
                <button onClick={() => refreshGenerator('npc')} className="p-1 text-amber-500">
                  <MaterialSymbol icon="refresh" className="text-sm" />
                </button>
              </div>
              <div className="space-y-2 border-t border-amber-900/20 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 border border-slate-800 text-slate-400">
                    {generators.npc?.race}
                  </span>
                  <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 border border-slate-800 text-slate-400">
                    {generators.npc?.class} (Lvl {generators.npc?.level})
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  MOTIVE: {generators.npc?.motive}<br />
                  QUIRK: {generators.npc?.quirk}
                </p>
              </div>
            </div>

            {/* System Diagnostic Decorator */}
            <div className="mt-12 p-4 border border-slate-800 opacity-30 pointer-events-none">
              <div className="flex justify-between text-[8px] font-mono text-slate-600 mb-2">
                <span>CORE_TEMP: 34C</span>
                <span>LATENCY: 12ms</span>
              </div>
              <div className="h-1 w-full bg-slate-900 overflow-hidden">
                <div className="h-full w-2/3 bg-amber-900/40"></div>
              </div>
              <div className="mt-2 text-[8px] font-mono text-slate-600 uppercase">
                Active Process: Rolling_Engine_v4.2.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
