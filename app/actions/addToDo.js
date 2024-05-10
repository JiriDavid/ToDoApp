'use server'

import { revalidatePath } from "next/cache";

const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient();

export default async function addToDo(formData){
  const title = formData.get("title");
  try{
    await prisma.ToDo.create({
      data: {
        title
      }
    })
    revalidatePath('/')
  }
  catch (e){
    console.error(e);
  }
}