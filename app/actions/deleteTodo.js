'use server'

import { revalidatePath } from "next/cache";

const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient();

export default async function deleteTodo(formData){
  const id = parseInt(formData.get('id'));
  try{
    await prisma.ToDo.delete({
      where:{id}
    })
    revalidatePath('/')
  }
  catch(e) {
    console.error(e);
  }
}