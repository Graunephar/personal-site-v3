import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import moon from '/components/main/img/moon.png';
import land from '/components/main/img/land.png'
import Image from 'next/image'
import styles from './Home.module.css'

import * as url from "url";
import {func} from "prop-types";


export default function ParallaxPageElement() {



    function handleScroll(event: React.UIEvent<HTMLDivElement>) {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        let percentage = ((scrollTop + containerHeight) / scrollHeight) * 100
    }

    return (
        <div className={styles.background} onScroll={handleScroll}
        >
            <Parallax pages={4}>

                {/*             <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}

                >
                    <Image
                        objectFit="cover"
                        src={moon}
                        alt="Picture of the author"
                    />

                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={4}
                >
                    <Image
                        objectFit="cover"
                        src={land}
                        alt="Picture of the author"
                    />

                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{start: 0.9, end: 2.5}}
                    style={{textAlign: 'center'}}
                >

                </ParallaxLayer>*/}

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                    style={{
                        position: 'sticky',
                        color: 'black',
                    }}
                >
                    <h2>DANIEL GRAUNGAARD</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={2}
                    style={{
                        color: 'white',
                    }}

                >
                    <h2>Hi</h2>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}