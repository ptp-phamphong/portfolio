import Image, { type ImageProps } from "next/image";

/** A light and a dark version of the same screenshot (paths under /public). */
export type ThemedSrc = { readonly light: string; readonly dark: string };

type ThemedImageProps = Omit<ImageProps, "src"> & { src: ThemedSrc };

/**
 * Renders both variants and lets Tailwind's `dark:` variant show one.
 * Picking the src with useTheme() instead would render the light image into
 * every static page and swap it only after hydration, a visible flash for
 * dark-mode visitors. With CSS the image always follows the theme class on
 * <html>, exactly like the rest of the page.
 */
export const ThemedImage = ({
  src,
  alt,
  className = "",
  ...props
}: ThemedImageProps) => (
  <>
    <Image
      {...props}
      alt={alt}
      className={`${className} dark:hidden`}
      src={src.light}
    />
    <Image
      {...props}
      alt={alt}
      className={`${className} hidden dark:block`}
      src={src.dark}
    />
  </>
);
