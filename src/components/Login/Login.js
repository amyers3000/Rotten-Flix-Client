import "./Login.css"
const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                </div>
                <div className="mid">
                    <div className="wrapper">
                        <form action="">
                            <h1>Sign In</h1>
                            <input
                                type="text"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                            />
                            <button className="signIn">Sign In</button>
                            <button className="signUp">Sign up now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login