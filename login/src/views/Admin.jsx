import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Admin = () => {
    const [users, setUsers] = useState(null);

    useEffect(async () => {
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get("http://localhost:8003/users/", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            if (response.status === 200) {
                setUsers(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }, []);

    if (!users) {
        return (
            <div>
                You don't have acces to the list of users.
            </div>
        );
    } else {
        return (
            <div>
                <h3>List of users: </h3>

                <ul>
                    {
                        users.map((elem, index) => {
                            return <li key={index}>{elem.username}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default Admin;
