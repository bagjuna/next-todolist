import TodoListCP from "@/components/todo/todoListCP";

export default async function TodoListPage({searchParams}){

    const query = await searchParams;

    const page = query.page || '1';
    const queryObj = new URLSearchParams();
    queryObj.set('page', page);

    const res = await fetch(`http://localhost:8080/api/todos/list?page=${page}`);

    const result = await res.json();

    console.log(result);

    return (
        <div>
            <div>Todo List Page</div>
            <TodoListCP data={result} queryObj={queryObj}>

            </TodoListCP>
        </div>
    )
}