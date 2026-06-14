import { prisma } from "@/lib/prisma";

export async function getTripByShareSlug(shareSlug: string) {
  return prisma.trip.findUnique({
    where: { shareSlug },
    include: {
      days: {
        orderBy: { date: "asc" },
        include: {
          cards: {
            orderBy: { position: "asc" }
          }
        }
      },
      members: true
    }
  });
}

export async function createTrip(input: {
  title: string;
  destination: string;
  startsAt: Date;
  endsAt: Date;
  ownerId: string;
}) {
  return prisma.trip.create({
    data: {
      title: input.title,
      destination: input.destination,
      startsAt: input.startsAt,
      endsAt: input.endsAt,
      shareSlug: crypto.randomUUID(),
      members: {
        create: {
          userId: input.ownerId,
          role: "OWNER"
        }
      }
    }
  });
}
