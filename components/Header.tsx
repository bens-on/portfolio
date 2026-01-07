"use client";

import Link from "next/link";
import GlassNav from "./GlassNav";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const outerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // #region agent log
    if (headerRef.current && outerDivRef.current) {
      const headerStyles = window.getComputedStyle(headerRef.current);
      const outerDivStyles = window.getComputedStyle(outerDivRef.current);
      
      fetch('http://127.0.0.1:7242/ingest/7815790c-d849-4797-a2d2-253f5f95e911',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:15',message:'Header element computed styles',data:{display:headerStyles.display,width:headerStyles.width,position:headerStyles.position},timestamp:Date.now(),sessionId:'debug-session',runId:'simplified',hypothesisId:'G'})}).catch(()=>{});
      fetch('http://127.0.0.1:7242/ingest/7815790c-d849-4797-a2d2-253f5f95e911',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:16',message:'Outer div computed styles (simplified)',data:{display:outerDivStyles.display,justifyContent:outerDivStyles.justifyContent,paddingRight:outerDivStyles.paddingRight,width:outerDivStyles.width,offsetWidth:outerDivRef.current.offsetWidth},timestamp:Date.now(),sessionId:'debug-session',runId:'simplified',hypothesisId:'G'})}).catch(()=>{});
    }
    // #endregion
  }, []);

  return (
    <header ref={headerRef} className="w-full fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm" style={{ width: '100%', left: 0, right: 0, margin: 0, padding: 0 }}>
      <div ref={outerDivRef} className="w-full h-12 sm:h-14 flex items-center justify-between" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0, padding: 0, paddingLeft: '125px', paddingRight: '125px' }}>
        <Link 
          href="/launches" 
          className="inline-block rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Recent Launches"
        >
          <div
            className="group relative inline-flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-2 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-red-500/20"
            style={{
              boxShadow:
                "0 0 0 1px rgba(239,68,68,0.18), 0 0 28px rgba(239,68,68,0.35), 0 0 90px rgba(239,68,68,0.22)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/25 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span
              className="relative z-10 text-sm text-red-700 dark:text-red-200 whitespace-nowrap font-semibold"
              style={{ textShadow: "0 0 14px rgba(239,68,68,0.35)" }}
            >
              Recent Launches 🚀
            </span>
          </div>
        </Link>
        <GlassNav />
      </div>
    </header>
  );
}
