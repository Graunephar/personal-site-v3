import {render} from "react-dom";
import me from "./me.svg";
import Image from 'next/image'
import Me from './Me'
import styled from "@emotion/styled";

/**
 * Process inspired by
 * https://betterprogramming.pub/how-to-explode-an-svg-image-in-simple-javascript-and-css-3d2c7f0968b2
 * https://codepen.io/cmer41k/pen/XLEPwg/
 */


export default function ExplodeMe() {

    const MeContainer = styled.div(()=>({

    })) //set width using this conbtainer

    return (
        <MeContainer>
            <Me/>
        </MeContainer>
    )
}