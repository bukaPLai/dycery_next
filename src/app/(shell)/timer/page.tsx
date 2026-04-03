"use client";

import { useState } from "react";

export default function TimerPage() {
  const [timerPreset, setTimerPreset] = useState("60s");
  const [mobCount, setMobCount] = useState("med");
  const [environment, setEnvironment] = useState("Dungeon");
  const [difficulty, setDifficulty] = useState("Hard");
  const [monsterType, setMonsterType] = useState("Undead");
  const [roster, setRoster] = useState([
    { id: 1, name: "Vampire Spawn", cr: 5, type: "Undead", hp: 82, ac: 15, selected: true },
    { id: 2, name: "Ghast", cr: 2, type: "Undead", hp: 36, ac: 13, selected: true },
    { id: 3, name: "Ghast", cr: 2, type: "Undead", hp: 36, ac: 13, selected: true },
  ]);

  const toggleRosterItem = (id: number) => {
    setRoster((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body antialiased">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1 gap-6 w-full">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-slate-600 px-2 py-4">
            <div className="flex items-center gap-4">
              <button className="text-amber-500 hover:text-amber-400 transition-colors flex items-center justify-center size-10 rounded-lg hover:bg-slate-900">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h1 className="font-headline text-2xl font-bold text-slate-200">
                DM Shell{" "}
                <span className="text-slate-600 font-normal text-lg ml-2">/ Combat Hub</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-600/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-rose-400">favorite</span>
                <span className="font-mono text-sm text-slate-200">Party HP: 84%</span>
              </div>
              <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-600/30 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-violet-400">swords</span>
                <span className="font-mono text-sm text-slate-200">Round 4</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Turn Timer Module */}
            <section className="lg:col-span-5 bg-slate-800 rounded-lg border border-slate-600/20 p-6 flex flex-col gap-6 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between">
                <h2 className="font-headline text-xl font-bold text-slate-200 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500">timer</span> Turn Timer
                </h2>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded bg-slate-700 hover:bg-slate-600 text-slate-400 transition-colors"
                    title="Pause"
                  >
                    <span className="material-symbols-outlined text-sm">pause</span>
                  </button>
                  <button
                    className="p-2 rounded bg-slate-700 hover:bg-slate-600 text-slate-400 transition-colors"
                    title="Reset"
                  >
                    <span className="material-symbols-outlined text-sm">restart_alt</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-20 grow items-center justify-center rounded-lg bg-slate-950 border border-slate-600/30">
                    <p className="font-mono text-4xl font-bold text-slate-600">00</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Minutes</p>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-6">
                  <p className="font-mono text-3xl font-bold text-slate-600">:</p>
                </div>
                <div className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-20 grow items-center justify-center rounded-lg bg-slate-950 border border-rose-400/50 shadow-[0_0_15px_rgba(255,180,171,0.15)]">
                    <p className="font-mono text-5xl font-bold text-rose-400">12</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-rose-400 text-xs font-medium uppercase tracking-wider">Seconds</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-slate-400 font-medium">Presets</p>
                <div className="flex h-10 w-full items-center justify-center rounded bg-slate-950 p-1 border border-slate-600/20">
                  {["30s", "60s", "90s"].map((preset) => (
                    <label
                      key={preset}
                      className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-2 text-sm font-mono font-medium transition-colors ${
                        timerPreset === preset
                          ? "bg-slate-700 text-slate-200"
                          : "text-slate-400"
                      }`}
                    >
                      <span className="truncate">{preset}</span>
                      <input
                        className="invisible w-0"
                        name="timer_preset"
                        type="radio"
                        value={preset}
                        checked={timerPreset === preset}
                        onChange={(e) => setTimerPreset(e.target.value)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Encounter Generator Module */}
            <section className="lg:col-span-7 bg-slate-800 rounded-lg border border-slate-600/20 p-6 flex flex-col gap-6 shadow-lg shadow-black/20">
              <h2 className="font-headline text-xl font-bold text-slate-200 flex items-center gap-2">
                <span className="material-symbols-outlined text-violet-400">swords</span> Encounter Generator
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Environment
                  </label>
                  <select
                    className="bg-slate-950 border border-slate-600/30 text-slate-200 text-sm rounded focus:ring-1 focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5 font-body"
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                  >
                    <option>Dungeon</option>
                    <option>Urban</option>
                    <option>Wilderness</option>
                    <option>Underdark</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Difficulty
                  </label>
                  <select
                    className="bg-slate-950 border border-slate-600/30 text-slate-200 text-sm rounded focus:ring-1 focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5 font-body"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Deadly</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Monster Type
                  </label>
                  <select
                    className="bg-slate-950 border border-slate-600/30 text-slate-200 text-sm rounded focus:ring-1 focus:ring-violet-400 focus:border-violet-400 block w-full p-2.5 font-body"
                    value={monsterType}
                    onChange={(e) => setMonsterType(e.target.value)}
                  >
                    <option>Any</option>
                    <option>Undead</option>
                    <option>Beast</option>
                    <option>Humanoid</option>
                    <option>Aberration</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Count</label>
                  <div className="flex h-10 w-full items-center justify-center rounded bg-slate-950 p-1 border border-slate-600/20">
                    {[
                      { label: "1-3", value: "low" },
                      { label: "4-6", value: "med" },
                      { label: "Swarm", value: "high" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-2 text-sm font-mono font-medium transition-colors ${
                          mobCount === opt.value ? "bg-slate-700 text-slate-200" : "text-slate-400"
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        <input
                          className="invisible w-0"
                          name="mob_count"
                          type="radio"
                          value={opt.value}
                          checked={mobCount === opt.value}
                          onChange={(e) => setMobCount(e.target.value)}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-600/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-headline text-sm font-bold text-slate-200">Generated Roster</h3>
                  <span className="font-mono text-xs text-violet-400 bg-violet-400/10 px-2 py-1 rounded border border-violet-400/20">
                    Total XP: 1,800
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {roster.map((monster) => (
                    <div
                      key={monster.id}
                      className={`flex items-center gap-4 p-3 rounded border border-slate-600/20 transition-colors ${
                        monster.selected ? "bg-slate-950" : "bg-slate-900/50"
                      }`}
                    >
                      <input
                        checked={monster.selected}
                        onChange={() => toggleRosterItem(monster.id)}
                        className="w-4 h-4 rounded border-slate-600 text-violet-400 focus:ring-violet-400 focus:ring-offset-slate-950 bg-slate-950"
                        type="checkbox"
                      />
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-slate-200">{monster.name}</p>
                          <p className="text-xs text-slate-400 font-mono">
                            CR {monster.cr} • {monster.type}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <span className="bg-rose-400/20 text-rose-400 px-2 py-1 rounded text-xs font-mono border border-rose-400/30">
                            HP: {monster.hp}
                          </span>
                          <span className="bg-slate-700 text-slate-400 px-2 py-1 rounded text-xs font-mono border border-slate-600/30">
                            AC: {monster.ac}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded font-bold text-sm tracking-wide flex items-center justify-center gap-2 mt-2 bg-gradient-to-b from-amber-500 to-yellow-600 text-yellow-900 hover:shadow-[0_0_16px_rgba(238,152,0,0.4)] transition-shadow">
                <span className="material-symbols-outlined text-sm">add_circle</span>
                GENERATE &amp; ADD TO INITIATIVE
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
