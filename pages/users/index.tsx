import { useRouter } from "next/router"

interface UsersProps{
    dataUsers: Array<any>
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props;
    const router = useRouter();

    return (
        <div>
            <p>Users</p>
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => { router.push(`/users/${user.id}`) }}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers
        }
    }
}