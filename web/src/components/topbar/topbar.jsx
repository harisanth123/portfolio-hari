import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left"> 
          <a href="#intro" className="logo">hari</a>
          <div className="itemContainer">
            <Person className="icons"/>
            <span>11 22 33 44</span>
          </div>
          <div className="itemContainer">
            <Mail className="icons"/>
            <span>harisanth123ps@gmail.com</span>
          </div>
        </div>

        <div className="right">
          
        </div>
      </div>
      
    </div>
  )
}
