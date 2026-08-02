import { ICardProject } from "../components/CardProjec";

export const projects: ICardProject[] = [
  {
    title: "SIDD",
    description:
      "Plataforma de expedientes digitales, descargos, gestión documental y trazabilidad administrativa. Centraliza correos, documentos, mensajes, notas internas, interconsultas y estados en un flujo controlado.",
    href: "/proyectos/sidd",
    status: "En desarrollo evolutivo",
    impact: "Trazabilidad administrativa",
    techs: [
      // Base de datos
      "postgresql",

      // Backend
      "nestjs",
      "typescript",

      // Frontend
      "nextjs",
      "tailwindcss",

      // Servidor / Infraestructura
      "docker",
      "ubuntu",

      // Otros
      "git",
      "github",
      "postman",
    ],
    urlImage: "/sidd.png",
  },
  {
    title: "Tarefero",
    description:
      "Sistema de gestión orientado al sector yerbatero y agrícola. Permite administrar chacras, lotes, labores, registros productivos y generar reportes, facilitando la toma de decisiones y el control del trabajo en campo.",
    href: "/proyectos/tarefero",
    status: "Producción activa",
    impact: "Usuarios reales",
    techs: [
      // Base de datos
      "postgresql",

      // Backend
      "nestjs",
      "typescript",

      // Frontend
      "react",
      "reactnative",
      "tailwindcss",

      // Servidor / Infraestructura
      "docker",
      "ubuntu",

      // Otros
      "git",
      "github",
      "postman",
    ],
    urlImage: "/tarefero2.png",
  },
  {
    title: "Pulguitas",
    description:
      "Sistema de gestión integral para PetShop, enfocado en el control de inventarios, ventas, compras y administración de usuarios. Optimiza la operatoria diaria y el seguimiento de stock y transacciones.",
    href: "/proyectos/pulguitas",
    status: "Producto escalable",
    impact: "Multi-tenant",
    urlImage: "/pulguitas.jpg",
    techs: [
      // Base de datos
      "mysql",
      "mongodb",

      // Backend
      "express",

      // Frontend
      "react",
      "tailwindcss",

      // Servidor / Infraestructura
      "docker",
      "ubuntu",

      // Otros
      "git",
      "github",
      "postman",
    ],
  },
  {
    title: "Stream Tech",
    description:
      "Sistema de gestión desarrollado para una empresa dedicada a la reparación y venta de dispositivos tecnológicos. Incluye administración de clientes, órdenes de servicio, ventas y control de stock.",
    href: "/proyectos/stream-tech",
    status: "Entregado",
    impact: "Gestión técnica",
    urlImage: "/streamtech.jpg",
    techs: [
      // Base de datos
      "mysql",

      // Backend
      "laravel",

      // Frontend
      "react",
      "tailwindcss",

      // Servidor / Infraestructura
      "ubuntu",
      "nginx",

      // Otros
      "git",
      "github",
      "postman",
    ],
  },
  {
    title: "Gestor de Gimnasio",
    description:
      "Sistema de gestión para gimnasios enfocado en el control de asistencia de socios y el seguimiento de pagos, con recordatorios automáticos y administración básica de usuarios.",
    href: "/proyectos/gym-negro",
    status: "Vendido",
    impact: "Operación local",
    urlImage: "/gymnegro.png",
    techs: [
      // Base de datos
      "mysql",

      // Backend
      "express",
      "html",
      "css",
      "javascript",
      // Otros
      "postman",
    ],
  },
  {
    title: "Kiosko Hell",
    description:
      "Sistema de escritorio desarrollado para la gestión local de un kiosco. Permite administrar ventas, compras, productos, categorías y usuarios, optimizando la operatoria diaria del negocio.",
    href: "/proyectos/kiosko-hell",
    status: "Vendido",
    impact: "Control comercial",
    techs: [
      // Base de datos
      "sqlserver",

      // Backend
      "dotnet",
      "csharp",
    ],
    urlImage: "/hell.jpg",
  },
];
