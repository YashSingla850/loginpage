import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <header className="App_header">
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
