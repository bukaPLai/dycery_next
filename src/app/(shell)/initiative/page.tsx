"use client";

import { useState } from "react";

interface Combatant {
  id: string;
  name: string;
  class: string;
  initiative: number;
  hp: number;
  maxHp: number;
  ac: number;
  imageUrl: string;
  isActive: boolean;
}

export default function InitiativeTrackerPage() {
  const [combatants, setCombatants] = useState<Combatant[]>([
    {
      id: "1",
      name: "Valerius",
      class: "Paladin",
      initiative: 22,
      hp: 45,
      maxHp: 45,
      ac: 18,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJQwkx8NU0cUOsy_i-HzArDzms1jCLzY0VzrSj5Sh_HYJJvQ2UzF19crBZJVGFOuDhmHCSxQ3Vne0eyN60lzJPzSyp1ZypF9SQsMZHXyjWu2TBgcb8t-psFwb8_yD3AS-KhuD1-Of6ewwSC5R3huENgkrHg0mUJH-gOlgSJ_Kimm1wIlwW521uzI0Z8mR53Nw8ld-vHb6rEMm77JpcrPELFx11_UUeVPpe3pFWxCCgO2mXVR-iPuwkdYclaScVdtqEIrIcWyKLPbLf",
      isActive: true,
    },
    {
      id: "2",
      name: "Lyra",
      class: "Rogue",
      initiative: 18,
      hp: 28,
      maxHp: 32,
      ac: 15,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAE4KeLuluYQ75tbeU1uaiyhpGKrDwwePi3pCidhiLH3F8kQgtFNCRwjDC7d9mp5ZTEJds0lLzzPVxQYMIHtgLHNc3_VPRHfeDQRfGauGBZ-V75iRtVWuq5OSsIV74YdFzNaXDVNE1LLZWUyK0kDxkKrTCCuocxbsNGVx5_yt5SG8P48LW_c4F0SM-TmGK-TAF3c-mFqEUJdb0jD2CgPZsEwdbkIJC-ah5_eabWa1ybbs6NQqDpHIu6-uuq4UaDizgjY35ptMEgFTuT",
      isActive: false,
    },
  ]);

  const [currentRound, setCurrentRound] = useState(14);

  const hpPercentage = (hp: number, maxHp: number) => Math.round((hp / maxHp) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body antialiased">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex h-full grow flex-col px-40 py-5">
          <div className="flex flex-col max-w-5xl flex-1 mx-auto w-full">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap px-10 py-3 bg-slate-800 rounded mb-6">
              <div className="flex items-center gap-4 text-slate-200">
                <button
                  aria-label="Go Back"
                  className="flex items-center justify-center p-2 rounded hover:bg-slate-700 text-violet-400"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-slate-200 font-headline text-lg font-bold leading-tight tracking-tight">
                  Initiative Tracker
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 border border-slate-700/20 text-slate-200 text-sm font-label font-bold leading-normal hover:bg-slate-700">
                  <span
                    className="material-symbols-outlined mr-2 text-violet-400"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    person_add
                  </span>
                  <span className="truncate">Add Player</span>
                </button>
                <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 border border-slate-700/20 text-slate-200 text-sm font-label font-bold leading-normal hover:bg-slate-700">
                  <span
                    className="material-symbols-outlined mr-2 text-rose-400"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    pest_control
                  </span>
                  <span className="truncate">Add Monster</span>
                </button>
                <button
                  className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 text-sm font-label font-bold leading-normal shadow-[0_0_15px_rgba(255,185,95,0.3)]"
                  style={{ background: "linear-gradient(to right, #ffb95f, #ee9800)" }}
                >
                  <span
                    className="material-symbols-outlined mr-2"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    settings
                  </span>
                  <span className="truncate">Options</span>
                </button>
              </div>
            </header>

            {/* Round Display */}
            <div className="flex flex-col items-center mb-8">
              <h1
                className="text-amber-500 font-headline tracking-widest text-3xl font-bold leading-tight px-4 text-center pb-2 pt-6"
                style={{ color: "#ffb95f" }}
              >
                ROUND {currentRound}
              </h1>
              <div className="flex justify-center w-full">
                <div className="flex gap-3 flex-wrap px-4 py-3 max-w-xl justify-center w-full">
                  <button
                    className="flex min-w-32 cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 text-base font-label font-bold leading-normal grow shadow-[0_0_15px_rgba(208,188,255,0.2)]"
                    style={{
                      background: "linear-gradient(to right, #d0bcff, #a078ff)",
                      color: "#340080",
                    }}
                  >
                    <span
                      className="material-symbols-outlined mr-2"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      skip_next
                    </span>
                    <span className="truncate">Next Turn</span>
                  </button>
                  <button
                    className="flex min-w-32 cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 border border-slate-700/20 bg-slate-900 text-slate-400 text-base font-label font-bold leading-normal hover:bg-slate-800"
                    style={{ borderColor: "rgba(73, 68, 84, 0.2)" }}
                  >
                    <span
                      className="material-symbols-outlined mr-2"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      sports_martial_arts
                    </span>
                    <span className="truncate">End Combat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Combatants Header */}
            <div className="flex justify-between items-end px-4 pb-3">
              <h2 className="text-slate-200 font-headline text-xl font-bold leading-tight tracking-tight">
                Combatants
              </h2>
              <span className="text-slate-400 text-sm font-mono">Count: {combatants.length}</span>
            </div>

            {/* Combatants List */}
            <div className="flex flex-col gap-3 px-4">
              {combatants.map((combatant) => (
                <div
                  key={combatant.id}
                  className={`flex items-center gap-4 px-4 py-3 rounded transition-colors group ${
                    combatant.isActive
                      ? "bg-slate-800 border border-amber-500 shadow-[0_0_20px_rgba(255,185,95,0.15)] relative"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                  style={{
                    borderColor: combatant.isActive ? "#ffb95f" : undefined,
                  }}
                >
                  {/* Active Turn Indicator */}
                  {combatant.isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l"
                      style={{ backgroundColor: "#ffb95f" }}
                    />
                  )}

                  {/* Drag Handle */}
                  <div className="cursor-grab text-slate-700 hover:text-slate-200 opacity-50 group-hover:opacity-100">
                    <span className="material-symbols-outlined">drag_indicator</span>
                  </div>

                  {/* Initiative */}
                  <div className="shrink-0 w-12 text-center">
                    <p
                      className={`font-mono text-xl font-bold leading-normal ${
                        combatant.isActive ? "text-amber-500" : "text-slate-200"
                      }`}
                      style={{ color: combatant.isActive ? "#ffb95f" : undefined }}
                    >
                      {combatant.initiative}
                    </p>
                  </div>

                  {/* Avatar */}
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border-2"
                    style={{
                      backgroundImage: `url(${combatant.imageUrl})`,
                      borderColor: combatant.isActive ? "#ffb95f" : "#494454",
                    }}
                  />

                  {/* Name & Class */}
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-baseline gap-2">
                      <p className="text-slate-200 font-headline text-lg font-bold leading-normal">
                        {combatant.name}
                      </p>
                      <p className="text-slate-700 text-sm font-normal leading-normal">
                        {combatant.class}
                      </p>
                    </div>
                    {combatant.isActive && (
                      <p
                        className="text-amber-500 text-sm font-label font-medium leading-normal animate-pulse"
                        style={{ color: "#ffb95f" }}
                      >
                        Current Turn
                      </p>
                    )}
                  </div>

                  {/* HP & AC */}
                  <div className="flex items-center gap-4">
                    {/* HP */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-700 text-xs font-mono">HP</span>
                        <input
                          className="w-12 text-center text-slate-200 font-mono text-sm rounded py-1 px-1 bg-slate-950 border border-slate-700/20 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          style={{
                            backgroundColor: "#060e20",
                            borderColor: "rgba(73, 68, 84, 0.2)",
                          }}
                          type="text"
                          defaultValue={combatant.hp}
                        />
                        <span className="text-slate-700 text-xs font-mono">/{combatant.maxHp}</span>
                      </div>
                      <div className="w-full h-1 bg-slate-950">
                        <div
                          className="h-full"
                          style={{
                            width: `${hpPercentage(combatant.hp, combatant.maxHp)}%`,
                            backgroundColor: "#ffb3ad",
                          }}
                        />
                      </div>
                    </div>

                    {/* AC */}
                    <div className="flex flex-col items-end w-16">
                      <span className="text-slate-700 text-xs font-mono mb-1">AC</span>
                      <input
                        className="w-12 text-center text-slate-200 font-mono text-sm rounded py-1 px-1 bg-slate-950 border border-slate-700/20 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        style={{
                          backgroundColor: "#060e20",
                          borderColor: "rgba(73, 68, 84, 0.2)",
                        }}
                        type="text"
                        defaultValue={combatant.ac}
                      />
                    </div>

                    {/* Delete Button */}
                    <button
                      className={`text-slate-700 hover:text-rose-400 p-1 rounded hover:bg-slate-700 transition-opacity ${
                        combatant.isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
