export default function houseGroupPage({houses}){
    console.log(houses)
    return(
        <>
        
        </>
    )
}

export function getStaticPaths(){
    
}

export async function getStaticProps(){
    const data = await fetch("http://localhost:3000/houses")
    const houses = await data.json()
    return{
        props : {
            houses : houses
        }
    }
}