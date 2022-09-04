import styled from "@emotion/styled";


export default function BulletstAboutMe() {


    const Headline = styled.h4(() => ({
        fontFamily: 'League Spartan, sans-serif',
        color: 'white',
        fontSize: '24pt',
        marginBottom: '4em'

    }))
    const CenteredContent = styled.div(() => ({
        width: '50vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
        fontFamily: 'League Spartan, sans-serif',
        color: 'white',

    }))

    const Bullet = styled.li(()=> ({
        padding: '1em',
        fontFamily: 'League Spartan, sans-serif',
        color: 'white',
        fontSize: '16pt'
    }))

    return (
        <>
            <CenteredContent>

            <Headline>
                Some things about me:
            </Headline>
                <ul>
                    <Bullet>I really Bulletke writing aboutn 240 characters about myself.</Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                    <Bullet>Lorem ipsum dolor sit amet, consectetur adipiscing eBullett, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aBulletqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aBulletquip ex ea commodo consequat. Duis aute
                    </Bullet>
                </ul>
            </CenteredContent>


        </>
    )


}