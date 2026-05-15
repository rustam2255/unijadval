import { BarChart3, CalendarDays, AlertTriangle, School, Building2, Users, GraduationCap, BookOpen, DoorOpen, ChartNoAxesCombined, BrainCircuit } from 'lucide-react';
import React from "react";
const nav=[['dashboard','Bosh sahifa',BarChart3],['schedule','Dars jadvali',CalendarDays],['workloads','Yuklamalar',BrainCircuit],['conflicts','Konfliktlar',AlertTriangle],['faculties','Fakultetlar',School],['departments','Kafedralar',Building2],['groups','Guruhlar',Users],['teachers','O‘qituvchilar',GraduationCap],['subjects','Fanlar',BookOpen],['rooms','Xonalar',DoorOpen],['analytics','Tahlil',ChartNoAxesCombined]];
export default function Layout({page,setPage,children,conflictCount}){return <div className="min-h-screen bg-slate-50">
 <aside className="fixed inset-y-0 left-0 z-20 w-64 border-r border-slate-200 bg-white/90 backdrop-blur-xl">
  <div className="px-5 py-5 border-b border-slate-100"><div className="text-2xl font-black tracking-tight text-slate-900">Uni<span className="text-blue-600">Jadval</span></div></div>
  <nav className="p-3 space-y-1">{nav.map(([id,label,Icon])=><button key={id} onClick={()=>setPage(id)} className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${page===id?'bg-blue-600 text-white shadow-lg shadow-blue-600/20':'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}><Icon size={18}/><span>{label}</span>{id==='conflicts'&&conflictCount>0&&<span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">{conflictCount}</span>}</button>)}</nav>
 </aside>
 <header className="fixed left-64 right-0 top-0 z-10 h-16 border-b border-slate-200 bg-white/75 px-6 backdrop-blur-xl flex items-center justify-between"><div><h1 className="text-lg font-extrabold text-slate-900">{nav.find(n=>n[0]===page)?.[1]}</h1><p className="text-xs text-slate-500">Dars jadvali, resurslar va o‘qituvchi yuklamasini boshqarish</p></div><div className="flex gap-2"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">2025–2026</span></div></header>
 <main className="ml-64 pt-16 p-6">{children}</main>
 </div>}
