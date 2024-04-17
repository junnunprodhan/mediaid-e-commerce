'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef, useState } from "react"
import { toast } from 'react-hot-toast'

function LoginForm() {
    const closeBtnRef = useRef(null) // create new close button reference
    const [inputData, setInputData] = useState({ username: "", password: "" })
    const { push, replace } = useRouter()

    // Redirect callback settings
    const searchParams = useSearchParams()
    const callback = searchParams.get('callbackUrl')
    const product = searchParams.get("product")
    const callbackPathname = callback ? callback.split(window.location.origin)[1] : null

    function loginHandler() {
        // validation input
        if (!inputData.username.trim() || !inputData.password.trim()) {
            return
        }
        // loading toast
        const toastId = toast.loading('Loading...', { duration: 8000, style: { zIndex: 555 } });
        signIn("credentials", { ...inputData, redirect: false })
            .then(({ error, url }) => {
                if (!error) {
                    // Login Successfully
                    if (product) {
                        replace(`/?product=${product}`) // redirect to view product
                    } else {
                        push(callbackPathname || "/") // redirect to callback url 
                    }
                    toast.success('Login Successfully', {
                        id: toastId,
                        duration: 3000
                    }); // success toast
                    closeBtnRef.current?.click() // modal close
                } else {
                    toast.error('Invalid username or password !', {
                        id: toastId,
                        duration: 3000,
                    });  // error toast
                }
            })
    }
    return (
        <div className=" flex flex-col w-full border-opacity-50">

            {/* Login with credentials */}
            <div className='flex flex-col gap-2'>
                <input
                    value={inputData.username}
                    onChange={({ target }) => {
                        setInputData(s => ({ ...s, username: target.value.trim() }))
                    }}
                    onKeyUp={(e) => e.key === "Enter" && loginHandler()}
                    type="text" placeholder='Username'
                    className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input
                    value={inputData.password}
                    onChange={({ target }) => {
                        setInputData(s => ({ ...s, password: target.value.trim() }))
                    }}
                    onKeyUp={(e) => e.key === "Enter" && loginHandler()}
                    type="text" placeholder='Password'
                    className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <button
                    type="button"
                    onClick={loginHandler}
                    className='bg-[#60b8a6] text-white py-1 rounded text-center  cursor-pointer hover:bg-[#448b7d] transition'>Sign In</button>
                <button hidden ref={closeBtnRef} className="hidden">toggle</button>
            </div>
            <div className="divider text-sm md:text-base text-slate-500">
                OR
            </div>
            {/* Login with google */}
            <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                type="button"
                className="w-full hover:bg-slate-200 transition py-1 outline-none border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2">
                <Image
                    src="https://i.ibb.co/5x1KjyG/googleicon-removebg-preview.png"
                    alt="googleicon"
                    width={15}
                    height={15} />
                Continue With Google
            </button>
        </div>

    )
}

export default LoginForm