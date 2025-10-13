'use server';

export async function postTodo(prevState, formData){
    console.log('Post Todo ...')
    console.log(formData)

    const res = await fetch('http://localhost:8080/api/todos', {method: 'POST', body: formData});

    const serverResult = await res.json();

    console.log(serverResult);

    return {result: 'success' };
}


export async function putTodo(prevState, formData){
    console.log('Edit Todo ...')

    const tno = formData.get('tno');

    const res = await fetch(`http://localhost:8080/api/todos/${tno}`,
        {method: 'PUT', body: formData});

    const serverResult = await res.json();

    console.log(serverResult);

    return {result: serverResult.tno };
}


