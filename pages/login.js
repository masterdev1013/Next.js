import React from 'react';

import { useRouter } from "next/navigation";

export const login = () => {
    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();

        const email = e.target.value;
        sendLoginEmail(email);

        router.push('/verify-email');
    }

    return (
        <div>
            <h1>Login in here</h1>

            <form onSubmit={onSubmit}>
                <input placeholder="Enter your email" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}