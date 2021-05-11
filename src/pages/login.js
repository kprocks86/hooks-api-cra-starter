/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react';
import api from 'hooks/api';

export default function Login() {

    const [sendRequest] = api.get('',{});

    // sample for useQuery!
    useEffect(() => {
      sendRequest();
    },[]);

    return (
        <div>
            hi
        </div>
    )
}
