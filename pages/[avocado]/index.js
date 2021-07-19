import { useRouter } from "next/dist/client/router"

const SlugPage = () => {
    const { query } = useRouter()
    return <div>Hello from {query.avocado}</div>
}

export default SlugPage