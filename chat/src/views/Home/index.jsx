/* eslint-disable import/no-unresolved */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useState, setState} from 'react';
import {Heading, Grid, Cell, Flex, Select} from 'amazon-chime-sdk-component-library-react';
import { useTheme } from 'styled-components';
import LoginWithCognito from '../../containers/loginWithCognito/LoginWithCognito';
import LoginWithCredentialExchangeService from '../../containers/loginWithCredentialExchangeService/LoginWithCredentialExchangeService';
import { useAuthContext } from '../../providers/AuthProvider';
import { BrowserRouter, useHistory } from 'react-router-dom';
import './style.css';
import Channels from '../Channels';
import routes from '../../constants/routes';
import {
    FormField,
    Input,
    Button,
  } from 'amazon-chime-sdk-component-library-react';
  

const Home = () => {
    const [signinProvider, updateSigninProvider] = useState('cognito');
    const { userSignIn, userSignUp, userExchangeTokenForAwsCreds } = useAuthContext();
    const currentTheme = useTheme();
    const history = useHistory();
    const { member, userSignOut } = useAuthContext();
    console.log("test", member)
    const provider =
        signinProvider === 'cognito' ?
            <LoginWithCognito register={userSignUp} login={userSignIn} /> :
            <LoginWithCredentialExchangeService exchangeCreds={userExchangeTokenForAwsCreds}/>;

    const signInMessage =
        signinProvider === 'cognito' ? 'Sign in with ' : 'Get AWS creds via ';
//     const params = 'http://buddy-maps.s3-website-us-east-1.amazonaws.com/?userId='
//                         +member.userId+
//                         '&username='+ member.username;
    const params = 'http://buddy-maps.s3-website-us-east-1.amazonaws.com/?username=' + member.username;

    function handleLogout() {
        console.log('SIGNING OUT');
    return async () => {
        userSignOut();
    };
    }

    function handleChatClick() {
        history.push(routes.CHAT);
    }

  // return (
  //     <Grid
  //         gridTemplateRows="3rem 100%"
  //         gridTemplateAreas='
  //     "heading"
  //     "main"
  //     '
  //     >
  //       <Cell gridArea="heading">
  //         <Heading
  //             level={1}
  //             style={{
  //               backgroundColor: currentTheme.colors.greys.grey60,
  //               height: '3rem',
  //             }}
  //             className="app-heading"
  //         >
  //           Chat App
  //         </Heading>
  //       </Cell>
  //       <Cell gridArea="main">
  //         <Flex className="signin-container" layout="stack">
  //           <Heading
  //             css="font-size: 1.1875rem; line-height: 2rem;"
  //             level="5"
  //           >
  //             {signInMessage}
  //             <Select
  //               name="signinProvider"
  //               id="signinProvider"
  //               value={signinProvider}
  //               options={[
  //                 { value: 'cognito', label: 'Cognito User Pools' },
  //                 { value: 'ces', label: 'Credential Exchange Service' },
  //               ]}
  //               aria-label="sign in option"
  //               onChange={e => updateSigninProvider(e.target.value)}
  //             />
  //           </Heading>
  //           {provider}
  //         </Flex>
  //       </Cell>
  //     </Grid>
  // );

    return (
        <div style={{ backgroundImage: `url("https://images.app.goo.gl/qsRihPCnEnNXtgo5A")` }}>
            <Grid
                gridTemplateRows="3rem 100%"
                gridTemplateAreas='
            "heading"
            "main"
            '
            >
            <Cell gridArea="heading">
                <Heading
                    level={1}
                    style={{
                    backgroundColor: currentTheme.colors.greys.black,
                    height: '3rem',
                    }}
                    className="app-heading"
                >
                BUDDY
                <div className="user-block">
                    {/* <a className="user-info" href="#">
                    {member.username || 'Unknown'}
                    <span onClick={handleUserNameCopyClick} className="tooltiptext">
                        Click to copy UserId to clipboard!
                    </span>
                    </a> */}

                    <a href="#" onClick={handleLogout()}>
                    Log out
                    </a>
                    <a href="#" onClick={handleChatClick}>
                    Chat
                    </a>
                    <a href={params} target = '_blank' >
                        Maps
                    </a>

                </div>
                </Heading>
            </Cell>
            <Cell gridArea="main">
                <Flex className="signin-container" layout="stack">
                    <Heading
                        css="font-size: 1.1875rem; line-height: 2rem;"
                        level="5"
                    >
                        <div className='app-heading'>
                        Buddy is an application to find your local buddy in real-time. Name your cause and we can find you your buddies right away.
                        </div>

                        <br></br>

                        <div className='main-page-content'>
                            How many times have you wondered if you had company for a Target run? How often you wanted some coffee but felt equally lazy to get one yourself? Do you get scared to walk home from your favourite library? Do you wish to directly ask people currently dining at your favourite restaurant to check if they still have your fried ice cream?  
                        </div>
                        
                        <br></br>

                        <div className='app-heading'>
                        Here is our Buddy! to help you find help from people around.

                        
                        </div>
                        

                    
                    </Heading>
                </Flex> 
                

            </Cell>
            </Grid>

        </div>
);
};

export default Home;