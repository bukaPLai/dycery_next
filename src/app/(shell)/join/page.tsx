"use client";

import React from "react";

export default function JoinSessionPage() {
  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-orange-900 bg-slate-950 text-slate-200 font-body">
      {/* Top Navigation */}
      <div className="relative flex h-auto w-full flex-col bg-slate-950 group/design-root overflow-x-hidden border-b border-slate-800 font-headline">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-10 py-3 bg-slate-900 rounded shadow-sm">
                {/* Left: Brand / Title */}
                <div className="flex items-center gap-4 text-slate-200">
                  <div className="size-6 text-violet-400">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                        fill="currentColor"
                      />
                      <path
                        clipRule="evenodd"
                        d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-slate-200 text-lg font-bold leading-tight tracking-[-0.015em] flex items-baseline gap-2">
                    <span className="text-amber-500 text-sm font-medium opacity-80 uppercase tracking-wider">
                      Join Session
                    </span>
                    <span className="font-mono text-xl text-violet-400 tracking-widest">
                      XJ7-9R2
                    </span>
                  </h2>
                </div>
                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                  {/* Copy Button */}
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 gap-2 text-sm font-bold leading-normal min-w-0 px-3 py-2 border border-slate-600/30 group">
                    <span className="material-symbols-outlined text-amber-500 opacity-70 group-hover:opacity-100 transition-opacity text-xl">
                      content_copy
                    </span>
                    <span>Copy Link</span>
                  </button>
                  {/* User Profile */}
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-600/50 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-violet-300">
                      person
                    </span>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-slate-900 rounded-lg p-8 border border-slate-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
          {/* Decorative Glow */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 bg-violet-400/10 rounded-full blur-[80px] pointer-events-none"
            style={{ backgroundColor: "rgba(208, 188, 255, 0.1)" }}
          />
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-full bg-slate-950 border border-slate-600/40 flex items-center justify-center mb-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)" }}
            >
              <span className="material-symbols-outlined text-4xl text-amber-500">
                explore
              </span>
            </div>

            {/* Title */}
            <h1 className="font-headline text-3xl font-bold text-slate-200">
              Waiting for Adventurers...
            </h1>

            {/* Description */}
            <p className="text-violet-300 font-body max-w-md mx-auto text-sm leading-relaxed">
              Share your session code to invite players to your campaign. The
              terminal is active and waiting for connections.
            </p>

            {/* Session Code Box */}
            <div
              className="w-full mt-8 p-6 bg-slate-950 rounded border border-slate-600/20 relative"
              style={{ backgroundColor: "#131b2e" }}
            >
              {/* Gradient Divider */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                  Session ID
                </span>
                <div className="flex items-center gap-4">
                  <code className="font-mono text-4xl font-bold text-amber-500 tracking-[0.2em]">
                    XJ7-9R2
                  </code>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8 w-full justify-center">
              {/* Start Session Now Button */}
              <button
                className="px-6 py-3 rounded bg-gradient-to-b from-violet-400 to-violet-600 text-slate-900 font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(208,188,255,0.2)] hover:shadow-[0_0_25px_rgba(208,188,255,0.4)] transition-all flex items-center gap-2"
                style={{ boxShadow: "0 0 15px rgba(208,188,255,0.2)" }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                Start Session Now
              </button>

              {/* Campaign Settings Button */}
              <button className="px-6 py-3 rounded bg-slate-800 border border-slate-600/50 text-slate-200 hover:bg-slate-700 transition-colors font-semibold text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">settings</span>
                Campaign Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
