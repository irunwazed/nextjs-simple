import { useRouter } from "next/router"

interface User{
    id: number
    name: string
    email: string
}

interface DetailProps{
    user: User
}

export default function Detail(props: DetailProps) {

    const router = useRouter();
    const {id} = router.query;
    const {user} = props;
    return (
        <div>
            <p>User {id}</p>
            <p>Nama : {user.name}</p>
            <p>email : {user.email}</p>
        </div>
    )
}


export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const dataUsers = await res.json();
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        }
    }))
    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps{
    params: {
        id: string
    }
}
export async function getStaticProps(context: GetStaticProps){
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();
    return {
        props: {
            user
        }
    }
}