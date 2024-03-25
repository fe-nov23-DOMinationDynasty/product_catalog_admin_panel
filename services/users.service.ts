import { User } from '@prisma/client';
import prisma from '../utils/db';

const USER_NOT_FOUND_ERROR = 'User not found';

export const getAll = async () => {
  return await prisma.user.findMany();
};

export const getById = async (id: string) => {
  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) {
    throw new Error(USER_NOT_FOUND_ERROR);
  }

  return user;
};

export const destroy = async (id: string) => {
  const userToDelete = await prisma.user.findFirst({ where: { id } });

  if (!userToDelete) {
    throw new Error(USER_NOT_FOUND_ERROR);
  }

  return await prisma.user.delete({ where: { id } });
};

export const update = async (id: string, updatedFields: Partial<User>) => {
  const userToUpdate = await prisma.user.findFirst({ where: { id } });

  if (!userToUpdate) {
    throw new Error(USER_NOT_FOUND_ERROR);
  }

  await prisma.user.update({
    where: { id },
    data: {
      ...userToUpdate,
      ...updatedFields,
    },
  });

  return {
    ...userToUpdate,
    ...updatedFields,
  };
};
