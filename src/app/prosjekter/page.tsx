'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Prosjekt {
  id: number;
  tittel: string;
  sted: string;
  type: string;
  status: string;
  beskrivelse: string;
  images: string[];
}

export default function ProsjekterPage() {
  const [activeProject, setActiveProject] = useState<Prosjekt | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  const prosjektListe: Prosjekt[] = [
    {
      id: 1,
      tittel: "Fullstendig ombygging og modernisering av underetasjen i pilleboksen.",
      sted: "Drammen",
      type: "Innvendig renovering",
      status: "Fullført",
      beskrivelse: "Nye hubel,graving,radon membran, nye Vindy ,nye bad.",
      images: [
        "/images/projects/project1/1.jpg",
        "/images/projects/project1/2.jpg",
        "/images/projects/project1/3.jpg",
        "/images/projects/project1/4.jpg",
        "/images/projects/project1/5.jpg",
        "/images/projects/project1/6.jpg",
        "/images/projects/project1/7.jpg",
        "/images/projects/project1/8.jpg",
        "/images/projects/project1/9.jpg",
        "/images/projects/project1/10.jpg",
        "/images/projects/project1/11.jpg",
        "/images/projects/project1/12.jpg",
        "/images/projects/project1/13.jpg",
        "/images/projects/project1/14.jpg",
      ]
    },
    {
      id: 2,
      tittel: "Bygging av en Terrasse",
      sted: "Drammen",
      type: "Tilbygg & Påbygg",
      status: "Fullført",
      beskrivelse: "Legging av terrassen.",
      images: [
        "/images/projects/project2/1.jpg",
        "/images/projects/project2/2.jpg",
        "/images/projects/project2/3.jpg",
        "/images/projects/project2/4.jpg",
        "/images/projects/project2/5.jpg",
        "/images/projects/project2/6.jpg",
        "/images/projects/project2/7.jpg",
      ]
    },
    {
      id: 3,
      tittel: "Bygging av en Ingretsvei",
      sted: "Drammen",
      type: "Tilbygg & Påbygg",
      status: "Fullført",
      beskrivelse: "Ingretsvei.",
      images: [
        "/images/projects/project3/1.jpg",
        "/images/projects/project3/2.jpg",
        "/images/projects/project3/3.jpg",
        "/images/projects/project3/4.jpg",
        "/images/projects/project3/5.jpg",
        "/images/projects/project3/6.jpg",
        "/images/projects/project3/7.jpg",
        "/images/projects/project3/8.jpg",
      ]
    },
    {
      id: 4,
      tittel: "Restaurering av huset",
      sted: "Drammen",
      type: "Rehabilitering",
      status: "Fullført",
      beskrivelse: "Huskledning med treverk.",
      images: [
        "/images/projects/project4/1.jpg",
        "/images/projects/project4/2.jpg",
        "/images/projects/project4/3.jpg",
        "/images/projects/project4/4.jpg",
        "/images/projects/project4/5.jpg",
      ]
    },
    {
      id: 5,
      tittel: "Bakgård med et tak",
      sted: "Drammen",
      type: "Tilbygg & Påbygg",
      status: "Fullført",
      beskrivelse: "Bygge en bakgård med et tak.",
      images: [
        "/images/projects/project5/1.jpg",
        "/images/projects/project5/2.jpg",
        "/images/projects/project5/3.jpg",
        "/images/projects/project5/4.jpg",
        "/images/projects/project5/5.jpg",
        "/images/projects/project5/6.jpg",
      ]
    },
    {
      id: 6,
      tittel: "Utvidelse",
      sted: "Drammen",
      type: "Tilbygg & Påbygg",
      status: "Fullført",
      beskrivelse: "Bygging av et tilbygg til huset.",
      images: [
        "/images/projects/project6/1.jpg",
        "/images/projects/project6/2.jpg",
        "/images/projects/project6/3.jpg",
        "/images/projects/project6/4.jpg",
        "/images/projects/project6/5.jpg",
        "/images/projects/project6/6.jpg",
        "/images/projects/project6/7.jpg",
        "/images/projects/project6/8.jpg",
        "/images/projects/project6/9.jpg",
        "/images/projects/project6/10.jpg",
        "/images/projects/project6/11.jpg",
        "/images/projects/project6/12.jpg",
      ]
    },
    {
      id: 7,
      tittel: "Baderom",
      sted: "Drammen",
      type: "Innvendig renovering",
      status: "Fullført",
      beskrivelse: "Baderomsrenovering.",
      images: [
        "/images/projects/project7/1.jpg",
        "/images/projects/project7/2.jpg",
        "/images/projects/project7/3.jpg",
        "/images/projects/project7/4.jpg",
        "/images/projects/project7/5.jpg",
        "/images/projects/project7/6.jpg",
        "/images/projects/project7/7.jpg",
        "/images/projects/project7/8.jpg",
        "/images/projects/project7/9.jpg",
        "/images/projects/project7/10.jpg",
        "/images/projects/project7/11.jpg",
        "/images/projects/project7/12.jpg",
        "/images/projects/project7/13.jpg",
        "/images/projects/project7/14.jpg",
      ]
    },
    {
      id: 8,
      tittel: "Baderom",
      sted: "Drammen",
      type: "Innvendig renovering",
      status: "Fullført",
      beskrivelse: "Nye Bad.",
      images: [
        "/images/projects/project8/1.jpg",
        "/images/projects/project8/2.jpg",
        "/images/projects/project8/3.jpg",
        "/images/projects/project8/4.jpg",
        "/images/projects/project8/5.jpg",
        "/images/projects/project8/6.jpg",
        "/images/projects/project8/7.jpg",
        "/images/projects/project8/8.jpg",
        "/images/projects/project8/9.jpg",
        "/images/projects/project8/10.jpg",
        "/images/projects/project8/11.jpg",
        "/images/projects/project8/12.jpg",
        "/images/projects/project8/13.jpg",
        "/images/projects/project8/14.jpg",
        "/images/projects/project8/15.jpg",
        "/images/projects/project8/16.jpg",
        "/images/projects/project8/17.jpg",
        "/images/projects/project8/18.jpg",
      ]
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, currentImgIndex]);

  const openModal = (project: Prosjekt, index: number) => {
    setActiveProject(project);
    setCurrentImgIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!activeProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* Head */}
      <div className="bg-[#1a1a1a] text-white py-16 border-b-4 border-[#ff7a00]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Utførte Prosjekter</h1>
          <p className="text-neutral-400 mt-2 max-w-xl mx-auto text-sm">Portefølje av fullførte prosjekter av SKOP BYGG AS</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-16">
        {prosjektListe.map((project) => {
          const hasMoreThan4 = project.images.length > 4;
          const remainingCount = project.images.length - 4;

          return (
            <div 
              key={project.id} 
              className="bg-white border-2 border-neutral-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 p-6"
            >
              <div className="md:col-span-7 grid grid-cols-2 gap-2 h-[320px] sm:h-[400px]">
                {project.images.slice(0, 4).map((img, index) => {
                  const isFourth = index === 3;

                  return (
                    <div
                      key={index}
                      onClick={() => openModal(project, index)}
                      className="relative bg-neutral-100 rounded-lg overflow-hidden cursor-pointer group"
                    >
                      <Image
                        src={img}
                        alt={`${project.tittel} - bilde ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 35vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={project.id === 1 && index < 2}
                      />
                      
                      {!isFourth && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md w-5 h-5" />
                        </div>
                      )}

                      {isFourth && hasMoreThan4 && (
                        <div className="absolute inset-0 bg-black/65 transition-colors group-hover:bg-black/75 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                          <span className="text-2xl sm:text-3xl font-black tracking-wide">+{remainingCount}</span>
                          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-neutral-300 mt-1">Se alle bilder</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-black text-[#ff7a00] uppercase tracking-wider bg-[#ff7a00]/10 px-2.5 py-1 rounded">
                      {project.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                      Lokasjon: {project.sted}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-tight">
                    {project.tittel}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {project.beskrivelse}
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-4 font-mono text-[11px] text-neutral-400 grid grid-cols-2 gap-2">
                  <div>STATUS: <span className="text-emerald-600 font-bold uppercase">{project.status}</span></div>
                  <div className="text-right">TOTAL: {project.images.length} BILDER</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center select-none animate-fadeIn">
          
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between px-6 z-50">
            <div className="text-white font-mono text-xs sm:text-sm">
              <span className="text-[#ff7a00] font-bold">{activeProject.tittel}</span> 
              <span className="text-neutral-400 mx-2">|</span> 
              <span>{currentImgIndex + 1} / {activeProject.images.length}</span>
            </div>
            <button 
              onClick={closeModal}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              aria-label="Lukk galleri"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all z-40"
            aria-label="Forrige bilde"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full h-[70vh] sm:h-[80vh] px-12 flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={activeProject.images[currentImgIndex]}
                alt="Forstørret prosjektbilde"
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-all z-40"
            aria-label="Neste bilde"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white pt-10 pb-6 px-6 text-center">
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300 font-sans tracking-wide">
              {activeProject.beskrivelse}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}