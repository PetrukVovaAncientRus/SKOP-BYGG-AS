import { ClipboardCheck, Star } from 'lucide-react';

interface ReviewNoteProps {
  author: string;
  projectType: string;
  comment: string;
  rating: number;
}

export default function ReviewNote({ author, projectType, comment, rating }: ReviewNoteProps) {
  return (
    <div className="bg-[#fffdf5] border-2 border-amber-200/70 p-6 rounded-lg shadow-sm font-sans relative transform -rotate-1 hover:rotate-0 transition-transform duration-200">
      {/* Clipboard/Inspeksjonsnotat-topp */}
      <div className="flex justify-between items-center border-b border-dashed border-amber-300 pb-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800">
          <ClipboardCheck size={16} className="text-brand-orange" />
          <span>BYGGEPLASS-RAPPORT // GODKJENT</span>
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
        "{comment}"
      </p>

      <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs">
        <div>
          <span className="font-bold text-brand-dark block">{author}</span>
          <span className="text-gray-500">{projectType}</span>
        </div>
        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">100% OK</span>
      </div>
    </div>
  );
}