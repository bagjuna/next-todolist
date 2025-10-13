import TodoEditCP from "@/components/todo/todoEditCP";

export default async function TodoEditPage({params, searchParams}) {
    const paramObj = await params;

    const query = await searchParams;

    // 쿼리 스트링은 문자열 이므로
    const page = query?.page || '1';

    const queryObj = new URLSearchParams();
    queryObj.set('page', page);

    // API 서버에서 조회
    const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`);

    const todo = await res.json();

    return (
        <div>
            <div>Todo Edit Page</div>
            <TodoEditCP
                todo={todo}
                queryObj={queryObj}
            >

            </TodoEditCP>
        </div>
    )
}