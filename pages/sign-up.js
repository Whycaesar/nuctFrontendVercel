import { useState } from "react"

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

const submitSubscribe = async event => {
    event.preventDefault()
    const res = await fetch(process.env.APIURL + '/subscribes', {
      body: JSON.stringify({
        Firstname: firstName,
        Lastname: lastName,
        EmailAddress: emailAddress,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    console.log(result.Firstname)
    setFirstName('');
    setLastName('');
    setEmailAddress('')
  }


    return (
        <div className="h-auto md:h-72 bg-gray-100 dark:bg-gray-800 opacity-95 md:m-5 mt-5 p-9">
            <div className="text-signUp opacity-100 text-3xl leading-5 font-medium dark:text-gray-200">Subscribe</div>
            <div className="my-5 text-third dark:text-gray-200">Please enter your email address to receive news and updates.</div>
            <div className="mt-10">
                <form className="flex flex-col md:flex-row" name="myForm" onSubmit={submitSubscribe}>
                    <input name="firstName"
                        className="md:text-sm lg:text-base p-3 md:w-1/5 lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none"
                        id="name" type="text" name="Firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input name="lastName"
                        className="md:text-sm lg:text-base p-3 md:w-1/5  lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none my-3 md:my-0 md:mx-3"
                        id="name" type="text" name="Lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input name="emailName"
                        className="md:text-sm lg:text-base p-3 md:w-1/5 lg:w-1/4 placeholder-gray-400 focus:placeholder-gray-100 outline-none"
                        id="name" type="email" name="Email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                    <button
                        className="md:text-sm lg:text-base p-3 md:w-1/5 text-white bg-black ml-0 md:ml-2 px-10 md:px-0 mt-5 md:m-0"
                        type="submit" aria-label="Right Align">
                        SIGN UP
                    </button>
                </form>
            </div>
            <div className="mt-5 text-xs opacity-80 text-signUp dark:text-gray-200">We respect your privacy {firstName + " " + lastName}</div>
        </div>

    )
}


