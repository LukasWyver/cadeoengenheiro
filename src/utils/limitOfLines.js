export function limitOfLines(texto, limiteLinhas) {
  const limiteCaracteres = limiteLinhas * 50; // Defina o número máximo de caracteres com base no número de linhas desejado (assumindo uma largura média de 50 caracteres por linha)
  const textoCortado = texto.slice(0, limiteCaracteres); // Corte o texto até o número máximo de caracteres
  const textoCompleto =
    textoCortado + (texto.length > limiteCaracteres ? "..." : ""); // Adicione os três pontos se o texto for maior que o limite
  return textoCompleto;
}
