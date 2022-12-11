interface Props {
    name: string,
    nationality: string,
    virginityLevel: number
}

const Player = (props: Props) => (
    <div>
        <p>{props.name}</p>
        <small>{props.nationality}</small>
        <p>Su nivel de virginidad es de: {props.virginityLevel}</p>
    </div>
)

export default Player;