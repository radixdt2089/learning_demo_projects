import  { useRouter } from 'next/router'

function Extra() {

    const router = useRouter()
    const slug = router.query.slug

    return (
        <div>
            <h1>Slug page</h1>
        </div>
    )
}

export default Extra
