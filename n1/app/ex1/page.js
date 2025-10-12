export default function Ex1Page(){
    const current = new Date().toString()
    return(
        <div>
            <div>Ex page</div>
            <div>{current}</div>
        </div>
    )
}