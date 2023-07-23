
const URL = "https://randomuser.me/api"

export const getInitialCandidates = async () => {
    // fetch("https://randomuser.me/api/?results=6")
    //     .then(response => response.json())
    //     .then(data => setCandidates(data.results))
    try {
        const response = await fetch(`${URL}/?results=6`)
        const data = await response.json()
        console.log(data.results)
        return data.results
    } catch (error) {
        console.log(error)
    }

    
}



export const getOneCandidate = async () => {
    // fetch("https://randomuser.me/api/?results=1")
    // .then(response => response.json())
    // .then((data) => {
    //     const aux = [...candidates]
    //     aux[index]={...data.results[0]}
    //     setCandidates(aux)
    // })
try {
    const response = await fetch(`${URL}/?results=1`)
    const data = await response.json()
    return data.results[0]
} catch (error) {
    console.log(error)
}

   
}