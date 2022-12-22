import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import './style/landingPage.css'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div>
        <NavigationBar/>
      </div>
      <div>
        <Intro/>
        <MainContent />
      </div>
      <div>
         <Footer />
      </div>
    </div>
  )
}

export default App;
