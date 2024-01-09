import { navlinks } from '../constants/navlinks'
import nishan from "../assets/nishan.svg"
import downwardArrow from "../assets/downwardArrow.svg"

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`h-[40px] w-[40px] flex justify-start items-center bg-transparent ${styles}`} onClick={handleClick}
  >
    <img src={imgUrl} className={`h-1/2 w-1/2`}></img>
    <p className='text-white ml-2'> {name}</p>
    
  </div>
)


const Sidebar = () => {
  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-screen mr-5'>
      <div className='flex-1 flex flex-col pl-8 pr-4 bg-[#1E2640] w-[210px] py-4'>
        <div className='flex flex-row justify-between mb-3 '>
        <img
            src={nishan}
            alt='nishan'
            className='h-[40px] object-contain'
          />
        <div className='flex flex-col'>
            <p className='text-white font-semibold'>Nishan</p>
            <a href='#' className='text-white'>Visit Store</a>
        </div>
        <img
            src={downwardArrow}
            alt='downwardAroow'
            className='w-[20px] h-[20px] object-contain'
          />       
        </div>
        <div className='flex flex-col justify-center gap-2'>
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
