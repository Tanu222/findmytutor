import logo from '../assets/images/logo.png';
import '../assets/styles/logo.css'

const Logo =()=>{
    return(
        <div className='logo'>
        <img src={logo} alt='jobify' className='logo'/>
        <span className='p-2'>SkillUp</span>
        </div>
    )
}

export default Logo;