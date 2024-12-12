export async function jsonHandler(request, response){
    const buffers = []

    for await (const chunk of request){
        buffers.push(chunk)
    }

    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        console.log(error)
        request.body = null
    }
    response.setHeader("Concent-Type", "application/json")
}