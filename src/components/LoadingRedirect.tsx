import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoadingRedirect = () => {
    const [ count, setCount ] = useState(5)
    const navigate = useNavigate()


    useEffect(() => {
      const interval = setInterval(()=>{
        setCount((currentCount) => currentCount - 1)
      }, 1000)
      count === 0 && navigate('/login')

      return ()=> clearInterval(interval)
    }, [count, navigate])
    
  return (
    <div className='h-80 flex justify-center'>
        <div className='my-auto bg-slate-200 rounded-sm shadow-md px-10 py-5'>
          <h1 className='text-yellow-400 text-2xl font-bold'>You are not logged in</h1>
            <p className=''>Redirecting you in {count} second(s)</p>
        </div>
    </div>
  )
}

export default LoadingRedirect