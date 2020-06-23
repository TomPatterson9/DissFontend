import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';


class App extends Component {
  render() {
    return(
      <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href=""><strong>Home</strong></a>{/*needs to be an icon*/}
            </div>
                    <div className="navbar-end">
                    <div className="navbar-item">

                    </div>
                    </div>
                </nav>
             

           </div>
    )
  }
}

export default App;
