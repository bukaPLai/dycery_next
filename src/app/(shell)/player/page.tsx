'use client';

import React from 'react';

// Icon components for the menu items
const DiceSixIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"></path>
  </svg>
);

const SwordIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32,68,175.31,80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"></path>
  </svg>
);

const ScrollIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"></path>
  </svg>
);

const MapPinIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
  </svg>
);

const UsersIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
  </svg>
);

const SkullIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
    <path d="M92,104a28,28,0,1,0,28,28A28,28,0,0,0,92,104Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,92,144Zm72-40a28,28,0,1,0,28,28A28,28,0,0,0,164,104Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,164,144ZM128,16C70.65,16,24,60.86,24,116c0,34.1,18.27,66,48,84.28V216a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V200.28C213.73,182,232,150.1,232,116,232,60.86,185.35,16,128,16Zm44.12,172.69a8,8,0,0,0-4.12,7V216H152V192a8,8,0,0,0-16,0v24H120V192a8,8,0,0,0-16,0v24H88V195.69a8,8,0,0,0-4.12-7C56.81,173.69,40,145.84,40,116c0-46.32,39.48-84,88-84s88,37.68,88,84C216,145.83,199.19,173.69,172.12,188.69Z"></path>
  </svg>
);

const AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAdZs7ZVON5jL459WeAxWeQcOpmjQ7rMPJjWfX3lfrOw0le1KKzvKORVpViNUn6Ka1LP5Rmthgm7naW8MMVdWU2irtrw5Q3U5YUN1YJq8ckx4vPRJ0XnJ9wjNUwoIWzxP5TOfsc8-_kO3XtVfqxQ5zwIT5fTQrsS84Oj-gZtS3EcJONNkjbYt17fC_RBE0oa9qef8aogEXjY4tJEzJKREbb-kuucYuZWcOXXhbX_mDVCO7vS5n5fRae-l_zqVQh71DQdiomXs0nflHI";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href?: string;
}

function NavItem({ icon, label, isActive = false, href = '#' }: NavItemProps) {
  return (
    <a
      href={href}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer
        ${isActive
          ? 'bg-surface-hi text-primary'
          : 'hover:bg-surface-high text-on-surface-var'
        }
      `}
    >
      <div className={isActive ? 'text-primary' : 'text-on-surface-var'}>
        {icon}
      </div>
      <p className={`text-sm font-medium leading-normal font-label ${
        isActive ? 'text-on-surface' : 'text-on-surface-var'
      }`}>
        {label}
      </p>
    </a>
  );
}

export default function PlayerPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background dark group/design-root overflow-x-hidden font-headline">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-surface-low p-4 rounded-xl border border-surface-hi">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: `url("${AVATAR_URL}")` }}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-on-surface text-base font-medium leading-normal font-headline">
                      Dycery Terminal
                    </h1>
                    <p className="text-on-surface-var text-sm font-normal leading-normal font-body">
                      Campaign Manager
                    </p>
                  </div>
                </div>

                {/* Navigation Menu */}
                <div className="flex flex-col gap-2">
                  <NavItem
                    icon={<DiceSixIcon />}
                    label="Dice Roller"
                    isActive={true}
                    href="/dice"
                  />
                  <NavItem
                    icon={<SwordIcon />}
                    label="Initiative"
                    href="/initiative"
                  />
                  <NavItem
                    icon={<ScrollIcon />}
                    label="Active Quests"
                    href="/quests"
                  />
                  <NavItem
                    icon={<MapPinIcon />}
                    label="Map"
                    href="/map"
                  />
                  <NavItem
                    icon={<UsersIcon />}
                    label="NPCs"
                    href="/npcs"
                  />
                  <NavItem
                    icon={<SkullIcon />}
                    label="Bestiary"
                    href="/bestiary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
