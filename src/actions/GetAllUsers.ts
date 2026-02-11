"use server";

import { UserRole } from "@/generated/client/enums";
import { prisma } from "@/lib/prisma";

export const GetAllUsers = async (role: UserRole) => {
  return await prisma.user.findMany({
    where: {
      role: role,
    },
    include: {
      availabilities: {
        select: {
          schedules: true,
        },
      },
    },
  });
};
