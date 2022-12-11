import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface Player {
    name: string,
    virgintyLevel: number,
    nationality: string
}

const PlayersContext = createContext<{
    players: Player[], setPlayer?: Dispatch<SetStateAction<Player[]>>
}>({
    players: []
})

const PlayerProvider = ({ children }: { children: ReactNode}) => {
    const defaultPlayers: Player[] = [
        {name: 'Tita', nationality: 'Argentina', virgintyLevel: 7},
        {name: 'Agustina', nationality: 'Tailandesa', virgintyLevel: 10}
    ]
    
    const [players, setPlayer] = useState<Player[]>(defaultPlayers)

    return (
        <PlayersContext.Provider value={{ players, setPlayer }}>
            { children }
        </PlayersContext.Provider>
    )
}

export const usePlayers = () => useContext(PlayersContext)

export default PlayerProvider;