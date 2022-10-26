import './register.scss';

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>PR Social Media!!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form action=''>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email' />
            <input type='paswword' placeholder='Password' />
            <input type='text' placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
