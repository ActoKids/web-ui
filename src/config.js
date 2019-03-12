export default {
	apiGateway: {
		REGION: 'us-west-2',
		URL: 'https://api.2edusite.com/v1/'
	},
	//AWS Congito credentials. Can be found again by selecting: 
	//	Manage User Pool > (select Pool name) > General Settings > App Clients  
	//	Right now, these are the API Team Cognito credentials. Replace with Cognito code
	//	near line 16 when corrected
	cognito: {
		REGION: 'us-west-2',
		USER_POOL_ID: 'us-west-2_zyakLhiCP',
		APP_CLIENT_ID: '5irago9u7jmc95hl1h9fbamfrg',
		IDENTITY_POOL_ID: 'us-west-2:389b278a-49d8-42b6-817d-4d6e580b5fc9'
	}
/* This is the UI Team Cognito Info. Remove above cognito info an uncomment this out
	
	cognito: {
		REGION: 'us-east-2',
		USER_POOL_ID: 'us-east-2_otpHbMxKi',
		APP_CLIENT_ID: '7l7q1utlnmg3qnmlffc5n4otin',
		IDENTITY_POOL_ID: '' //this will be created once Cognito Perms are corrected
	} */
};