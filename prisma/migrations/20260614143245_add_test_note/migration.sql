-- CreateTable
CREATE TABLE "TestNote" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestNote_pkey" PRIMARY KEY ("id")
);
