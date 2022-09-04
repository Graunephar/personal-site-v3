import {render} from "react-dom";
import me from "./me.svg";
import Image from 'next/image'
import Me from './Me'
import styled from "@emotion/styled";
import React, {useEffect, useRef} from "react";
import {IParallax} from "@react-spring/parallax";

interface propsType {
    scrollRatio: number
}


export default function ExplodeMe(props: propsType) {


    const MeContainer = styled.div(() => ({
        overflow: "visible"

    })) //set width using this conbtainer


    const MeMargin = styled.div(() => ({
        height: "30vh"

    })) //set width using this conbtainer

    const MeCenteredChild = styled.div(() => ({
        margin: "0 auto",
        marginTop: "50%",
        backgroundColor: "#AB0"

    }))

    return (
        <MeContainer>
            <MeMargin />
            <Me scrollRatio={props.scrollRatio}/>
        </MeContainer>
    )

}
