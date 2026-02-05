import { ReactNode } from "react";

export function SectionLabel({ text, icon }: { text: string; icon?: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 border border-primary-100">
      {icon}
      {text}
    </div>
  );
}

export function ProblemCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-primary-500 text-white p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <div className="bg-white text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl shadow-md">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-neutral-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function BenefitCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 hover:shadow-md transition-shadow">
      <div className="text-primary-600 mb-3">{icon}</div>
      <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}