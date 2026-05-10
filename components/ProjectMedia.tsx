"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

type Props = { project: Project; locale: Locale };

export function ProjectMedia({ project, locale }: Props) {
  const { media } = project;
  const morphName = `card-${project.id}`;
  const t = ui[locale];

  if (media.type === "youtube") {
    return (
      <div className="flex w-full items-center justify-center lg:h-full lg:px-12">
        <div
          className="relative aspect-video w-full max-w-[900px] overflow-hidden bg-paper-soft"
          style={{ viewTransitionName: morphName }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${media.videoId}`}
            title={project.title[locale]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  if (media.type === "images") {
    return (
      <Slider
        morphName={morphName}
        sources={media.sources.map((s) => ({ src: s.src, alt: s.alt[locale] }))}
        labels={{ prev: t.prev, next: t.next }}
        download={
          media.pdfDownload
            ? { src: media.pdfDownload.src, label: media.pdfDownload.label[locale] }
            : undefined
        }
      />
    );
  }

  if (media.type === "comic") {
    return (
      <Slider
        morphName={morphName}
        sources={media.sources.map((src, i) => ({
          src,
          alt: `Comic ${i + 1}`,
        }))}
        labels={{ prev: t.prev, next: t.next }}
      />
    );
  }

  // pdf
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 lg:h-full lg:px-12">
      {media.preview ? (
        <div
          className="relative aspect-[3/4] w-full max-w-[480px] overflow-hidden bg-paper-soft"
          style={{ viewTransitionName: morphName }}
        >
          <Image
            src={media.preview}
            alt={project.title[locale]}
            fill
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover"
          />
        </div>
      ) : null}
      <a
        href={media.src}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[13px] font-bold uppercase tracking-wider text-ink transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
      >
        ({t.openPdf.toUpperCase()})
      </a>
    </div>
  );
}

function Slider({
  sources,
  morphName,
  labels,
  download,
}: {
  sources: { src: string; alt: string }[];
  morphName: string;
  labels: { prev: string; next: string };
  download?: { src: string; label: string };
}) {
  const [i, setI] = useState(0);
  const total = sources.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 lg:h-full lg:px-12">
      <div
        className="relative w-full max-w-[600px] overflow-hidden bg-paper-soft"
        style={{
          aspectRatio: "4 / 5",
          viewTransitionName: i === 0 ? morphName : undefined,
        }}
      >
        <Image
          src={sources[i].src}
          alt={sources[i].alt}
          fill
          sizes="(max-width: 1024px) 90vw, 600px"
          className="object-cover"
          priority
        />
      </div>
      {total > 1 && (
        <div className="flex items-center gap-4 font-mono text-[13px] font-bold uppercase tracking-wider text-ink">
          <button
            onClick={prev}
            className="transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
          >
            ({labels.prev.toUpperCase()})
          </button>
          <span className="opacity-50">
            {i + 1} / {total}
          </span>
          <button
            onClick={next}
            className="transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
          >
            ({labels.next.toUpperCase()})
          </button>
        </div>
      )}
      {download && (
        <a
          href={download.src}
          download
          className="font-mono text-[13px] font-bold uppercase tracking-wider text-ink transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
        >
          ↓ ({download.label})
        </a>
      )}
    </div>
  );
}
