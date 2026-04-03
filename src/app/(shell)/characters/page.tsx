"use client";

import { useState } from "react";

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  hp: number;
  maxHp: number;
  mp?: number;
  maxMp?: number;
  abilities: string;
  imageUrl: string;
  isReady: boolean;
}

export default function CharactersPage() {
  const [characters] = useState<Character[]>([
    {
      id: "1",
      name: "Thorne",
      class: "Shadow Operative",
      level: 1,
      hp: 45,
      maxHp: 45,
      abilities: "DEX INT",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBjHN2PUWywUdTsN5eG76n0Zxii3kwfaQArSivFg0uKLQE8thDi0hZi8Sp7w1T0_pGHlaFjZSUQRVis7F4KxNb-WgARFqyy2fcakNzZSZXmd27nlBrm6b2gkD1LeIA1XFXx33kYbYP-4cRXl__O6sUzfS2wTlFlZ5CqvwDzqcX_E8Vz1zWK0iNBsmH_asU3VzGa4ov7G3Mq0FCqpkokOq0DiprHl6kRekkmCJ8zJhRpo_5FHqzZcNzq_j5i-_L1YgBU1cbD3j7RTHZ-",
      isReady: true,
    },
    {
      id: "2",
      name: "Elara",
      class: "Net-Weaver",
      level: 1,
      hp: 30,
      maxHp: 30,
      mp: 50,
      maxMp: 50,
      abilities: "INT WIS",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyv5EmvqQuS-ZN6Z3odgq9SF-46a77QE93cKucrerqahBkoe1yI5ZXqNlMbcaIgHokYZvKG41vCeo_Y6bRR8aGPcc_JJTJVsgcv6DLBaiLwbS7_nNIdvvsJoVQSUFwV-Nc8c3PEDodje4sGIA2-9HJKg3lnATcaW9yd_12kCtXAByUrn2iZVho8OHf73Dl0aTR-90zLNzAi1PBnOSITKM5TLLRZaYd0l8OdlpzAzZy0vinsJHHFxAgO7MRT_05W1U3Yjmw7ryFUF_x",
      isReady: true,
    },
    {
      id: "3",
      name: "Kael",
      class: "Juggernaut",
      level: 1,
      hp: 65,
      maxHp: 65,
      abilities: "STR CON",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhXaluhECZPl0ATc8OTmh-2penrwzfMWzZDYCfIz3dO2C3gkyFR0bRxqlxTME0JUbKQXCMJsIvfarbGJfU6nSi0slUg0TeO5-P1Y6LnjBu7565mrFsylitEoq61gKZhCAcKKZUdri4eI9kBeRx9wvergOiCrpeoa5Oh_UUSZaPGPdKFGE9NL3-d_uNXyioF11_MVKjn2he8sH_StOaVNxC9hjZwgFX0FJh35JfkymZ-ANuBH37pKErtXak-QMd5qCQhkVcVlrA_0nA",
      isReady: true,
    },
  ]);

  const hpPercentage = (hp: number, maxHp: number) => Math.round((hp / maxHp) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-body antialiased">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Back Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800/50 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center w-10 h-10 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-amber-500 tracking-widest uppercase">
                Campaign Setup
              </span>
              <h1 className="font-headline text-lg font-bold text-slate-200">
                Initialization Protocol
              </h1>
            </div>
          </div>
          {/* System Status */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-slate-700/20"
              style={{ backgroundColor: "#060e20" }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: "#ffb95f",
                  boxShadow: "0 0 8px rgba(255,185,95,0.6)",
                }}
              />
              <span className="text-xs font-mono text-slate-400">SYS.ONLINE</span>
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 md:px-12 lg:px-40 py-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header Section */}
            <div
              className="flex flex-col gap-2 p-4 rounded border relative overflow-hidden"
              style={{ backgroundColor: "#131b2e", borderColor: "#222a3d" }}
            >
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-800 to-transparent opacity-50 pointer-events-none" />
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-amber-500 text-3xl"
                  style={{ color: "#ffb95f" }}
                >
                  group
                </span>
                <p className="font-headline text-slate-200 tracking-tight text-3xl font-bold leading-tight">
                  03. Party Initialization
                </p>
              </div>
              <p className="text-slate-400 text-sm font-body max-w-2xl mt-1">
                Establish the operative unit. Minimum 1 entity required. Maximum
                capacity: 4 entities. Ensure balanced parameter distribution for
                optimal operational success in Sector 7.
              </p>
            </div>

            {/* Party Grid - 4 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="group relative flex flex-col gap-3 rounded border overflow-hidden hover:border-amber-500/50 transition-colors shadow-md"
                  style={{
                    backgroundColor: "#171f33",
                    borderColor: "rgba(73, 68, 84, 0.2)",
                    boxShadow: "0 4px 24px rgba(42,23,0,0.04)",
                  }}
                >
                  {/* Character Portrait */}
                  <div className="relative w-full aspect-4/5" style={{ backgroundColor: "#060e20" }}>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${character.imageUrl})` }}
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                      style={{ background: "linear-gradient(to top, #0b1326, rgba(11,19,38,0.4) 40%, transparent)" }}
                    />
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 flex gap-1">
                      <div
                        className="px-2 py-0.5 rounded flex items-center gap-1 border backdrop-blur-md"
                        style={{
                          backgroundColor: "#2d3449",
                          borderColor: "rgba(73, 68, 84, 0.3)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: "#d0bcff",
                            boxShadow: "0 0 4px rgba(208,188,255,0.8)",
                          }}
                        />
                        <span className="text-[10px] font-mono text-slate-200 uppercase">
                          RDY
                        </span>
                      </div>
                    </div>
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <h2 className="font-headline text-slate-200 text-xl font-bold leading-tight">
                          {character.name}
                        </h2>
                        <span className="text-xs font-mono text-violet-400">
                          LVL.{character.level.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                        {character.class}
                      </p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div
                    className="flex flex-col p-3 gap-2"
                    style={{ backgroundColor: "#171f33" }}
                  >
                    {/* HP Bar */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">HP</span>
                      <span className="text-slate-200">
                        {character.hp}/{character.maxHp}
                      </span>
                    </div>
                    <div
                      className="h-1 w-full rounded-sm overflow-hidden border"
                      style={{
                        backgroundColor: "#060e20",
                        borderColor: "rgba(73, 68, 84, 0.1)",
                      }}
                    >
                      <div
                        className="h-full"
                        style={{
                          width: `${hpPercentage(character.hp, character.maxHp)}%`,
                          backgroundColor: "#ffb3ad",
                        }}
                      />
                    </div>

                    {/* MP Bar (if character has MP) */}
                    {character.mp !== undefined && character.maxMp !== undefined && (
                      <>
                        <div className="flex items-center justify-between text-xs font-mono mt-1">
                          <span className="text-slate-400">MP</span>
                          <span style={{ color: "#d0bcff" }}>
                            {character.mp}/{character.maxMp}
                          </span>
                        </div>
                      </>
                    )}

                    {/* Abilities Row */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-mono text-amber-500">
                        {character.abilities}
                      </span>
                      <button className="text-slate-400 hover:text-rose-400 transition-colors">
                        <span className="material-symbols-outlined text-base">close</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Entity Slot */}
              <div
                className="group relative flex flex-col items-center justify-center gap-4 rounded border border-dashed hover:border-amber-500 transition-colors cursor-pointer min-h-[300px]"
                style={{
                  backgroundColor: "#060e20",
                  borderColor: "rgba(73, 68, 84, 0.4)",
                }}
              >
                {/* Circular Amber Plus Button */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(to bottom, #ffb95f, #c27c00)",
                    boxShadow: "0 0 16px rgba(255,185,95,0.3)",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-3xl font-bold"
                    style={{ color: "#0b1326" }}
                  >
                    add
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-headline text-slate-200 text-lg font-bold">
                    Add Entity
                  </p>
                  <p className="text-xs text-slate-400 font-mono">SLOT 04 [EMPTY]</p>
                </div>
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded"
                  style={{ backgroundColor: "rgba(255,185,95,0.05)" }}
                />
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex justify-end border-t border-slate-800/50 pt-6 mt-4">
              <button
                className="flex items-center justify-center h-12 px-8 rounded transition-all shadow-md"
                style={{
                  background: "linear-gradient(to bottom, #ffb95f, #c27c00)",
                  color: "#0b1326",
                  boxShadow: "0 0 12px rgba(255,185,95,0.2)",
                }}
              >
                <span className="text-sm font-body uppercase font-bold tracking-wide">
                  Initialize Protocol
                </span>
                <span
                  className="material-symbols-outlined ml-2 text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
