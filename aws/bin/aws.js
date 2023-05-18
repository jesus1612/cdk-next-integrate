#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { Stack } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class AwsStack extends Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    // Configura la cuenta de AWS
    const account = '093047447013';
    const region = 'us-east-1';

    new s3.Bucket(this, 'bucket-next', {
      versioned: false, 
      bucketName: `my-bucket-${account}-${region}`
    });
  }
}


const app = new cdk.App();

new AwsStack(app, 'AwsStack');
