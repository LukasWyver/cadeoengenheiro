export default function services(req, res) {
  return res.status(200).json([
    {
      "id": 1,
      "page": "",
      "slug": "acompanhamento-de-obras",
      "title": "Acompanhamento de obras",
      "thumb": "/img/acompanhamento-de-obras.jpg",
      "description":"Transforme a sua obra ou reforma em um processo tranquilo e sem problemas com a nossa assessoria especializada. Acompanhe tudo diretamente do seu celular ou computador, de maneira simples e fácil."
    },
    {
      "id": 2,
      "page": "",
      "slug": "projetos",
      "title": "Projetos",
      "thumb": "/img/projetos.jpg",
      "description":"Projetos personalizados para sua construção e reforma. Conte com nossa expertise para transformar seus sonhos em realidade.",
      "types": [
        {
          "id": 1,
          "thumb": "/img/projetos-arquitetonicos.jpg",
          "slug": "projetos-arquitetonicos",
          "title": "Projetos Arquitetônicos",
          "description": "Explore como a nossa equipe trabalha para desenvolver seus projetos arquitetônicos."
        },
        {
          "id": 2,
          "thumb": "/img/projetos-estruturais.jpg",
          "slug":"projetos-estruturais",
          "title": "Projetos Estruturais",
          "description": "Conheça como nossa equipe desenvolve projetos estruturais sob medida."
        },
        {
          "id": 3,
          "thumb": "/img/projetos-eletricos.jpg",
          "slug": "projetos-eletricos",
          "title": "Projetos Elétricos",
          "description": "Descubra como a nossa equipe desenvolve projetos elétricos sob medida para atender às suas necessidades."
        },
        {
          "id": 4,
          "thumb": "/img/projetos-hidrossanitario.jpg",
          "slug": "projeto-hidrossanitario",
          "title": "Projeto Hidrossanitário",
          "description": "Reservatórios de água, sistemas de irrigação, bombas de água, ralos, grelhas, calhas e canaletas, caixas de esgoto, gordura e de águas servidas, tubulações, metais, acessórios e registros, equipamentos de incêndio."
        },
      ],
    },
    {
      "id": 3,
      "page": "",
      "slug": "manutencao-predial",
      "title": "Manutenção predial",
      "thumb": "/img/manutencao-predial.jpg",
      "description":"Cuidaremos de seu patrimônio com o máximo de excelência e experiência adquirida ao longo de mais de uma década. Garantimos agilidade e qualidade nos serviços."
    },
    {
      "id": 4,
      "page": "",
      "slug": "art",
      "title": "ART’s",
      "thumb": "/img/arts.jpg",
      "description":"Emita ART’s para sua obra nova, reforma ou regularização, diretamente com o Cadê o Engenheiro, seu documento será emitido de maneira fácil e rápida."
    },
  ]);
}

