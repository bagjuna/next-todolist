import Link from "next/link";

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
        </div>
    )
}