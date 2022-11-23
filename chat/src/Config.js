// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import data from './backend/serverless/appconfig.json'
const appConfigJson = Object.assign({}, ...data.map((x) => ({[x.OutputKey]: x.OutputValue})));

const appConfig = {
    apiGatewayInvokeUrl: '' || appConfigJson.apiGatewayInvokeUrl,
    cognitoUserPoolId: 'us-east-1_BeCQidvtv' || appConfigJson.cognitoUserPoolId,
    cognitoAppClientId: '3gv9ldh5fpkb03jdron6si3jra' || appConfigJson.cognitoAppClientId,
    cognitoIdentityPoolId: 'us-east-1:a888cf41-7437-4050-bbbd-a9a2d3e8c0ed' || appConfigJson.cognitoIdentityPoolId,
    appInstanceArn: 'arn:aws:chime:us-east-1:103326859418:app-instance/5cf7a65e-4614-424c-aee0-663221b7110f' || appConfigJson.appInstanceArn,
    region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
    attachments_s3_bucket_name: 'buddy-chat-chatattachmentsbucket-12afox4m597no' || appConfigJson.attachmentsS3BucketName
};
export default appConfig;
