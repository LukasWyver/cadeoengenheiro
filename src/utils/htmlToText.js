export function htmlToText(html) {
  if (!html) return "";

  return html
    // Quebras semânticas
    .replace(/<\/(p|h1|h2|h3|h4|h5|h6)>/gi, " ")
    .replace(/<\/li>/gi, " ")
    .replace(/<\/(ul|ol)>/gi, " ")

    // Remove todas as outras tags
    .replace(/<[^>]*>/g, "")

    // Normaliza espaços
    .replace(/\s+/g, " ")
    .trim();
}
