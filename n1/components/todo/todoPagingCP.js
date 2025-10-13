import Link from "next/link";

export default function TodoListCP({totalCount, page, size}) {
    // 1 -> 10, 11 -> 20, 20 -> 20 마지막 페이지 계산
    const tempEnd = Math.ceil(page / 10.0) * 10; // Assuming 10 items per page
    //시작 페이지 계산
    const start = tempEnd - 9; // Start of the current page range

    console.log('==== page :', page);
    console.log('==== size :', size);
    console.log('==== totalCount :', totalCount);
    console.log('==== tempEnd :', tempEnd);
    console.log('==== start :', start);

    const totalPages = Math.ceil(totalCount / Number(size)); // Total number of


    const prev = start > 1; // 11~20, 21~30 -> true, 1~10 -> false
    console.log("totalPages : ", totalPages);
    console.log("tempEnd : ", tempEnd);
    const next = tempEnd < totalPages; // 1~10, 11~20 -> true, 21~30 -> false

    console.log("===================", prev, next);
    const end = totalPages < tempEnd ? totalPages : tempEnd; // 마지막 페이지 범위 조정

    const pages = Array.from({length: end - start + 1}, (_, index) => start + index);

    return (
        <div>
            <ul className="flex">

                {prev &&
                    <li className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${start -1}`}> Prev </Link>
                    </li>
                }


                {pages.map( num =>
                    <li key={num} className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${num}`}>{num}</Link>
                    </li>)
                }


                {next &&
                    <li className="m-2 p-2 bg-blue-200">
                        <Link href={`/todo/list?page=${end + 1}`}>Next</Link>
                    </li>
                }
            </ul>


        </div>
    )
}