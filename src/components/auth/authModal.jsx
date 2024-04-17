'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { replace } = useRouter()
  const pathname = usePathname()
  const closeBtnRef = useRef(null)
  // If product view
  const query = useSearchParams()
  const product = query.get("product")


  return (
    <dialog id="login_modal_1" className="modal ">
      <Toaster />
      <form method="dialog" className="modal-box">
        <div className="w-full h-full py-2">
          <h1 className="text-base md:text-lg font-bold text-black">
            {isSignUp ? "Sign Up please" : "Sign In please"}
          </h1>
          <div className="mt-4">
            {
              isSignUp ?
                // Sign Up form
                <RegisterForm />
                :
                // Login Form
                <LoginForm closeBtnRef={closeBtnRef} />
            }
          </div>
        </div>
        {/* Register Button */}
        <div onClick={() => setIsSignUp(s => !s)} className='text-sm flex gap-2 mt-2 items-center'>
          {isSignUp ? <span>Already have and account to</span> : <span>Don&apos;t have an account to</span>}
          <span className='text-[#60b8a6] cursor-pointer hover:text-[#459182] transition'>
            {isSignUp ? "Login" : "Register"}
          </span>
        </div>

        {/* Close Modal Buton */}
        <button ref={closeBtnRef} onClick={() => {
          setIsSignUp(false)
          if (product) {
            replace(`?product=${product}`)
          } else {
            replace(`${pathname}`)
          }
        }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </dialog>
  );
};

export default AuthModal;