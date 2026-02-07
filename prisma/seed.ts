import {
  TicketStatus,
  UserRole,
  ServiceStatus,
} from "../generated/prisma/client";
import { prisma } from "@/lib/prisma";

async function main() {
  const admin = await prisma.user.create({
    data: {
      name: "Usuário Adm",
      email: "admin@test.com",
      role: UserRole.admin,
      password: "123456",
    },
  });

  const technicianCarlos = await prisma.user.create({
    data: {
      name: "Carlos Silva",
      email: "carlos.silva@test.com",
      role: UserRole.technical,
      password: "123456",
    },
  });

  const technicianAna = await prisma.user.create({
    data: {
      name: "Ana Oliveira",
      email: "ana.oliveira@test.com",
      role: UserRole.technical,
      password: "123456",
    },
  });

  const clientAndre = await prisma.user.create({
    data: {
      name: "André Costa",
      email: "andre.costa@test.com",
      role: UserRole.client,
      password: "123456",
    },
  });

  const clientAline = await prisma.user.create({
    data: {
      name: "Aline Souza",
      email: "aline.souza@test.com",
      role: UserRole.client,
      password: "123456",
    },
  });

  const clientJulia = await prisma.user.create({
    data: {
      name: "Julia Maria",
      email: "julia.maria@test.com",
      role: UserRole.client,
      password: "123456",
    },
  });

  const clientSuzane = await prisma.user.create({
    data: {
      name: "Suzane Moura",
      email: "suzane.moura@test.com",
      role: UserRole.client,
      password: "123456",
    },
  });

  /* ============================
   * SERVICES
   * ============================ */

  const serviceInternet = await prisma.service.create({
    data: {
      title: "Instalação de Rede",
      description: "Configuração e instalação de rede",
      price: 180,
      isActive: ServiceStatus.active,
    },
  });

  const serviceBackup = await prisma.service.create({
    data: {
      title: "Recuperação de Dados",
      description: "Recuperação de backup e arquivos",
      price: 200,
    },
  });

  const serviceHardware = await prisma.service.create({
    data: {
      title: "Manutenção de Hardware",
      description: "Diagnóstico e reparo de computador",
      price: 150,
    },
  });

  const serviceSoftware = await prisma.service.create({
    data: {
      title: "Suporte de Software",
      description: "Instalação e suporte de sistemas",
      price: 200,
    },
  });

  const servicePeripheral = await prisma.service.create({
    data: {
      title: "Suporte de Software",
      description: "Configuração de periféricos",
      price: 80,
    },
  });

  /* ============================
   * TICKETS
   * ============================ */

  const ticket1 = await prisma.ticket.create({
    data: {
      title: "Rede lenta",
      description: "Internet com lentidão constante",
      status: TicketStatus.open,
      clientId: clientAndre.id,
      technicianId: technicianCarlos.id,
      ticketServices: {
        create: {
          serviceId: serviceInternet.id,
          priceSnapshot: 180,
        },
      },
    },
  });

  const ticket2 = await prisma.ticket.create({
    data: {
      title: "Backup não está funcionando",
      description: "Erro ao restaurar arquivos",
      status: TicketStatus.open,
      clientId: clientAndre.id,
      technicianId: technicianCarlos.id,
      ticketServices: {
        create: {
          serviceId: serviceBackup.id,
          priceSnapshot: 200,
        },
      },
    },
  });

  const ticket3 = await prisma.ticket.create({
    data: {
      title: "Computador não liga",
      description: "Equipamento não apresenta sinal de energia",
      status: TicketStatus.inAttendance,
      clientId: clientAline.id,
      technicianId: technicianCarlos.id,
      ticketServices: {
        create: {
          serviceId: serviceHardware.id,
          priceSnapshot: 150,
        },
      },
    },
  });

  const ticket4 = await prisma.ticket.create({
    data: {
      title: "Instalação de software de gestão",
      description: "Instalar sistema de gestão empresarial",
      status: TicketStatus.closed,
      closedAt: new Date(),
      clientId: clientJulia.id,
      technicianId: technicianAna.id,
      ticketServices: {
        create: {
          serviceId: serviceSoftware.id,
          priceSnapshot: 200,
        },
      },
    },
  });

  const ticket5 = await prisma.ticket.create({
    data: {
      title: "Meu fone não conecta no computador",
      description: "Problema ao parear fone de ouvido",
      status: TicketStatus.closed,
      closedAt: new Date(),
      clientId: clientSuzane.id,
      technicianId: technicianAna.id,
      ticketServices: {
        create: {
          serviceId: servicePeripheral.id,
          priceSnapshot: 80,
        },
      },
    },
  });

  console.log("🌱 Seed executado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
