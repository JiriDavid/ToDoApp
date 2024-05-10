import { PrismaClient } from "@prisma/client";
import addToDo from "./actions/addToDo";
import deleteTodo from "./actions/deleteTodo";

const prisma = new PrismaClient();

export default async function Home() {
 const todos = await prisma.ToDo.findMany();
  return (
    <main className="w-full px-12 flex flex-col justify-center items-center py-12 space-y-4">
      <h1 className="text-4xl">To Do <span className="text-green-700">List</span></h1>
      <form action={addToDo} className="space-x-4">
        <input name="title" type="text" placeholder="add a new todo" className="border rounded-xl bg-transparent focus:outline-none p-2"/>
        <button type="submit" className="bg-green-700 rounded-full p-2">Add Todo</button>
      </form>
     <ul>
     {
        todos.map((todo)=>(
          <li key={todo.id}>
            <span>{todo.title}</span>
            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit">Delete todo</button>
            </form>
          </li>
        ))
      }
     </ul>
    </main>
  );
}
