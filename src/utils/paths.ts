export function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

export function stripBasePath(pathname: string, basePath: string): string {
  const path = normalizePath(pathname);
  const normalizedBasePath = normalizePath(basePath);

  if (normalizedBasePath === "/") return path;
  if (path === normalizedBasePath) return "/";
  if (path.slice(0, normalizedBasePath.length + 1) === `${normalizedBasePath}/`) {
    return path.slice(normalizedBasePath.length) || "/";
  }

  return path;
}

export function withBasePath(basePath: string, pathname: string): string {
  const normalizedBasePath = normalizePath(basePath);
  const normalizedPath = pathname.replace(/^\/+/, "");

  if (!normalizedPath) return basePath;
  if (normalizedBasePath === "/") return `/${normalizedPath}/`;

  return `${normalizedBasePath}/${normalizedPath}/`;
}
