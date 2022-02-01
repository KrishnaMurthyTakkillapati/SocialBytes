import * as C from './App.styles';

const App = () => {
  return (
    <C.Container>
      <C.Area>
        <C.Menu>
          <div className="logo">
            <img
              src="/assets/logo/logo01.png"
              alt="logo"
            />
          </div>
          <div className="menuItem">
            <ul>
              <li><span className='active'>Home</span></li>
              <li><span>Events</span></li>
              <li><span>Interests</span></li>
              <li><span>Connect with people</span></li>
            </ul>
          </div>
          <div className="menuOptions">
            <div className="menuOptionsItem">
              <img
                src="/assets/icons/search.png"
                alt="search"
              />
            </div>
            
            <div className="menuOptionsItem">
              
                <img
                  className="avatar"
                  src="/assets/icons/profile.png"
                  alt="Hey, Hope you're doing well.!"
                />
              
            </div>
          </div>
        </C.Menu>

        <C.Body>
          <C.Title>SOCIAL BYTES</C.Title>
          <C.Desc>Connect with happening events and activities around you.</C.Desc>
          <C.Button>
            <button onClick={()=>window.open("https://github.com/krish0307/SocialBytes", "_blank")}>
              Git Link
            
              <img 
                src="/assets/icons/arrow.png"
                alt="arrow"
              />
              
            </button>
          </C.Button>
        </C.Body>
      </C.Area>
    </C.Container>
  );
}

export default App;