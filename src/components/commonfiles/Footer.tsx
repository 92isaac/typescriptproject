import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingBag, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black py-3 text-white'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-2 md:grid md:grid-cols-4">
        <ul className=''>
            <li className='uppercase text-sm md:text-2xl font-bold leading-8'>About Us</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Blog</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>B2B Digital</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Bridestory</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Mitra Blog</li>
        </ul>
        <ul className=''>
            <li className='uppercase text-sm md:text-2xl font-bold leading-8'>Buy & Sell</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Bill & Top Up</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>COD</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Seller Education</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Official Store list</li>
        </ul>
        <ul className=''>
            <li className='uppercase text-sm md:text-2xl font-bold leading-8'>Our Policies</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Privacy and Policy</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Term of Use</li>
            <li className='text-xs leading-5 md:leading-8 md:text-sm '>Term of Order</li>
        </ul>
        <div className='mt-4 md:mt-0'>
            <Link to="/" className='mb-5 text-white'><FaShoppingBag className='inline text-sm md:text-2xl'/> TOKOSMILE</Link>
            <p className='text-sm mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, reprehenderit!</p>
            <div className='flex gap-3 mt-2'>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter/>
            </div>
        </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer