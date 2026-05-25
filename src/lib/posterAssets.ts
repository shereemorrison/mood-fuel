/**
 * Bump when files are replaced in in /public/ (poster1.png … poster5.png)
 * so the browser fetches fresh images without renaming files.
 */
export const POSTER_ASSET_VERSION = 3;

export function posterImageSrc(path: string): string {
  return `${path}?v=${POSTER_ASSET_VERSION}`;
}
