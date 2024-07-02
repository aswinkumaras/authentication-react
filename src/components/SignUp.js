import React from 'react'
import { useState } from 'react'

const SignUp = () => {
  const [signUp,setSignUp] = useState('false')

  return (
  <>  
    <div class="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-lg">
  <h1 class="text-3xl font-bold mb-4">Sign Up</h1>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700" for="name">Name</label>
      <input class="w-full border py-2 pl-10 text-sm text-gray-700" id="name" type="text" placeholder="Enter the name" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700" for="email">Email</label>
      <input class="w-full border py-2 pl-10 text-sm text-gray-700" id="email" type="email" placeholder="Enter the email" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700" for="password">Password</label>
      <input class="w-full border py-2 pl-10 text-sm text-gray-700" id="password" type="password" placeholder="********" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700" for="confirm-password">Confirm Password</label>
      <input class="w-full border py-2 pl-10 text-sm text-gray-700" id="confirm-password" type="password" placeholder="********" />
    </div>
    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
  </form>
</div>

</>
  )
}

export default SignUp