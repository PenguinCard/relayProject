async function fetchGraphQL(text:string, variables:any) {

    const res = await fetch('http://localhost:9999/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        })
    })

    return await res.json();
}

export default fetchGraphQL;
