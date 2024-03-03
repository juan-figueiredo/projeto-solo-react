import styles from './App.module.css'
import './global.css'

import { Header } from './Components/Header/Header'
import { Post } from './Components/Post/Post'
import { Footer } from './Components/Footer/Footer'
import { Slide } from './Components/Slide/Slide'

function App() {
  return (
    <div className={styles.container}>

      <Header />
      <div className={styles.wrapper}>
        
      <Post content=" Utilizando" type=" cards"/>
      <Post content=" e reaproveitando" type=" componentes"/>
      <Post content=" React"/>
      </div>
      <Slide />
      <Footer />
    </div>
)
}

export default App
