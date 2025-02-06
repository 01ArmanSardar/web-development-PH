import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useJob = (sort, search, minSalary, maxSalary) => {
    const { loading, setLoading } = useAuth()
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
            .then((res) => {

                setjobs(res.data)
                setLoading(false)


            })

    }, [sort, search,minSalary,maxSalary])

    return { jobs }
};

export default useJob;