import {useRouter} from 'next/router'


function comments() {

    const router = useRouter()
    const id = router.query.id

    return (
        <div>
            <h1>Blog {id} Comments </h1>
        </div>
    )
}

export default comments
