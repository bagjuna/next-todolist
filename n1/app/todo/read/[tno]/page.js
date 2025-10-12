import TodoReadCP from "@/components/todo/todoReadCP";

export default async function TodoReadPage({params, searchParams}){

    const paramObj = await params;

    const query = await searchParams;

    // 쿼리 스트링은 문자열이므로
    const page = query.page || '1';
    const queryObj = new URLSearchParams();
    queryObj.set('page', page);

    // fetch
    const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`);
    const todo = await res.json();

    console.log(todo);

    return (
        <div>
            <TodoReadCP todo={todo} queryObj={queryObj} />
        </div>
    )


}