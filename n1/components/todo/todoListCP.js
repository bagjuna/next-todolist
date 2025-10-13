import Link from "next/link";
import TodoPagingCP from "./todoPagingCP";
export default function TodoListCP({data, queryObj}){

    const {list, total} = data;

    return (
        <div>
            <div> Todo List Component</div>
            <ul>
                {list.map (todo =>
                <li key={todo.tno}>
                    <Link href={`/todo/read/${todo.tno}?${queryObj.toString()}`}>
                    {todo.tno} -- {todo.title} -- {todo.writer}
                    </Link>
                </li>
                )}
            </ul>

            <TodoPagingCP totalCount={total} size={10} page={queryObj.get('page')}></TodoPagingCP>

        </div>
    )
}