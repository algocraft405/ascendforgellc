import Image from "next/image";

const images: Record<string, { src: string; alt: string }> = {
  "AF-APEX-KNIT": {
    src: "/products/apex-knit-distance.jpg",
    alt: "Apex Knit Distance running shoe",
  },
  "AF-TRAIL-GRIP": {
    src: "/products/trailforge-grip-pack.jpg",
    alt: "Trailforge Grip Pack trail running shoe",
  },
  "AF-IRON-SET": {
    src: "/products/iron-set-adjustable-dumbbells.jpg",
    alt: "Iron Set adjustable dumbbells in a cradle",
  },
  "AF-FORGE-BAR": {
    src: "/products/forge-bar-20kg.jpg",
    alt: "Forge Bar 20kg Olympic barbell",
  },
  "AF-MATCHDAY": {
    src: "/products/matchday-pro-soccer-ball.jpg",
    alt: "Matchday Pro soccer ball",
  },
  "AF-COURTSTRIKE": {
    src: "/products/courtstrike-indoor-basketball.jpg",
    alt: "Courtstrike indoor basketball",
  },
  "AF-SUMMIT-32": {
    src: "/products/summit-pack-32l.jpg",
    alt: "Summit Pack 32L hiking backpack",
  },
  "AF-STORMSHELL": {
    src: "/products/stormshell-training-jacket.jpg",
    alt: "Stormshell training jacket",
  },
  "AF-PULSE-ROLL": {
    src: "/products/pulse-recovery-roller.jpg",
    alt: "Pulse Recovery foam roller",
  },
};

export function ProductPhoto({
  id,
  className = "object-cover",
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw",
  priority = false,
}: {
  id: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const image = images[id] ?? images["AF-APEX-KNIT"];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
