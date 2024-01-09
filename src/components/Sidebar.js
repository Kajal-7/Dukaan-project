import { navlinks } from '../constants/navlinks'
import nishan from "../assets/nishan.svg"
import downwardArrow from "../assets/downwardArrow.svg"
import credits from "../assets/credits.svg"

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`h-[40px] w-[40px] flex justify-start items-center bg-transparent ${styles}`} onClick={handleClick}
  >
    <img src={imgUrl} className={`h-1/2 w-1/2`} alt={name}></img>
    <p className='text-white ml-3'> {name}</p>

  </div>
)


const Sidebar = () => {
  return (
    <div className='flex justify-between items-center bg-[#1E2640] flex-col min-h-screen sticky top-0'>
      <div className='flex-1 flex flex-col justify-between px-6 w-[210px] py-4 '>
        <div>
          <div className='flex flex-row justify-between items-center mb-3 '>
            <div className='flex flex-row justify-between'>
              <img
                src={nishan}
                alt='nishan'
                className='object-contain'
              />
              <div className='flex flex-col pl-3'>
                <p className='text-white font-semibold'>Nishan</p> 
                <a href='/' style={{borderBottom: "1px solid white"}}className='text-white text-[12px] pointer'>Visit Store</a>
              </div>
            </div>
            <img
              src={downwardArrow}
              alt='downwardAroow'
              className='w-[20px] h-[20px] object-contain'
            />
          </div>
          <div className='flex flex-col justify-center'>
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
              />
            ))}
          </div>
        </div>
        <div className='w-full flex flex-row justify-evenly items-center bg-[#353C53] rounded px-1 py-2'>
          <img
            src={credits}
            alt='credits'
            className='w-[40px] h-[40px] object-contain mr-1'
          />
          <div className='flex flex-col '>
            <div className='text-white text-[13px]'>Available credits</div>
            <div className='text-white font-semibold'>222.10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
