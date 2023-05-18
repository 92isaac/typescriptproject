import { useState } from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { useNavigate } from 'react-router-dom';

interface DropdownItems {
    icon: string;
    path:string;
    title:string;
    
}

interface Props{
    options: DropdownItems[]
}

const Dropdown: React.FC<Props> = ({options, }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate= useNavigate()


    const handleOptionClick = (option:string) => {
        setIsModalOpen(!isModalOpen);
        navigate(`/${option}`)
      };
    
      const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
      };
  return (
    <div className="text-xl relative z-50">
    <HiOutlineUserCircle onClick={handleModalToggle} />
    {isModalOpen && (
      <div className="absolute top-full left-0 z-50 -ml-52 mt-8 w-60 max-h-200 overflow-y-auto border border-gray-300 rounded bg-gray-900">
        {options?.map((option, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-700"
            onClick={() => handleOptionClick(`${option.path}`)}
          >
            <div className="flex gap-4">
              <div className="text-white uppercase">
                <span className='inline pr-5'>{option?.icon}</span>
                {option?.title.toUpperCase()}
              </div>
                <hr />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Dropdown