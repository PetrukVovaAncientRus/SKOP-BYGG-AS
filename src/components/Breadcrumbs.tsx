import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Breadcrumb = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Brodsmulesti" className="text-xs text-neutral-500">
        <ol className="flex flex-wrap items-center justify-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="text-neutral-300">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-brand-orange">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
