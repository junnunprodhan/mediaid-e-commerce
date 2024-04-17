'use client'
import { SessionProvider as Provider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
function SessionProvider({ children }) {
    return (
        <Provider>
            <Toaster />
            {children}
        </Provider>
    )
}

export default SessionProvider