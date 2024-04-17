'use client'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

function LoginButton() {
    const { status, data } = useSession()
    const { replace, push } = useRouter()

    const query = useSearchParams()
    const isOpen = query.get("signin")
    const product = query.get("product") // for product page

    useEffect(() => {
        if (isOpen === "user" && status === "unauthenticated") {
            window.login_modal_1?.showModal()
        }
    }, [isOpen, status])

    if (data && status === "authenticated") {
        return (
            <div onClick={() => push("/account")}
                className="cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                <p className="font-semibold text-sm text-slate-600">Hello, {data?.user?.name}</p>

                <p className="font-bold text-base text-teal-500">Account & Lists</p>
            </div>
        )
    } else {
        return (
            <div onClick={() => {
                if (product) {
                    replace(`?product=${product}&signin=user`)
                } else {
                    replace(`?signin=user`)
                    window.login_modal_1.showModal()
                }
            }}
                className="cursor-pointer hover:outline text-center rounded-sm outline-teal-400 p-[2px] ">
                <p className="font-semibold text-sm text-slate-600">Sign in/Register</p>

                <p className="font-bold text-base text-teal-500">Account & Lists</p>
            </div>
        )
    }
}

export default LoginButton