import Head from 'next/head'
import CritterList from '../components/CritterList/CritterList'
import axios from "axios"

export const getStaticProps = async () => {
    const {data: fishArr} = await axios.get("https://acnhapi.com/v1/fish")

    return {
        props: { fishArr }
    }
} 

const Home = ({fishArr}) => {
    return (
        <div>
            <CritterList fishArr={fishArr} />
        </div>
    )
}

export default Home