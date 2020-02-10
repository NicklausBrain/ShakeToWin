/* Plugin that inables hot reloading, should be imported first */
import { hot } from 'react-hot-loader/root';

/* Components from the standard react library */
import React, { Component } from 'react';

import * as gyroscope from './core/gyroscope'

class App extends Component {

  /*
  The constructor for a React component is called before it is mounted.
  When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement.
  Otherwise, this.props will be undefined in the constructor, which can lead to bugs. */
  constructor() {
    super();

    const updateState = (diff) =>
      /*
        setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.
        This is the primary method you use to update the user interface in response to event handlers and server responses. */
      this.setState((state) => {
        return Object.assign(state, diff);
      });

    this.state = {
      init: async () => updateState({
        // meals: (await axios.get(Url)).data
      }),
      motionAccessGranted: false
    };

    this.grantMotionAccess = () =>
      gyroscope.grantMotionAccess()
        .then(() => updateState({ motionAccessGranted: true }));
  }

  /*
    componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    Initialization that requires DOM nodes should go here.
    If you need to load data from a remote endpoint, this is a good place to instantiate the network request. */
  componentDidMount = async () => await this.state.init(); // called before

  /*
  The render() method is the only required method in a class component.
  When called, it should examine this.props and this.state and return one of the following types:
  - React elements;
  - Arrays and fragments;
  - Portals;
  - String and numbers;
  - Booleans or null. */
  render() {
    return (
      <div id="screen" className="App">
        {!this.state.motionAccessGranted ?
          (<div id="grantMotionAccess" className={"gameButton"} style={{ top: '2rem' }} onClick={this.grantMotionAccess}>
            <div>Grant Motion Access</div>
          </div>) : null
        }
        <div className={"gameButton"} style={{ top: '28rem', width: '2rem' }}>
          <div id="player0"></div>
        </div>
        <div className={"gameButton"} style={{ top: '28rem', width: '2rem', height: '0', left: '5rem', background_color: 'blueviolet' }}>
          <div id="player1"></div>
        </div>
        {/* <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 8rem; background-color: darkblue">
          <div id="player2"></div>
        </div>
        <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 11rem; background-color: indigo">
          <div id="player3"></div>
        </div>
        <div class="gameButton" style="top: 28rem; width: 2rem; height: 0; left: 14rem; background-color: sandybrown">
          <div id="player4"></div>
        </div> */}
      </div>
    );
  }
}

export default hot(App);
