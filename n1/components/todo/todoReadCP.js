import Link from "next/link";

export default function TodoReadCP({todo, queryObj}){

    return (
        <div>
            <div> Todo Read Component</div>
            <div>
                <div>{todo.tno}</div>
                <div>{todo.title}</div>
                <div>{todo.writer}</div>
                <div>{todo.completed ? 'Y': 'N'}</div>
                <div>{todo.createDate}</div>
            </div>
            <Link href={`/todo/list?${queryObj.toString()}`}>
                <button>List</button>
            </Link>
        </div>
    )
}