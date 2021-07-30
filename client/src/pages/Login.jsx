import './Login.scss';

const Login = () => {
	return (
		<div className="login-page">
			<img
				className="login-page__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
				alt="Logo netflix"
			/>

			<div className="login-page__container">
				<div className="box">
					<p>Sign In</p>

					<form>
						<input
							type="text"
							name="email"
							required
							placeholder="Email or phone number"
						/>
						<input
							type="password"
							name="password"
							required
							placeholder="Password"
						/>
						<button type="submit">Sign In</button>

						{/*  */}
						<span>
							New to Netflix? <b>Sign up now.</b>
						</span>
						<small>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot. <b>Learn more</b>.
						</small>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
