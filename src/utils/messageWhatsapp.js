export function messageWhatsapp(numero = 554330251230, texto = "Olá, gostaria de saber mais a respeito dos seus serviços") {
  return `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`
}

