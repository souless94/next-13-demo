"use client";

import {useSession} from "next-auth/react"
import {SignInButton} from "@/components/buttons";

export default function AuthCheck({children}: { children: React.ReactNode }) {
    const {data: session, status} = useSession();

    console.log(session, status)

    if (status === 'authenticated') {
        return <>{children}</>
    } else {
        return <><SignInButton/></>
    }
}