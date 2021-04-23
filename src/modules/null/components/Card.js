// eslint-disable-next-line
import { React } from "../dependencies.js"

export default ({ children }) => (
  <>
    <div id="card">
      <h1>Card</h1>
      <div id="settings">
        <small id="author">
          <strong>Author:</strong> @bolonhaDev
        </small>
        <br />
        <small id="version">
          <strong>Version:</strong> 0.0.1 beta test
        </small>
        <br />

        <small id="id">
          <strong>id:</strong> 001
        </small>
        <br />

        {/* <small id="hash">
            <strong>hash:</strong> 001
          </small> */}
      </div>
      <div id="null">
        <h2>null</h2>
        {/* <div id="proxy">
            proxy name: <input type="text" name="proxy-name" id="proxy-name" />
          </div> */}

        <div id="md file">
          is md file: <br />
          <input type="checkbox"></input>
          <input type="text"></input>
        </div>
        <div id="wiki">
          is wiki: <br />
          <input type="checkbox"></input>
        </div>
        <div id="page">
          is page: <br />
          <input type="checkbox"></input>
        </div>
        {/* <div id="enviroment">
            <strong>enviroment: </strong> <br />
            <ul>
              <li>empty</li>
              <li>dev</li>
              <li>stage</li>
              <li>prod</li>
            </ul>
            <div id="action">
              <strong>action:</strong>
              <br />
              <ul>
                <li>undefined</li>
                <li>in progress</li>
                <li>return</li>
                <li>parameter waiting</li>
                <li>done</li>
              </ul>
            </div>
          </div> */}

        <div id="cyberScript">
          cyberScript:
          <ul>
            <li id="atomicBlock">atomicBlock</li>
            <li id="brand">brand</li>
            <li id="utils">utils</li>
            <li id="md-text">MD textarea: {children}</li>
            <li id="AI">AI</li>
          </ul>
        </div>
        {/* <div id="templates">templates</div> */}
        {/* <div id="library">library</div> */}
        {/* <div id="avoid">avoid</div> */}
      </div>
    </div>
  </>
)
