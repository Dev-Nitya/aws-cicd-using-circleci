import { DynamoDB } from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
	options = {
		region: 'us-east-1',
		endpoint: 'http://localhost:8000',
	};
}

const dynamoDB = new DynamoDB.DocumentClient(options);

export default dynamoDB;