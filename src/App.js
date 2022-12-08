import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {
  return (
    <div className="App">
      <PageCenter/>
    
    </div>
  );
}

function PageCenter(){

  return(
    <div>
      <div className='page-body'>
      <h1 className="img-header"><img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="" /></h1>
      <p className='first-text'>Sign up on Start Bootstrap</p>
        <p className='content'>Join our community of designers and developers and manage your purchases, favorite themes </p>
        <p className='content-two'>and snippets, comments, and more!</p>
        
          <SocialMedia/>
          <LoginDetails/>
      </div>
      <p className='copy'>Copyright © Start Bootstrap LLC 2021</p>
    </div>
  );
}

function SocialMedia(){
  return(
    <div className='middle'>
    <div className='socialmedia-buttons'>
      <button className='twitter'>
      <a className='twitter-a' href="https://api.twitter.com/oauth/authenticate?oauth_token=KJjLKwAAAAABFmccAAABhOJ5tHw" 
      target="_blank"><TwitterIcon className='icon'/>Log in with Twitter</a>
      </button>
      <button className='facebook'>
      <a className='facebook-a' href="https://www.facebook.com/login.php?skip_api_login=1&api_key=623661701833147&kid_directed_site=0&app_id=623661701833147&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fscope%3Demail%26response_type%3Dcode%26state%3D4eb055b7-d99d-4020-b376-08ed7d9efe1f%26redirect_uri%3Dhttps%253A%252F%252Fstartbootstrap.com%252Fauth%252Fsocial%253Fsocial%253Dfacebook%26client_id%3D623661701833147%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D92517293-9f83-4b71-867d-fc8966f4d90a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstartbootstrap.com%2Fauth%2Fsocial%3Fsocial%3Dfacebook%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D4eb055b7-d99d-4020-b376-08ed7d9efe1f%23_%3D_&display=page&locale=en_GB&pl_dbl=0" 
      target="_blank"><FacebookIcon/>Log in with Facebook</a>
      </button>
      <button className='google'>
      <a className='google-a' href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=openid%20email%20profile&include_granted_scopes=true&response_type=code&state=4214a01b-36e5-457e-8458-aa644ae252e0&redirect_uri=https%3A%2F%2Fstartbootstrap.com%2Fauth%2Fsocial%3Fsocial%3Dgoogle&client_id=1001669242328-b42ehvm949ska9qcs1gqsh8usrruepa8.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow"
      target="_blank"><GoogleIcon/>Log in with Google</a>
      </button>
        <button className='github'>
      <a className='github-a' href="https://github.com/login/oauth/authorize?scope=user:email&client_id=6779e7c3256739109804&state=a716c395-3321-4da5-b904-f8ad7eeb7a7a" 
      target="_blank"><GitHubIcon/>Log in with GitHub</a>
      </button>
    </div>
    </div>
    
  );
}

function LoginDetails(){
  return(
    <div>
      <div className='form'>
        <div className='form-details'>
          <label className="label" for="email">Email address</label><br></br>
          <input className="input" id="email" name=""/>
        </div>
        <div className='form-details1'>
          <label className="label1" for="email">Password</label><br></br>
          <input className="input1" id="email" />
        </div>
      
         <a className="forgot-password" href="https://startbootstrap.com/auth/password-reset-request" target="_blank">Forgot your password?</a>
        <div className='last-step'>
          <div className='remember'>
          <input type="checkbox" id="Remember" name=""/>
          <label for="Remember">Remember password</label>
          </div>
          <div>
          <p className='login-button'>Login</p>
          </div>
        </div>
        <p className='privacy-policy'>This site is protected by reCAPTCHA and the Google <a className="privacy" href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a className='terms' href="https://policies.google.com/terms" terget="_blank">Terms of Service</a> apply.</p>
      </div>
      <p className='create-account'>New user? <a className='create' href="https://startbootstrap.com/auth/register">Create an account!</a></p>
    </div>
   
  );
}

export default App;
