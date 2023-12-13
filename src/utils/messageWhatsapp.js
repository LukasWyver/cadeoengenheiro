export function messageWhatsapp(numero = 5543991168074, texto = "Olá, gostaria de saber mais a respeito dos seus serviços") {
  return `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`
}

