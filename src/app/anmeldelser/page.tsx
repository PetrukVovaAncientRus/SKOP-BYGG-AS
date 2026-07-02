import ReviewNote from '@/components/ReviewNote';

export default function AnmeldelserPage() {
  return (
    <div>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase">Kundeanmeldelser</h1>
          <p className="text-gray-400 mt-2">Gjennomsiktighet og tilfredse byggherrer er vår stolthet.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReviewNote 
            author="Jan Erik L., Drammen" 
            projectType="Tilbygg enebolig" 
            comment="SKOP BYGG bygde nytt tilbygg på 45 kvm for oss. Utmerket kommunikasjon og ferdigstilt nøyaktig i henhold til tidsplanen." 
            rating={5} 
          />
          <ReviewNote 
            author="Monika K., Lier" 
            projectType="Totalrenovering" 
            comment="Svært profesjonelt team. De pusset opp hele første etasje, inkludert gipsing, maling og nytt gulv. Anbefales på det sterkeste!" 
            rating={5} 
          />
          <ReviewNote 
            author="Ole Petter S., Gulskogen" 
            projectType="Takfornying" 
            comment="Rask og effektiv utskifting av takstein på garasje og hovedhus. Meget konkurransedyktig pris." 
            rating={5} 
          />
          <ReviewNote 
            author="Kari & Per, Steinberg" 
            projectType="Nytt inngangsparti" 
            comment="Håndverkere som dukker opp til avtalt tid og gjør et solid stykke arbeid. Svært fornøyd med tømrerarbeidet." 
            rating={5} 
          />
        </div>
      </div>
    </div>
  );
}