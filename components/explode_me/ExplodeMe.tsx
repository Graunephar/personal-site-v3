import {render} from "react-dom";
import me from "./me.svg";
import Image from 'next/image'
import Me from './Me'
import styled from "@emotion/styled";
import React, {useEffect, useRef} from "react";
import {IParallax} from "@react-spring/parallax";




export default function ExplodeMe() {


    const MeContainer = styled.div(() => ({
        width: '100vw',
        height: '200vh',
    })) //set width using this conbtainer


    return (
        <MeContainer>
            <Me/>
        </MeContainer>
    )

}
