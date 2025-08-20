"use client"
import Image from "next/image";
import { weapons, thrownWeapons } from "./dataset";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [tab, setTab] = useState<'weapons' | 'thrown'>('weapons');
  const navbarRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }
    if (tabRef.current) {
      gsap.fromTo(
        tabRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    if (cardsRef.current && cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          const img = card.querySelector('img');
          if (img) {
            gsap.fromTo(
              img,
              { opacity: 0, scale: 0.8, y: 40 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: img,
                  start: "top 90%",
                  toggleActions: "play none none none"
                }
              }
            );
          }
        }
      });
    }
  }, [tab]);
  return (
  <div className="min-h-screen flex flex-col items-center justify-start px-1 sm:px-2 md:px-4 bg-black/30">
      <nav className="w-full sticky top-0 z-30">
        <div ref={navbarRef} className="max-w-4xl mx-auto py-3 px-2 sm:py-4 sm:px-8 bg-black/30 backdrop-blur-lg rounded-b-2xl flex items-center justify-center shadow-2xl border-b border-white/10">
          <span className="text-white font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow-lg mystery-quest-regular select-none">Mini Militia</span>
        </div>
      </nav>

  <section ref={heroRef} className="w-full flex flex-col items-center mt-10 sm:mt-16 mb-8 sm:mb-10 px-1">
        <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-tight text-center  uppercase mystery-quest-regular">Ressurgence</h1>
        <h4 className="text-white text-lg xs:text-xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center drop-shadow mystery-quest-regular">The Ultimate Mini Militia Handbook</h4>
        <p className="text-white/80 max-w-xs xs:max-w-md sm:max-w-2xl text-center mb-6 sm:mb-8 text-base xs:text-lg md:text-xl">understand the whole weaponary from this simple site</p>
      </section>

  <div ref={tabRef} className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap justify-center">
        <button
          className={`px-6 py-2 rounded-full font-bold text-lg transition-all duration-150 border-2 ${tab === 'weapons' ? 'bg-yellow-400 text-black border-yellow-400 scale-105' : 'bg-black/40 text-white border-white/20 hover:bg-yellow-400 hover:text-black'}`}
          onClick={() => setTab('weapons')}
        >
          Weapons
        </button>
        <button
          className={`px-6 py-2 rounded-full font-bold text-lg transition-all duration-150 border-2 ${tab === 'thrown' ? 'bg-yellow-400 text-black border-yellow-400 scale-105' : 'bg-black/40 text-white border-white/20 hover:bg-yellow-400 hover:text-black'}`}
          onClick={() => setTab('thrown')}
        >
          Thrown Weapons
        </button>
      </div>

  <section className="w-full  mt-16">
        {tab === 'weapons' ? (
          <>
            <h2 className="text-yellow-400 text-3xl font-bold mb-8 mystery-quest-regular text-center tracking-wider drop-shadow">All Weapons</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full">
              {weapons.map((weapon) => (
                <div
                  className="bg-black/60 rounded-2xl p-2 xs:p-3 sm:p-4 flex flex-col items-center border border-yellow-400/20 shadow-lg hover:scale-105 transition-transform duration-200 w-full"
                >
                  <Image src={weapon.image || "/mininmiltia.webp"} alt={weapon.name} width={100} height={100} className="rounded-xl mb-2 xs:mb-3 border-4 border-yellow-400/60" />
                  <div className="text-yellow-300 font-bold text-base xs:text-lg sm:text-xl mb-1 mystery-quest-regular text-center">{weapon.name}</div>
                  <div className="text-white/80 text-xs xs:text-sm mb-1 xs:mb-2 text-center">{weapon.description || ''}</div>
                  <div className="flex flex-col items-center mt-1 xs:mt-2 w-full gap-1">
                    <div className="text-white/90 text-xs font-semibold w-full text-left">BC Cost: <span className="text-yellow-200 font-bold">{weapon.bcCost}</span></div>
                    <div className="text-white/90 text-xs font-semibold w-full text-left">Allows Dual Wielding: <span className="text-yellow-200 font-bold">{weapon.allowsDualWielding ? 'Yes' : 'No'}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-yellow-400 text-3xl font-bold mb-8 mystery-quest-regular text-center tracking-wider drop-shadow">All Thrown Weapons</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full">
              {thrownWeapons.map((weapon) => (
                <div
                  className="bg-black/60 rounded-2xl p-2 xs:p-3 sm:p-4 flex flex-col items-center border border-yellow-400/20 shadow-lg hover:scale-105 transition-transform duration-200 w-full"
                >
                  <Image src={weapon.image || "/mininmiltia.webp"} alt={weapon.name} width={100} height={100} className="rounded-xl mb-2 xs:mb-3 border-4 border-yellow-400/60" />
                  <div className="text-yellow-300 font-bold text-base xs:text-lg sm:text-xl mb-1 mystery-quest-regular text-center">{weapon.name}</div>
                  <div className="text-white/80 text-xs xs:text-sm mb-1 xs:mb-2 text-center">{weapon.description || ''}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>


    </div>
  );
}
