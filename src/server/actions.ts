"use server";

import { db } from "@/server/db";
import { action } from "@/lib/safe-action";
import { z } from "zod";
import { permissions } from "@/server/db/schema";

const addPermissionSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string(),
  signature: z.string(),
});

export const addPermission = action(addPermissionSchema, async (permission) => {
  await db.insert(permissions).values(permission);
});
