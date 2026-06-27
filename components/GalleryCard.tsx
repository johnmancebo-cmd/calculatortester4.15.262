import type { GalleryItem } from "@/data/gallery";
import { PlaceholderImage } from "./PlaceholderImage";

export function GalleryCard({ item, index = 0 }: { item: GalleryItem; index?: number }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy/5">
      <PlaceholderImage
        label={item.alt}
        palette={index % 2 === 0 ? "harbor" : "dusk"}
        seed={index}
        ratio="aspect-[4/3]"
        className="rounded-none"
      />
      <figcaption className="p-4 text-sm text-charcoal/70">{item.caption}</figcaption>
    </figure>
  );
}
