import PrismaPKG, {
  type Assistant,
  type AssistantFile,
  type File,
  type Message,
  type MessageFile,
  type Prisma,
  type Run,
  type RunStep,
  type Thread
} from '@prisma/client'

const { PrismaClient } = PrismaPKG
const prisma = new PrismaClient()

export { prisma }

export type { Assistant }
export type { AssistantFile }
export type { File }
export type { Message }
export type { MessageFile }
export type { Prisma }
export type { Run }
export type { RunStep }
export type { Thread }
