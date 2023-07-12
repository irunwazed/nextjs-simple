import { useRouter } from "next/router"
import { useEffect } from "react"


export default function Custom404(){
    const router = useRouter();

    useEffect(()=> {
        setTimeout(()=> {
            router.push('/')
        }, 2000)
    })

    return(
        <>
        <h1>Ooooops, page not found!</h1>
        </>
    )
}