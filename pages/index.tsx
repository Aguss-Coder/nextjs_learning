import Player from 'components/player'
import { usePlayers } from 'context/players_context'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { players } = usePlayers()

  return (
    <div className={styles.container}>
      <h1>JUGADORES DE DOTA CON PROBLEMAS</h1>
      {players.map((player) => (
        <Player
        key={player.name}
        name={player.name}
        nationality= {player.nationality}
        virginityLevel={player.virgintyLevel}
        />
      ))}
    </div>
  )
}
