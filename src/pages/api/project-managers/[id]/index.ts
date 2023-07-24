import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { projectManagerValidationSchema } from 'validationSchema/project-managers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.project_manager
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getProjectManagerById();
    case 'PUT':
      return updateProjectManagerById();
    case 'DELETE':
      return deleteProjectManagerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getProjectManagerById() {
    const data = await prisma.project_manager.findFirst(convertQueryToPrismaUtil(req.query, 'project_manager'));
    return res.status(200).json(data);
  }

  async function updateProjectManagerById() {
    await projectManagerValidationSchema.validate(req.body);
    const data = await prisma.project_manager.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteProjectManagerById() {
    const data = await prisma.project_manager.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
