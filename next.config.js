/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Corrigido para string
      },
      {
        protocol: 'https',
        hostname: 'www.cadeoengenheiro.com.br', // Corrigido para string
      },
       {
        protocol: 'https',
        hostname: 'admin.cadeoengenheiro.com.br', // Corrigido para string
      },
    ],
  },
}

module.exports = nextConfig
