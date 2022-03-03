import {useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'



import '../style/auth.scss'

// webpack (snowpack, vite)

export function Home() {
  const history = useHistory();
  const { user, singnInWithGoogle} = useAuth()
  

  async function HandleCreateRoom() {
    if(!user) {
     await singnInWithGoogle()
    }

    history.push('/rooms/new');

  }

  return(
    <div id='page-auth'>
      <aside>
        <img src= {illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie a sla de Q&amp;a ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask" />
          <button onClick={HandleCreateRoom} className='create-room'> 
          <img src={googleIconImg} alt="Logo do google" />
            Crie a sua sala com o google
          </button>
          <div className='separator'>Ou entre em uma sala</div>
          <form>
            <input 
             type="text"
             placeholder='Digite o código da sala'
            />
            <Button type='submit' >
              Entrar na sala
            </Button>

          </form>
        </div>
      </main>
    </div>
  )
}