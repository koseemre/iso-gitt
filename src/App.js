import React, { Component } from "react";
import './App.css';
import * as git from "isomorphic-git"
//import FS from '@isomorphic-git/lightning-fs';

class App extends Component {

  async componentDidMount() {

    //window.dir = '/tutorial'
    //const dir = window.dir
    const dir = '/tutorial'
    console.log(dir);
   // await window.pfs.mkdir(dir);
    // Behold - it is empty!
    await window.pfs.readdir(dir);

    /*const dir = 'C:/Users/temre/OneDrive/Masaüstü/x';
    console.log(dir);
    await fs.mkdir(dir);*/
    // await fs.rmdir(dir);


    // await fs.readdir(dir);
    git.plugins.set('fs', window.fs)
    await git.clone({
       dir,
       corsProxy: 'https://cors.isomorphic-git.org',
       url: 'https://github.com/isomorphic-git/isomorphic-git',
       ref: 'master',
       singleBranch: true,
       depth: 10
     });

     await window.pfs.readdir(dir);
     const logs = await git.log({dir})
     console.log(logs);
     
  }

  render() {
    return (

      <div className="App">
        <p>
          iso git example
        </p>
      </div>
    );
  }
}
export default App;
