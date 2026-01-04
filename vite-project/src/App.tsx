import { useState } from 'react'
import maxLogo from './assets/max-logo.png'
import okLogo from './assets/ok-logo.svg.png'
import vkLogo from './assets/VK-logo.svg (1).webp'
import './App.css'

const SocialBlock = ({mode} : {mode : string}) =>(
  <>
    <p className='text-white '>{mode}</p>
    <div className='flex flex-row gap-10'>
      <img src={maxLogo} alt="" className='w-10 h-10'/>
      <img src={okLogo} alt="" className='w-10 h-10'/>
      <img src={vkLogo} alt="" className='w-10 h-10'/>
    </div>
  </>
)

const MyInput = ({ placeholder, type }: { placeholder: string, type: string }) => (
  <input type={type} placeholder={placeholder} className='outline-none focus:ring-2 focus:ring-green-500 transition-all bg-gray-500 px-2 rounded-lg h-9 w-60 text-white' />
)

const Login = () => (
  <>
    <MyInput placeholder='email' type='text'/>
    <MyInput placeholder='password' type='password'/>
  </>
)

const SignUp = () => (
  <>
    <MyInput placeholder='fullname' type='text'/>
    <MyInput placeholder='email' type='text'/>
    <MyInput placeholder='password' type='password'/>
  </>
)

function App() {
  const[status, setStatus] = useState('login');
  console.log(status);
  return (
    <div className='bg-gray-700 min-h-screen'>
      
      <div className='gap-5 flex flex-col items-center rounded-2xl'>
        <div className='flex justify-center  text-2xl mt-5'>
          <button className={`mb-1 active:text-gray-400 border-b-2 w-30 ${status === 'login' ? ('text-gray-400') : ('text-gray-500')}`} onClick={()=>setStatus('login')}>Login</button>
          <button className={`mb-1 active:text-gray-400 border-b-2 w-30 ${status === 'signup' ? ('text-gray-400') : ('text-gray-500')}`} onClick={()=>setStatus('signup')}>Sign Up</button>
        </div>
        { status ==='login' ? (
          <>
            <Login />
          </>
        ) : (
          <>     
            <SignUp />
          </>
        )
        }
        <button className='bg-green-500 hover:bg-green-600 w-35 h-11 rounded-lg text-white mt-5'>submit</button>
        <SocialBlock mode={`${status === 'login' ? ('Or Sign In with') : ('Or Sign Up with')}`}/>
      </div>
    </div>
  )
}

export default App
