import nature from './nature.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
               <a className="navbar-brand" href="#"  >Navbar</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
           <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
           <a className="nav-link" href="#home" >Home <span className="sr-only">(current)</span></a>
           </li>
            <li className="nav-item">
             <a className="nav-link" >List</a>
             </li>
            </ul>
          </div>
        </nav>
        
        <img src={nature}  className="center-image"/>
        <br/>
        <br/>
        <form>
                <h3>Register</h3>
                <br/>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control"  placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section  id='home'>
          Vous cherche le meilleur moen de contruire des application ou des sites web modernes ?
          Vous avez envie de donne un bon coup d'accélération à votre apprentissage de JavaScript?
        </section>
        <br />
        <br/>
        <footer>
        <div className="copyright text-center py-1">
     Copyright &copy; 2021 <span>Lamia</span>
  </div>
</footer>
        
    </div>
  );
}

export default App;
