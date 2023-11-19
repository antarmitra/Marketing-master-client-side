 import logo from '../../assets/logo/dm1.png'
import face from '../../assets/icon/face-removebg-preview.png'
import instra from '../../assets/icon/in-removebg-preview.png'
import youtube from '../../assets/icon/twi-removebg-preview.png'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-300 p-8 text-black">
            <div className="flex flex-grow flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <div>
                    <img className='w-52' src={logo} alt="" />
                    <div className="grid grid-flow-col ml-6">
                        <a href="https://www.facebook.com/groups/288111895977592/members" >
                            <img className='w-8' src={face} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/programminghero/">
                            <img className='w-8' src={instra} alt="Twitter" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=YRzkxLmZH9g">
                            <img className='w-8' src={youtube} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <ul className='flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-x-4 lg:gap-x-6 ml-2 md:ml-0 lg:ml-0'>
                    <li>
                        <a href="#" className='text-base font-medium  text-blue-gray-900  hover:text-blue-700'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='text-base font-medium text-blue-gray-900 hover:text-blue-700'>Add Job</a>
                    </li>
                    <li>
                        <a href="#" className='text-base font-medium text-blue-gray-900 hover:text-blue-700'>My Posted Job</a>
                    </li>
                    <li>
                        <a href="#" className='text-base font-medium text-blue-gray-900 hover:text-blue-700'>My Bids</a>
                    </li>
                    <li>
                        <a href="#" className='text-base font-medium text-blue-gray-900  hover:text-blue-700'>Bids Request</a>
                    </li>
                </ul>
            </div>
            <hr className='my-8 text-blue-gray-200' />
            <p className='text-center text-base font-normal'>© 2023 - All right reserved || Marketing Master</p>


        </footer>
    );
};

export default Footer;