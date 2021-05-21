import CritterListItem from "./CritterListItem/CritterListItem"

const CritterList = ({fishArr}) => (
    <ul>
        {Object.keys(fishArr).map(fish => (
            <CritterListItem 
                key={`fish: ${fishArr[fish].id}`} 
                fish={fishArr[fish]}
            />
        ))}
    </ul>
)



export default CritterList