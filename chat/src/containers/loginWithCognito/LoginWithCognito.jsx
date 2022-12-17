// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from 'react';
import Select from 'react-select'
import {
  FormField,
  Input,
  Button,
  Heading,
} from 'amazon-chime-sdk-component-library-react';

import './LoginWithCognito.css';

const LoginWithCognito = (props) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameL, setUsernameL] = useState('');
  const [passwordL, setPasswordL] = useState('');
  const [info, setInfo] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [interest, setInterest] = useState('');
  const [age, setAge] = useState('');
  const { login, register } = props;
  const options = [
    {
      label: "Music",
      value: "music",
    },
    {
      label: "Business & Professional",
      value: "Business & Professional",
    },
    {
      label: "Food & Drink",
      value: "Food & Drink",
    },
    {
      label: "Community & Culture",
      value: "Community & Culture",
    },
    {
      label: "Performing & Visual Arts",
      value: "Performing & Visual Arts",
    },
    {
      label: "Film, Media & Entertainment",
      value: "Film, Media & Entertainment",
    },
    {
      label: "Sports & Fitness",
      value: "Sports & Fitness",
    },
    {
      label: "Health & Wellness",
      value: "Health & Wellness",
    },
    {
      label: "Science & Technology",
      value: "Science & Technology",
    },
    {
      label: "Travel & Outdoor",
      value: "Travel & Outdoor",
    },
    {
      label: "Charity & Causes",
      value: "Charity & Causes",
    },
    {
      label: "Religion & Spirituality",
      value: "Religion & Spirituality",
    },
    {
      label: "Family & Education",
      value: "Family & Education",
    },
    {
      label: "Seasonal & Holiday",
      value: "Seasonal & Holiday",
    },
    {
      label: "Government & Politics",
      value: "Government & Politics",
    },
    {
      label: "Fashion & Beauty",
      value: "Fashion & Beauty",
    },
    {
      label: "Home & Lifestyle",
      value: "Home & Lifestyle",
    },
    {
      label: "Auto, Boat & Air",
      value: "Auto, Boat & Air",
    },
    {
      label: "Hobbies & Special Interest",
      value: "Hobbies & Special Interest",
    },
    {
      label: "School Activities",
      value: "School Activities",
    },
    {
      label: "Other",
      value: "Other",
    },
    

  ];

  const onRegister = (e) => {
    e.preventDefault();
    register(userName, password, email, info, age, pincode, interest);
  };

  const onLogin = (e) => {
    e.preventDefault();
    login(userNameL, passwordL);
  };

  const onUserNameL = (e) => {
    setUsernameL(e.target.value);
  };

  const onPasswordL = (e) => {
    setPasswordL(e.target.value);
  };

  const onUserName = (e) => {
    setUsername(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onInfo = (e) => {
    setInfo(e.target.value);
  };

  const onAge = (e) => {
    setAge(e.target.value);
  };

  const onPincode = (e) => {
    setPincode(e.target.value);
  };

  const onInterest = (newValue) => {
    const newValuesArr = newValue ? newValue.map(item => item.value) : [];
    console.log(newValue);
    console.log(newValuesArr);
    setInterest({ value: newValuesArr });
    
    
  };

  return (
    <div>
      <Heading
        css="font-size: 0.875rem !important; line-height: 3rem !important;"
        level="2"
      >
        Login or Signup
      </Heading>
      <form onSubmit={onLogin} className="signin-form">
        <div className="input-container">
          <FormField
            field={Input}
            label="User name"
            className="input username-input"
            onChange={(e) => onUserNameL(e)}
            value={userNameL}
            type="text"
            showClear
            layout="horizontal"
          />
          <FormField
            field={Input}
            label="Password"
            fieldProps={{ type: 'password' }}
            className="input password-input"
            onChange={(e) => onPasswordL(e)}
            value={passwordL}
            showClear
            layout="horizontal"
            infoText="Minimum 8 characters, at least 1 uppercase, 1 number, 1 special character"
          />
        </div>
        <div className="signin-buttons">
          <Button onClick={onLogin} label="Sign in" variant="primary" />
        </div>
      </form>
      <form onSubmit={onRegister} className="signin-form">
        <div className="input-container">
          <FormField
            field={Input}
            label="User name"
            className="input username-input"
            onChange={(e) => onUserName(e)}
            value={userName}
            type="text"
            showClear
            layout="horizontal"
          />
          <FormField
            field={Input}
            label="Password"
            fieldProps={{ type: 'password' }}
            className="input password-input"
            onChange={(e) => onPassword(e)}
            value={password}
            showClear
            layout="horizontal"
            infoText="Minimum 8 characters, at least 1 uppercase, 1 number, 1 special character"
          />
          <FormField
            field={Input}
            label="Email"
            fieldProps={{ type: 'email' }}
            className="input password-input"
            onChange={(e) => onEmail(e)}
            value={email}
            showClear
            layout="horizontal"
            infoText="Should be in the form of name@domain.com"
          />
          <FormField
            field={Input}
            label="Info"
            className="input password-input"
            fieldProps={{ type: 'textarea' }}
            onChange={(e) => onInfo(e)}
            value={info}
            showClear
            layout="horizontal"
            infoText="Any thing you would like us to know"
          />
          <FormField
            field={Input}
            label="Age"
            fieldProps={{ type: 'number' }}
            className="input password-input"
            onChange={(e) => onAge(e)}
            value={age}
            showClear
            layout="horizontal"
          />
          <FormField
            field={Input}
            label="Pincode"
            fieldProps={{ type: 'number' }}
            className="input password-input"
            onChange={(e) => onPincode(e)}
            value={pincode}
            showClear
            layout="horizontal"
          />
          <label>
            Your interests
            <Select
              defaultValue={[]}
              isMulti
              name="options"
              options={options}
              className="basic-multi-select"
              onChange={(e) => onInterest(e)}
              classNamePrefix="select"
            />
          </label>
        </div>
        <div className="signin-buttons">
          <Button onClick={onRegister} label="Register" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default LoginWithCognito;
