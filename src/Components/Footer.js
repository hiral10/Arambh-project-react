import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from "@mui/material"
import './Footer.css'
const Footer=()=>{
    return(
        <Box className="footer">
            <div className="footer-content">
        <h5 className="footer-item">
          <a className="nav-link text-primary" href="#">About Us <InfoIcon/>
          </a>
        </h5>
        <h5 className="footer-item">
          <a className="nav-link text-primary" href="#">Career</a>
        </h5>
        <h5 className="footer-item">
          <a className="nav-link text-primary" href="#">Branches</a>
        </h5>
        <h5 className="footer-item">
          <a className="nav-link text-primary" href="#">Contact Us <CallIcon/></a>
        </h5>
      </div>
      <p> &copy; Hiral</p>
        </Box>
    )
}
export default Footer