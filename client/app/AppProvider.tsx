'use client'
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    sessionToken: '',
    setSessionToken: (sessionToken: string) => {}
});

// Custom hook to use the AppContext
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};


// AppProvider component to wrap the application
export default function AppProvider({ children, initSessionToken }: { children: React.ReactNode, initSessionToken: string }) {
    const [sessionToken, setSessionToken] = useState(initSessionToken);
    // You can add logic here to provide sessionToken or other global states
    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken }}>
            {children}
        </AppContext.Provider>
    );
}
