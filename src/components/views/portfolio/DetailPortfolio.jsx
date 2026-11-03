"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { BsGithub } from "react-icons/bs";
import { BiChevronRight, BiLinkExternal } from "react-icons/bi";

import HtmlContent from "../blog/HtmlContent";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_TYPES } from "@/constants/data/portfolio";

const DetailPortfolio = ({ portfolio, locale }) => {
  if (!portfolio) return null;

  // const categoryData = PORTFOLIO_CATEGORIES.find(c => c.value === portfolio.category) || {};
  // const typeData = PORTFOLIO_TYPES.find(t => t.value === portfolio.type) || {};

  // Images for gallery (main photo + screenshots)
  const images = useMemo(() => {
    const imgs = [];
    if (portfolio.photos) imgs.push(portfolio.photos);
    if (portfolio.screenshots?.length) imgs.push(...portfolio.screenshots);
    return imgs;
  }, [portfolio.photos, portfolio.screenshots]);

  const [activeImage, setActiveImage] = useState(images[0] || "");
  const [activeTab, setActiveTab] = useState("description");
  const [isOpen, setIsOpen] = useState(false);

  const skillsArray = Array.isArray(portfolio.skill) ? portfolio.skill : [];

  return (
    <article className="space-y-8">

      {/* HEADER */}
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {portfolio.name}
        </h1>

        {portfolio.excerpt && (
          <p className="text-sm text-muted-foreground max-w-2xl">
            {portfolio.excerpt}
          </p>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {portfolio.demoLink && (
            <a
              href={portfolio.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge gap-1"
            >
              <BiLinkExternal /> Live Demo
            </a>
          )}
          {portfolio.githubLink && (
            <a
              href={portfolio.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge gap-1"
            >
              <BsGithub /> Source Code
            </a>
          )}
        </div>
      </header>

       {/* IMAGE GALLERY - Responsive logic added here */}
      {images.length > 0 && (
        <div className="flex flex-col-reverse md:grid md:grid-cols-[75px_1fr] gap-4">
          
          {/* Thumbnails - Horizontal on mobile, Vertical on MD+ */}
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={clsx(
                  "relative flex-shrink-0 w-16 h-16 md:w-full md:h-auto md:aspect-square overflow-hidden rounded-xl border transition",
                  activeImage === img ? "ring-2 ring-primary border-transparent" : "opacity-70 hover:opacity-100"
                )}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="75px" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative w-full aspect-video md:aspect-auto overflow-hidden rounded-2xl border bg-muted focus:outline-none"
          >
            <Image
              src={activeImage}
              alt={portfolio.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </button>
        </div>
      )}

      {/* TABS */}
      <div>
        <div className="flex gap-6 border-b text-sm">
          {["description", "tools & technology", "features"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "pb-2 font-medium capitalize transition",
                activeTab === tab ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pt-6 text-sm leading-relaxed text-muted-foreground space-y-4">
          {activeTab === "description" && (
            <HtmlContent html={portfolio.content || ""} />
          )}

          {activeTab === "tools & technology" && skillsArray.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skillsArray.map((skill, i) => (
                <span key={i} className="badge text-md gap-1 flex items-center">
                  {skill.icon && (
                    <span
                      className="w-9 h-7 flex items-center justify-center shrink-0"
                      dangerouslySetInnerHTML={{
                        __html: skill.icon.replace(/<\?xml.*?\?>/g, "").replace(/<!--.*?-->/g, ""),
                      }}
                    />
                  )}
                  {skill.label || skill.name}
                </span>
              ))}
            </div>
          )}

          {activeTab === "features" && portfolio.feature && (
            <HtmlContent html={portfolio.feature} />
          )}
        </div>
      </div>

      {/* META */}
      <footer className="pt-6 border-t text-sm text-muted-foreground space-y-2">
        {/* {portfolio.category && (
          <p className="flex items-center gap-2">
            <BiChevronRight /> {locale === "en" ? "Category" : "Kategori"}:{" "}
            <span className="font-medium">{categoryData.label?.[locale] || portfolio.category}</span>
          </p>
        )} */}
        {portfolio.type && (
          <p className="flex items-center gap-2">
            <BiChevronRight /> {locale === "en" ? "Type" : "Jenis"}:{" "}
            <span className="font-medium">{typeData.label?.[locale] || portfolio.type}</span>
          </p>
        )}
      </footer>

      {/* IMAGE MODAL */}
     {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full md:max-w-5xl pt-20 md:pt-0 px-0 md:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close yang lebih terlihat di mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[110] text-white bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              ✕
            </button>

            <div className="relative aspect-square sm:aspect-video md:aspect-[16/9] w-full overflow-hidden">
              <Image
                src={activeImage}
                alt={portfolio.name}
                fill
                className="object-contain md:object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default DetailPortfolio;
