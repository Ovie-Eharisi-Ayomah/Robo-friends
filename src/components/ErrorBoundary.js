import React, {useEffect, useState} from "react";

const ErrorBoundary = (props) => {
    const [hasError, setHasError] = useState(false)
    

    useEffect(() => {
        setHasError( true );
    }, [])

    
    if (!hasError) {
        return <h1>Oooops. That is not good</h1>
    }
    return props.children;

}

export default ErrorBoundary