// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import data from './backend/serverless/appconfig.json'
const appConfigJson = Object.assign({}, ...data.map((x) => ({[x.OutputKey]: x.OutputValue})));

const appConfig = {
    apiGatewayInvokeUrl: '' || appConfigJson.apiGatewayInvokeUrl,
    cognitoUserPoolId: 'us-east-1_SHBIcJ9FH' || appConfigJson.cognitoUserPoolId,
    cognitoAppClientId: '6iojvgco33v5hb2nijh28r0cjp' || appConfigJson.cognitoAppClientId,
    cognitoIdentityPoolId: 'us-east-1:5f6d5260-db6d-4e8a-909b-cbc825dbbdaa' || appConfigJson.cognitoIdentityPoolId,
    appInstanceArn: 'arn:aws:chime:us-east-1:103326859418:app-instance/837480df-6fc5-431e-9583-1a1bc1067375' || appConfigJson.appInstanceArn,
    region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
    attachments_s3_bucket_name: 'buddy-chat-chatattachmentsbucket-7t8qsaq7ucz4' || appConfigJson.attachmentsS3BucketName
};
export default appConfig;
