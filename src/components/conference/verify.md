import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function verify() {

const history = useHistory();
const verify = ({ router: {query}}) => {

    const router = useRouter()

    useEffect(() => {
        if (query.confDate === 'fridayOnly'){ history.push('/') }

        if (query.confDate === 'both'){ history.push('/') }

        if (query.confDate === 'saturdayOnly'){ history.push('/') }
    })

    return <h1>Loading...</h1>
}
}


