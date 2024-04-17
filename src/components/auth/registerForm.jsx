'use client'
function RegisterForm() {

    function signUpHandler() {
        // sing up
    }
    return (
        <div >
            <div className='flex flex-col gap-2'>
                <input type="text" placeholder='Full Name' className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input type="text" placeholder='Email address' className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input type="text" placeholder='Phone number' className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input type="text" placeholder='Password' className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input type="text" placeholder='Re-type Password' className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <button
                    type="button"
                    onClick={signUpHandler}
                    className='bg-[#60b8a6] text-white py-1 rounded text-center  cursor-pointer hover:bg-[#448b7d] transition'>Sign Up</button>
            </div>
        </div>
    )
}

export default RegisterForm