import React, { Component, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import ProjectProfile from './components/ProjectProfile'


class App extends Component {  
 
  render() {
    if(window.location.pathname.indexOf('/projects/') !== -1){
      return <ProjectProfile />
    }else{
      const AppProfile = lazy(() => import("./components/AppProfile"));
      return (
        <Suspense fallback={<ProjectProfile />}>
          <AppProfile />
        </Suspense>
      );
    }
    
    
  }
}

export default App

