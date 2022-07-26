import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useState, useEffect, useCallback, useRef, createRef} from "react";
import moon from '/components/main/img/moon.png';
import land from '/components/main/img/land.png'
import Image from 'next/image'
import styles from './Home.module.css'
import styled from '@emotion/styled'
import {useMediaQuery} from "react-responsive";
import {config} from "@react-spring/core";
import {useSpring, animated, to} from 'react-spring'
import ExplodeMe from "../explode_me/ExplodeMe";
import {start} from "repl";
import ListAboutMe from "../list_about_me/ListAboutMe";

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
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})

    const [scrollRatio, setScrollRatio] = useState<number>(0);

    //0, 48, 73
    //214, 40, 40
    const startColor: rgbaColor = {red: 191, green: 26, blue: 47, alpha: 1}
    const endColor: rgbaColor = {red: 250, green: 188, blue: 60, alpha: 1}
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

    const BoundingHeadlineBox = styled.div(() => ({
        overflow: 'hidden',
        height: '40vh',
    }))


    function handleScroll() {
        let scrollProgress = scrollRef.current?.current
        if (scrollProgress == undefined) return
        const totalHeightOfScrollElement = (NUMBER_OF_PAGES - 1) * window.innerHeight //THis could be moved top a constant calculated once for better performance. However requires to only be set once so that window is in scope and set. And therefore should be recalculated eveytime window is resized. So for now just calculatign eveytime.
        let scrollRatio = scrollProgress / (totalHeightOfScrollElement);
        //The scrollratio value will go from 0 to 1 as the page is scrolled
        setScrollRatio(scrollRatio) // set the state global
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
        const container = document.querySelector('.scroll-container-class-name')
        window.addEventListener('resize', handleWindowSizeChange);
        if (container != null) container.addEventListener('scroll', handleScroll)

        return () => {
            if (container != null) container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    });

    const [flip, set] = useState(false)

    const props = useSpring({
        from: {opacity: 0, height: 0},
        to: {opacity: 1, height: 1},
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })


    const {o, xyz, color} = useSpring({
        delay: 0,
        /*config: config.slow, */
        config: {mass: 20, tension: 60, friction: 20},
        from: {o: 0, xyz: [0, 200, 10000], color: 'red'},
        to: {o: 1, xyz: [0, 0, 0], color: 'green'},
    })

    const SmallText = styled.h3(()=> ({
        color: "#ffffff"
    }))

    return (
        <div className={styles.background}>
            <Parallax pages={NUMBER_OF_PAGES} ref={scrollRef} className='scroll-container-class-name'>
                <ParallaxLayer
                    className={styles.gradient}
                    speed={1}
                    factor={19}
                />
                <ParallaxLayer
                    sticky={isPortrait ? {start: 0.4, end: 3.5} : {start: 0.25, end: 3.5}}
                    factor={19}
                    offset={0}
                >
                    <BoundingHeadlineBox>
                        <animated.div style={{
                            transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
                        }}>
                            <Headline {...headlineColor}>DANIEL GRAUNGAARD</Headline>
                        </animated.div>
                    </BoundingHeadlineBox>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={4}
                    sticky={{start: 2, end: 4}}
                >
                    {/*       <Image
                        objectFit="cover"
                        src={land}
                        alt="Picture of the author"
                    />*/}
                    <ExplodeMe scrollRatio={scrollRatio}/>

                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1}
                >
                    <BoundingHeadlineBox>
                            <SmallText {...headlineColor}>That&apos;s me</SmallText>
                    </BoundingHeadlineBox>
                </ParallaxLayer>



                {/*
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
                */}

                <ParallaxLayer
                    offset={4.7}
                    factor={5}
                    speed={1}
                >

                    <ListAboutMe />

                </ParallaxLayer>

            </Parallax>
        </div>
    )
}

