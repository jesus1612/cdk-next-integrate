const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class AwsStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: false
    });
  }
}

module.exports = { AwsStack }
