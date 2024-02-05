import fs from "fs"

const todosPath = "todos.json"

interface Todo {
  id: number
  task: string
}

function saveTodos(todos: Todo[]):void {
  fs.writeFileSync(todosPath,JSON.stringify(todos))
}

function getTodos(): Todo[] {
  if (!fs.existsSync(todosPath)) {
    return []
  }

  const data = fs.readFileSync(todosPath)

  try {
    const items = JSON.parse(data.toString()) as Todo[]
      return items

  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

function addTodo(task:string):void {
  const todos = getTodos() 
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0
  todos.push({
    id,
    task    
  })
  saveTodos(todos)
  console.log(`Added todo ${id}: ${task}`)
}

function removeTodo(id:number):void {
  const todos = getTodos()
  // id
  // index
  const index = todos.findIndex((todo)=> todo.id === id)
  if (index === -1 ) {
    console.log(`Could not find todo with id ${id}`)
    return
  }
  const removedTodo = todos.splice(index,1)[0]
  saveTodos(todos)
  console.log(`Removed todo ${removedTodo.id}: ${removedTodo.task}`)
}

function listTodos():void {
  const todos = getTodos()
  for (let i = 0; i < todos.length; i++) {
     console.log (`${todos[i].id}: ${todos[i].task}`)
  }
}

function cliInvalidOption(command: string): void {
  console.error(`Invalid number of options for subcommand "${command}"`);
}

function cli(): void {
  const subcommand = process.argv[2];
  const options = process.argv.slice(3);
  
  switch (subcommand) {
    case "--help":
      console.log("todo add TASK     add todo");
      console.log("todo done ID      complete a todo");
      console.log("todo list         list todo");
      break;
    case "add":
      if (options.length === 1) {
        addTodo(options[0]);
      } else {
        cliInvalidOption("add");
      }
      break;
    case "done":
      if (options.length === 1) {
        const id = parseInt(options[0]);
        if (isNaN(id)) {
          console.log(`Option must be a number for subcommand "done"`);
        } else {
          removeTodo(id);
        }
      } else {
        cliInvalidOption("done");
      }

      break;
    case "list":
      if (options.length === 0) {
        listTodos();
      } else {
        cliInvalidOption("list");
      }
      break;
    default:
      console.log("Invalid subcommand");
  }
}

cli()    
/* 
function getTodos(): Todo[] {
  return 1
}

function listTodos():void {
  return 1
}

function saveTodos(todos: Todo[]):void {
  return 1
}

function removeTodo(id:number):void {
  return 1
}

function addTodo(task:string):void {
  return 1
}

function cli():void {
  return 1
} */