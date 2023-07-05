export function getCurrentUrl(pathname: string) {
  return pathname.split(/[?#]/)[0];
}
