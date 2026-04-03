"use client";

import { useState } from "react";

export default function JoinSessionPage() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    // Only take the last character if pasted
    newCode[index] = value.slice(-1).toUpperCase();
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
      {/* Minimal Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-surface-variant bg-surface-low sticky top-0 z-10">
        <a
          className="flex items-center gap-2 text-on-surface hover:text-violet-400 transition-colors group"
          href="#"
        >
          <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="text-sm font-medium tracking-wide">Back to Menu</span>
        </a>
        <div className="flex items-center gap-3">
          <div className="size-5 text-violet-400">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="font-headline text-lg font-bold tracking-tight text-on-surface">
            DYCERY TERMINAL
          </h2>
        </div>
        <div className="w-[100px]" /> {/* Spacer to center the logo */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Ambient Background Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(218, 226, 253, 0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Join Card */}
        <div className="w-full max-w-md bg-surface-mid border border-outline-variant rounded-lg p-8 shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">
              Establish Uplink
            </h1>
            <p className="text-on-surface-var text-sm leading-relaxed">
              Enter the 6-character session code provided by your Dungeon Master to
              connect to the campaign matrix.
            </p>
          </div>

          {/* 6-Character Code Input */}
          <div className="flex justify-center mb-8">
            <fieldset className="relative flex gap-3 items-center">
              {[0, 1, 2].map((i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  className="code-input flex h-16 w-12 text-center text-2xl font-bold bg-surface border border-outline-variant rounded text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase transition-colors"
                  maxLength={1}
                  placeholder="-"
                  type="text"
                  value={code[i]}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
              <div className="flex items-center justify-center w-4 text-outline-variant font-bold">
                -
              </div>
              {[3, 4, 5].map((i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  className="code-input flex h-16 w-12 text-center text-2xl font-bold bg-surface border border-outline-variant rounded text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase transition-colors"
                  maxLength={1}
                  placeholder="-"
                  type="text"
                  value={code[i]}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </fieldset>
          </div>

          {/* Terminal Status Message */}
          <div className="flex items-center justify-center gap-2 mb-8 text-amber-500 text-sm animate-pulse opacity-80">
            <span className="material-symbols-outlined text-[16px]">wifi_tethering</span>
            <span>Awaiting DM connection...</span>
          </div>

          {/* Initialize Join Button */}
          <button
            className="w-full flex items-center justify-center gap-2 h-14 bg-amber-500 hover:bg-amber-600 text-slate-900 font-headline text-base font-bold rounded tracking-widest transition-colors shadow-[0_0_15px_rgba(255,185,95,0.2)] hover:shadow-[0_0_20px_rgba(255,185,95,0.4)]"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">login</span>
            INITIALIZE JOIN
          </button>

          {/* Help Link */}
          <div className="mt-6 text-center">
            <a
              className="text-xs text-violet-400 hover:text-violet-300 underline decoration-violet-400/30 underline-offset-4 transition-colors"
              href="#"
            >
              Where do I find my code?
            </a>
          </div>
        </div>
      </main>

      {/* Inline styles for fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap");

        .font-headline {
          font-family: "Space Grotesk", sans-serif;
        }

        .font-sans {
          font-family: "Inter", sans-serif;
        }

        .code-input {
          font-family: "JetBrains Mono", "Courier New", Courier, monospace;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0b1326;
        }
        ::-webkit-scrollbar-thumb {
          background: #2d3449;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #494454;
        }
      `}</style>
    </div>
  );
}
