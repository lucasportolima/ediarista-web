import Advantages from "@partials/index/_advantages"
import Faq from "@partials/index/_faq"
import Presentation from "@partials/index/_presentation"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: 'Meu Título'
        }
    }
}

export default function Index() {
    return (
        <div>
            <Presentation></Presentation>
            <Advantages></Advantages>
            <Faq></Faq>
        </div>
    )
}