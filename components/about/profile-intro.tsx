import Image from "next/image";

interface ProfileIntroProps {
  name: string;
  /** Mono meta line under the name, e.g. "Full-stack developer · Ho Chi Minh City". */
  meta: string;
  image: string;
  description: readonly string[];
}

export const ProfileIntro = ({
  name,
  meta,
  image,
  description,
}: ProfileIntroProps) => (
  <header className="grid items-start gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
    {/* /profile.jpg is 1511x2015 (3:4); the box keeps that ratio so nothing crops. */}
    <Image
      priority
      alt={name}
      className="aspect-[3/4] w-40 rounded-2xl border border-divider object-cover md:w-full"
      height={640}
      sizes="(min-width: 768px) 200px, 160px"
      src={image}
      width={480}
    />

    <div>
      <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
        {name}
      </h1>
      <p className="mt-3 font-mono text-sm text-foreground-500">{meta}</p>

      <div className="mt-8 flex max-w-2xl flex-col gap-4 leading-relaxed text-foreground-600">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  </header>
);
