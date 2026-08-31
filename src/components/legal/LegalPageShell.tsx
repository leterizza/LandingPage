import { ReactNode } from 'react';
import Link from 'next/link';

export function LegalPageShell({
  title,
  updated,
  intro,
  children,
  siblingHref,
  siblingLabel,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
  siblingHref: string;
  siblingLabel: string;
}) {
  return (
    <div className="bg-[#FBFAFC]">
      <div className="max-w-[820px] mx-auto px-6 md:px-12 py-16 md:py-[88px] flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <span className="self-start inline-flex items-center bg-primary-50 text-primary-600 border border-primary-100 text-[12.5px] font-bold uppercase tracking-wide px-4 py-2 rounded-full">
            Documentos legais
          </span>
          <h1 className="mt-2 text-3xl md:text-[46px] leading-[1.1] font-extrabold tracking-tight text-primary-775">
            {title}
          </h1>
          <span className="text-[14.5px] text-[#8A8A8A]">Última atualização: {updated}</span>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-3xl px-6 md:px-7 py-6 flex flex-col gap-3 text-[16.5px] leading-[1.7] text-primary-650">
          {intro}
        </div>

        <div className="flex flex-col gap-9">{children}</div>

        <div className="border-t border-[#EDE4FB] pt-6 text-[15.5px] text-neutral-600">
          Veja também:{' '}
          <Link href={siblingHref} className="text-primary-450 font-semibold underline">
            {siblingLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3.5">
      <h2 className="text-xl md:text-[25px] leading-[1.25] font-bold text-primary-775">{title}</h2>
      <div className="flex flex-col gap-3.5 text-[16.5px] leading-[1.75] text-neutral-700">{children}</div>
    </section>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-warm-bg border border-warm-border rounded-3xl px-6 md:px-7 py-6 text-[16.5px] leading-[1.8] text-warm-text-strong">
      {children}
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5 pl-5 list-disc text-[16.5px] leading-[1.7] text-neutral-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-1.5 border border-[#EDE4FB] rounded-[18px] overflow-hidden overflow-x-auto">
      <table className="w-full border-collapse text-[14.5px] leading-[1.6]">
        <thead>
          <tr className="bg-primary-50">
            {head.map((h, i) => (
              <th key={i} className="text-left px-4 py-3.5 font-bold text-primary-775">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri < rows.length - 1 ? 'border-b border-[#F3EEFB]' : ''}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3.5 text-neutral-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
