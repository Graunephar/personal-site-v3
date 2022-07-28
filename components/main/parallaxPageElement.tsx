import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useState, useEffect, useCallback, useRef, createRef} from "react";

import moon from '/components/main/img/moon.png';
import land from '/components/main/img/land.png'
import Image from 'next/image'
import styles from './Home.module.css'
import styled from '@emotion/styled'
import {useMediaQuery} from "react-responsive";

interface rgbaColor {
    red: number,
    green: number,
    blue: number,
    alpha: number
}

export default function ParallaxPageElement() {
    const scrollRef = useRef<IParallax>(null);
    const [viewWidth, setViewWidth] = useState<number>(700);
    const isMobile = viewWidth <= 400;
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    //0, 48, 73
    //214, 40, 40
    const startColor: rgbaColor = {red: 0, green: 48, blue: 73, alpha: 1}
    const endColor: rgbaColor = {red: 214, green: 40, blue: 40, alpha: 1}
    const [headlineColor, setHeadlineColor] = useState<rgbaColor>(startColor);
    const NUMBER_OF_PAGES = 10
    const Headline = styled.h2<rgbaColor>(currentColorToRenderHeadline => {
        return ({
            fontSize: '8vw',
            textAlign: 'center',
            color: 'rgba(' + currentColorToRenderHeadline.red + ',' + currentColorToRenderHeadline.green + ',' + currentColorToRenderHeadline.blue + ',' + currentColorToRenderHeadline.alpha + ')',
            position: 'fixed',
            top: '5vh',
            overflow: 'hidden',
            width: '100%',
            left: '50%',
            transform: 'translateX(-50%);',
            zIndex: 1000000000000000000,
        });
    })

    function checkForDevice(){
       return window.innerWidth
    }



    function handleScroll() {
        let scrollProgress = scrollRef.current?.current
        if (scrollProgress == undefined) return
        const totalHeightOfScrollElement = (NUMBER_OF_PAGES - 1) * window.innerHeight //THis could be moved top a constant calculated once for better performance. However requires to only be set once so that window is in scope and set. And therefore should be recalculated eveytime window is resized. So for now just calculatign eveytime.
        let scrollRatio = scrollProgress / (totalHeightOfScrollElement);

        setHeadlineColor(interpolateColors(startColor, endColor, scrollRatio))

    }


    function interpolateColors(startColor: rgbaColor, endColor: rgbaColor, ratio: number): rgbaColor {
        const r = Math.trunc(ratio * endColor.red + (1 - ratio) * startColor.red)
        const g = Math.trunc(ratio * endColor.green + (1 - ratio) * startColor.green)
        const b = Math.trunc(ratio * endColor.blue + (1 - ratio) * startColor.blue)
        const a = Math.trunc(ratio * endColor.alpha + (1 - ratio) * startColor.alpha)

        return {red: r, green: g, blue: b, alpha: a}
    }

    function handleWindowSizeChange() {
        setViewWidth(window.innerWidth);
    }

    useEffect(() => {
        const container = document.querySelector('.my-class-name')
        window.addEventListener('resize', handleWindowSizeChange);
        if (container != null) container.addEventListener('scroll', handleScroll)

        return () => {
            if (container != null) container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    });
    


    return (
        <div className={styles.background}>
            <Parallax pages={NUMBER_OF_PAGES} ref={scrollRef} className='my-class-name'>
                <ParallaxLayer
                    className={styles.gradient}
                    speed={1}
                    factor={19}
                />
                <ParallaxLayer
                    sticky={isPortrait ? {start: 0.4, end: 5} : {start: 0.25, end: 5}}
                    factor={19}
                    offset={0}
                >
                    <Headline {...headlineColor}>DANIEL GRAUNGAARD</Headline>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={-0.7}
                    factor={4}
                >
                    <Image
                        objectFit="cover"
                        src={land}
                        alt="Picture of the author"
                    />

                </ParallaxLayer>

                <ParallaxLayer
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
                    sticky={{start: 0.9, end: 2.5}}
                    style={{textAlign: 'center'}}
                >

                </ParallaxLayer>


                <ParallaxLayer
                    offset={2}
                    speed={2}
                    style={{
                        zIndex: 100000000000000000000,
                        color: 'white',
                    }}

                >
                    <h2>Hi</h2>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}

