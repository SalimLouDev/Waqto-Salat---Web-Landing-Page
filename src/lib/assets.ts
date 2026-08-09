export function assetPath(path: string) {
  return `/${path.replace(/^\/+/, "")}`;
}
