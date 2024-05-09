import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <pre style={{fontSize: '2em'}}>Error: {error.code}</pre>
            <pre>{error.message}</pre>
        </>
    )
}