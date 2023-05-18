const path = require('path');
const cdk, { Stack, Construct } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class AwsStack extends Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);


    // const stackDirectory = path.dirname(Construct.of(this).stackName);
    const stackFilePath = path.join('/', 'bin', 'stack.js');

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: false
    });
  }
}

module.exports = { AwsStack }
