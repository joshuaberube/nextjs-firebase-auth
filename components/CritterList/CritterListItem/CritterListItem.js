import Image from "next/image"

const CritterListItem = ({fish: {name, price, icon_uri}}) => {
    return (
        <li>
            <span>{name["name-USen"]}</span>
            <span>{price}</span>
            <Image 
                src={icon_uri}
                alt={name["name-USen"]}
                width="100px"
                height="100px"
            />
            
        </li>
    )
}

export default CritterListItem