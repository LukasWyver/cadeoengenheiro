export default function services(req, res) {
  return res.status(200).json([
    {
      "id": 1,
      "slug": "obras-realizadas",
      "title": "Obras Realizadas",
      "thumb": "/img/obras-realizadas.jpg",
      "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "customers": [
        {
          "id": 1,
          "slug":"unimed-londrina",
          "name": "Unimed Londrina",
          "service": "Construção Nova Sede",
          "thumb": "/img/unimed-londrina.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [
            {"id":1, "thumb": "/img/galeria-01.jpg"},
            {"id":2, "thumb": "/img/galeria-02.jpg"},
            {"id":3, "thumb": "/img/galeria-03.jpg"},
            {"id":4, "thumb": "/img/galeria-04.jpg"},
            {"id":5, "thumb": "/img/galeria-05.jpg"},
            {"id":6, "thumb": "/img/galeria-06.jpg"},
            {"id":7, "thumb": "/img/galeria-07.jpg"},
            {"id":8, "thumb": "/img/galeria-08.jpg"},
            {"id":9, "thumb": "/img/galeria-09.jpg"},
          ]
        },
        {
          "id": 2,
          "slug":"nome-do-cliente-2",
          "name": "Nome do Cliente",
          "service": "Tipo do serviço realizado",
          "thumb": "/img/thumb-placeholder.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [
            {"id":1, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":2, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":3, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":4, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":5, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":6, "thumb": "/img/thumb-placeholder.jpg"},
          ]
        },
        {
          "id": 3,
          "slug":"nome-do-cliente-3",
          "name": "Nome do Cliente",
          "service": "Tipo do serviço realizado",
          "thumb": "/img/thumb-placeholder.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [

          ]
        },
        {
          "id": 4,
          "slug":"nome-do-cliente-4",
          "name": "Nome do Cliente",
          "service": "Tipo do serviço realizado",
          "thumb": "/img/thumb-placeholder.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [
            {"id":1, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":2, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":3, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":4, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":5, "thumb": "/img/thumb-placeholder.jpg"},
          ]
        },
        {
          "id": 5,
          "slug":"nome-do-cliente-5",
          "name": "Nome do Cliente",
          "service": "Tipo do serviço realizado",
          "thumb": "/img/thumb-placeholder.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [
            {"id":1, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":2, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":3, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":4, "thumb": "/img/thumb-placeholder.jpg"},
          ]
        },
        {
          "id": 6,
          "slug":"nome-do-cliente-6",
          "name": "Nome do Cliente",
          "service": "Tipo do serviço realizado",
          "thumb": "/img/thumb-placeholder.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim",
          "photos": [
            {"id":1, "thumb": "/img/thumb-placeholder.jpg"},
            {"id":2, "thumb": "/img/thumb-placeholder.jpg"},
          ]
        }
      ]
    },
    {
      "id": 2,
      "slug": "projetos-executados",
      "title": "Projetos Executados",
      "thumb": "/img/projetos-executados.jpg",
      "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "customers": [

      ]
    },
    {
      "id": 3,
      "slug": "manutencoes-facilities",
      "title": "Manutenções (facilities)",
      "thumb": "/img/manutencoes-facilities.jpg",
      "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "customers": [

      ]
    },
    {
      "id": 4,
      "slug": "placeholder",
      "title": "Placeholder",
      "thumb": "/img/thumb-placeholder.jpg",
      "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "customers": [

      ]
    },
  ]);
}

