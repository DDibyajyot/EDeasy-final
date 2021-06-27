import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
// import Link from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Head>
                <Title>
                    To learn not even the sky is the limit.
                </Title>
                {'\n'}
                <Description>
                    We are here to help you get free access to the best educational resources possible! 
                </Description>
                <Button>
                    <Link to="/choice">
                        Let's start!
                    </Link>
                </Button>
                <MainContent>
                    <Image src="/images/Education.png" />
                    <Content>
                        <Written>
                            <NavBar>
                                <span>Overview</span>
                            </NavBar>
                            {/* <Imp>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            </Imp> */}
                            <Des>
                            Humans are known to be social beings. 
                            <br></br>
                            Starting from 2019, the world has had to take several steps to reduce contact, spread and increase of the Covid-19 virus which has led to social exclusion, reduced contact with peers and family alike. This has sometimes led to unfortunate mental breakdowns and increasing anxiety across all age groups as the human brain is not mentally wired to stay secluded and away from other humans. <br></br>
                            With our Web Based App “Mentify”, one can both choose to seek support or provide support by picking the state of your mental health and preferences, after which you could get added to a private room with another person with similar preferences and have a healthy discussion on particularly anything that makes you feel better. This app will also help counselors, who have been greatly displaced by the pandemic, to earn experience in their field as well as possible monetary benefits in the form of tips/subscriptions that will be developed as an extension, in the future.
                            </Des>
                        </Written>
                        <Form>
                            <img src = "/images/Chat-img.svg" />
                        </Form>
                    </Content>
                </MainContent>
                <Featured>
                    <SectionTitle>
                        FOUNDERS
                    </SectionTitle>
                    <View />
                    <Viewers>
                        <Wrap>
                            <Location>
                                <Place>
                                    LAGOS, NIGERIA
                                </Place>
                            </Location>
                            <Name>
                                Deepam Dibyajyot
                            </Name>
                            <Job>
                                Whether it's maintaining your cash-flow or covering your debt,  he always has good advice to stay financially secure.
                            </Job>
                            <Stars>
                                <img src="/images/Stars.svg" />
                            </Stars>
                            <img src="/images/DEEPAM.svg" />
                        </Wrap>
                        <Wrap>
                            <Location>
                                <Place>
                                    LUCKNOW, IND
                                </Place>
                            </Location>
                            <Name>
                                Prabhav Khera
                            </Name>
                            <Job>
                                After a rough history himself, Prabhav devotes his time to making sure people get over their problems as well as addictions.
                            </Job>
                            <Stars>
                                <img src="/images/Stars.svg" />
                            </Stars>
                            <img src="/images/Group 3646.svg" />
                        </Wrap>
                        <Wrap>
                             <Location>
                                <Place>
                                    MUMBAI, IND
                                </Place>
                            </Location>
                            <Name>
                                Krish Rai
                            </Name>
                            <Job>
                                Whether it's maintaining your cash-flow or covering your debt, he always has good advice to stay financially secure.
                            </Job>
                            <Stars>
                                <img src="/images/Stars.svg" />
                            </Stars>
                            <img src="/images/KRISH.svg" />
                        </Wrap>
                        <Wrap>
                            <Location>
                                <Place>
                                    LAGOS, NIGERIA
                                </Place>
                            </Location>
                            <Name>
                                Tanmay Pilla
                            </Name>
                            <Job>
                                Whether it's maintaining your cash-flow or covering your debt, he always has good advice to stay financially secure.
                            </Job>
                            <Stars>
                                <img src="/images/Stars.svg" />
                            </Stars>
                            <img src="/images/DEEPAM.svg" />
                        </Wrap>
                    </Viewers>
                </Featured>
                <Footer>
                    <span>&copy;EDeasy</span>
                    <SocialMedia>
                        <Instagram>
                            <InstagramIcon />
                        </Instagram>
                        <Twitter>
                            <TwitterIcon />
                        </Twitter>
                        <Facebook>
                            <FacebookIcon />
                        </Facebook>
                    </SocialMedia>
                </Footer>
            </Head>
        </Container>
    )
}

export default Home

const Container = styled.main `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:before {
        background: linear-gradient(#32A1E6, #4100BA, #6F0094, #400052, #2A0031);
        height: 310vh;
        no-repeat fixed;
        content: "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;
    }
`

const Head = styled.div `
    display: flex;
    flex-direction: column;
    margin: 87px 0px 0px 0px;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: white;
`

const Title = styled.div `
    font-size: 2rem;
`

const Description = styled.div  `
    width: 366px;
    text-align: center;
    margin-top: 20px;
    padding-left: 20px;
`
const Button = styled.div `
    margin-top: 10px;
    padding: 3px 5px 3px 5px;
    background-color: rgb(5, 13, 15);
    border-radius: 4px;
`

const MainContent = styled.div `
    color: #000000;
    background: #ffffff;
    width: 99vw;
    height: 950px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 150px;

`

const Image = styled.img `
    margin-top: -50px;
    width: 55vw;
    height: 400px;
    border-radius: 20px;
    margin-bottom: 50px;
`

const Content = styled.div `
    z-index:1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const NavBar = styled.div `
    text-transform: uppercase;
    padding-bottom: 30px;
    span{
        font-size: 2rem;
        color: #E50D6C;
        position: relative;
        padding-bottom: 3px;
        border-bottom: 7px solid transparent;
        //-moz-border-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
        //-webkit-border-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
        border-image: linear-gradient(to right, #7CCE00 0%, #BFB90E 40% , #E5B30D 100%);
        border-image-slice: 1;   
    }
`

const Written = styled.div `
    width: 40%;
`
const Des = styled.p `
    font-size: 0.9rem;

`

const Form = styled.div `
    margin-top: 50px;
`

const Featured = styled.div `
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SectionTitle = styled.div `
    float: left;
    font-size: 2em;
    width: 100%;
`
const View = styled.div `
    width: 10%;
    height: 1%;
    background-color: linear-gradiant(#E5B30D, #BFB90E, #7CCE00);
`

const Viewers = styled.div `
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 40px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding-bottom: 40px;
`
const Location = styled.div `
    display: flex;
    flex-direction: row;
    width: 104px;
    align-items: center;
`

const Place = styled.div `
    color: #E50D6C;
    float: left;
    margin-left: -60px;
`

const Stars = styled.div `
    margin-left: 20px;
    margin-top: -10px;
    margin-bottom: 10px;
`

const Wrap = styled.div `
    background-color: #ffffff;
    color: rgba(0, 0, 0, 0.7);
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    box-shadow: rgb(227 227 227 / 30%) 0px 26px 30px -10px,
    rgb(227 227 227/ 40%)  0px 16px 10px -10px;

    &:hover {
        box-shadow: rgb(227 227 227 / 60%) 0px 40px 50px -10px,
        rgb(227 227 227 / 50%)  0px 30px 22px -10px;
        tansform: scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);
    }

    img{
        width: 80%;
        height: auto;
    }
`
const Name = styled.h2 `
    font-size: 1.5rem;
`
const Job = styled.p `
    margin-top: -10px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    width: 80%;
    font-size: 0.75rem;
`

const Footer = styled.div `
    color: #000000;
    background-color: #ffffff;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    height: 60px;

    span{
        padding: 20px;
    }

    img{
        padding: 20px;
    }
`

const SocialMedia = styled.div `
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
        cursor: pointer;
        padding: 10px;
    }
`
const Instagram = styled.a `
    svg:hover{
        // fill: linear-gradient( #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
        fill: #CE31A7;
    }
`
const Twitter = styled.a `
    svg:hover{
        fill: #32AAE8;
    }
`
const Facebook = styled.a `
    svg:hover{
        fill: #1A3C77;
    }
`