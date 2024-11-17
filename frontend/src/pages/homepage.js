import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import "./cheryl.css"
import "animate.css"

// Icons at https://icon-sets.iconify.design/solar/
export function SolarUploadMinimalisticBold(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="black" d="M12.554 2.494a.75.75 0 0 0-1.107 0l-4 4.375A.75.75 0 0 0 8.553 7.88l2.696-2.95V16a.75.75 0 0 0 1.5 0V4.932l2.697 2.95a.75.75 0 1 0 1.107-1.013z"></path><path fill="black" d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191"></path></svg>);
}

const Homepage = () => {
    return(
        <div className="homepageBody animate__animated animate__fadeIn">
            <Navbar/>
            <div className="containter left animate__animated animate__fadeInDown">
                <div>
                    <img src="/images/toyota.png" className="title" alt="Toyota Corolla"></img>
                </div>
                <div>
                    <p className="subTitle">EcoVision</p>
                </div>
                <div>
                    <p className="text">Clear Insights, Efficient Futures.</p>
                </div>
                <div className="margin-top20">
                    <Link to="/analyze">
                    <button className="analyze">
                        Analyze
                    </button>
                    </Link>
                    <Link to="/upload">
                    <button className="upload">
                            <SolarUploadMinimalisticBold/>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage