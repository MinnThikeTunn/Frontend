
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');
export default axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        withCredentials: true,
        headers: {
                'Authorization': `Bearer ${token}`
            }
})
