import "./Register.css"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to={"/login"}>
                        <button>Sign In</button>
                    </Link>
                </div>
                <div className="mid">
                    <h1 className=""> Unlimited movies, TV shows, and more.</h1>
                    <h2 className="">Watch anywhere. Cancel anytime.</h2>
                    <p className="">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="input">
                        <input type="email" placeholder="Email address" />
                        <button onClick={""}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;