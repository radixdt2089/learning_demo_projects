import  { useRouter } from 'next/router'

function index() {

    const router = useRouter();
    const id = router.query.id
    const user = router.query.user

    return (
        <div>
            <h1>Blog {id}</h1>
            <h1>userName :- {user} </h1>
        </div>
    )
}

export default index
