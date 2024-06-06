import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
        <div className="container-fluid" style={{width: "100%", backgroundColor: "#777777", padding: '1rem', display: "flex", flexDirection: "column", gap: '1rem'}}>
            <p className="text-white text-center mb-0"> 地址：10608台北市大安區忠孝東路三段 1 號(北科大)、46號(先鋒大樓) | 電話：02-27712171 #4231 </p>
            <p className="text-white text-center mb-0"> 信箱：cisc2024.ntut@gmail.com </p>
            <p className="text-white text-center mb-0"> Copyright © Taipei Tech</p>
            <div className="w-100 d-flex flex-row justify-content-center gap-3">
                <a className="p-2 bg-white rounded" href="https://ntut.edu.tw/">
                    <img src="https://cnc.ntut.edu.tw/var/file/4/1004/img/1544/Taipei-Tech-Logo.png" style={{width: "auto", height: "2em"}}></img>
                </a>
                <a className="p-2 bg-white rounded" href="https://lin.ee/OANc51l">
                    <FontAwesomeIcon icon={faLine} size="2xl" style={{color: "#23DAA2"}}></FontAwesomeIcon>
                </a>
                <a className="p-2 bg-white rounded" href="mailto://cisc2024.ntut@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#638BE6"}}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}

export default Footer;