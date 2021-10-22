export default function SignUp() {
const validateForm =  () => {
    console.log("hahaha")
}
    return (
        <div className="h-auto md:h-72 bg-gray-100 opacity-95 md:m-5 mt-5 p-9">
            <div className="text-signUp opacity-100 text-3xl leading-5 font-medium">Subscribe</div>
            <div className="my-5">Please enter your email address to receive news and updates.</div>
            <div className="mt-10">
                <form className="flex flex-col md:flex-row" name="myForm" action="" method="POST" onSubmit={validateForm}>
                    <input name="firstName"
                    className="md:text-sm lg:text-base p-3 md:w-1/5 lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none" 
                    id="name" type="text" placeholder="First Name"/>
                    <input name="lastName"
                    className="md:text-sm lg:text-base p-3 md:w-1/5  lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none my-3 md:my-0 md:mx-3" 
                    id="name" type="text" placeholder="Last Name"/>
                    <input name="emailName"
                    className="md:text-sm lg:text-base p-3 md:w-1/5 lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none" 
                    id="name" type="email" placeholder="Email Address"/>
                    <button className="md:text-sm lg:text-base p-3 md:w-1/5 text-white bg-black ml-0 md:ml-2 px-10 md:px-0 mt-5 md:m-0" type="submit" aria-label="Right Align">SIGN UP</button>
                </form>
            </div>
            <div className="mt-5 text-xs opacity-80 text-signUp">We respect your privacy.</div>
        </div>

    )
}

