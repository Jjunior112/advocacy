import { GoLaw } from 'react-icons/go'
import { TbReportMoney } from 'react-icons/tb'
import { BiBookOpen } from 'react-icons/bi'
import { MdChildFriendly } from 'react-icons/md'
import { LuLandmark } from 'react-icons/lu'
import { FaHandcuffs } from 'react-icons/fa6'

const Services = () => {
  return (
    <div className="services" id="services">
      <h1>Nossos Serviços</h1>
      <div className="serviceIcons">
        <button><a href="#"><GoLaw /></a></button>
        <button><a href="#"><TbReportMoney /></a></button>
        <button><a href="#"><BiBookOpen /></a></button>
        <button><a href="#"><MdChildFriendly /></a></button>
        <button><a href="#"><LuLandmark /></a></button>
        <button><a href="#"><FaHandcuffs /></a></button>
      </div>

    </div>
  )
}

export default Services