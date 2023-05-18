#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { AwsStack } = require('./lib/aws-stack');

const app = new cdk.App();
new AwsStack(app, 'AwsStack');

app.synth();
