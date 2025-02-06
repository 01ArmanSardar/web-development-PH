import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useJob = (sort) => {
    const { loading, setLoading } = useAuth()
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/jobs?sort=${sort}`)
            .then((res) => {

                setjobs(res.data)
                setLoading(false)


            })

    }, [sort])

    return { jobs }
};

export default useJob;