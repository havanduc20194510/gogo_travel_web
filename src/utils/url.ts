export const objectToQueryString = (
  params: Record<string, string | number>
) => {
  const queryString = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    queryString.append(key, String(value));
  }
  return queryString.toString();
};
