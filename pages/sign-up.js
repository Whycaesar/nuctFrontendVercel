export default function SignUp() {
const validateForm =  () => {
    console.log("hahaha")
}
    return (
        <div className="h-72 bg-gray-100 opacity-95 mt-5 p-9">
            <div className="text-signUp opacity-100 text-3xl leading-5 font-medium">Subscribe</div>
            <div className="my-5">Please enter your email address to receive news and updates.</div>
            <div className="mt-10">
                <form name="myForm" action="" method="POST" onSubmit={validateForm}>
                    <input name="firstName"
                    className="text-base p-3 w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none" 
                    id="name" type="text" placeholder="First Name"/>
                    <input name="lastName"
                    className="text-base p-3 w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none mx-3" 
                    id="name" type="text" placeholder="Last Name"/>
                    <input name="emailName"
                    className="text-base p-3 w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none" 
                    id="name" type="email" placeholder="Email Address"/>
                    <button className="text-base p-3 text-white bg-black ml-2 px-10" type="submit">SIGN UP</button>
                </form>
            </div>
            <div className="mt-5 text-xs opacity-80 text-signUp">We respect your privacy.</div>
        </div>

    )
}

