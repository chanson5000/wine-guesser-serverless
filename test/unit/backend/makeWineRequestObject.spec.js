import { makeValidWineObject } from '../../../src/backend/util';

describe('makeWineRequestObject', () => {
  describe('when receives event', () => {
    const expected = JSON.parse('{"acidity": "moderatePlus", "alcohol": "moderateMinus", "climate": "moderateMinus", "color": "garnet", "condition": {"baked": false, "overripe": true, "ripe": true, "tart": true}, "nonFruit": {"balsamic": false, "carbonicMaceration": false, "cocoa": false, "coffee": false, "floral": false, "game": false, "herbalDried": false, "herbalMint": false, "herbalOregano": false, "herbalTea": false, "herbalThyme": false, "herbalTobacco": false, "inorganic": false, "oak": false, "organic": false, "oxidization": false, "smoke": false, "spiceAnise": false, "spiceOther": false, "spicePepper": false, "vegetalPyrazine": false, "vegetalTomato": false, "volatileAcidity": false}, "tannin": "moderateMinus", "type": {"black": false, "blue": false, "red": false}, "varietal": "SomeNewVarietal", "world": "old"}');
    const event = {
      resource: '/wines/red/{varietal}/{world}',
      path: '/wines/red/SomeNewVarietal/old',
      httpMethod: 'PUT',
      headers:
        {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          'CloudFront-Forwarded-Proto': 'https',
          'CloudFront-Is-Desktop-Viewer': 'true',
          'CloudFront-Is-Mobile-Viewer': 'false',
          'CloudFront-Is-SmartTV-Viewer': 'false',
          'CloudFront-Is-Tablet-Viewer': 'false',
          'CloudFront-Viewer-Country': 'US',
          'content-type': 'application/json;charset=UTF-8',
          Host: '9vqlpxuyhl.execute-api.us-east-2.amazonaws.com',
          origin: 'http://localhost:8080',
          Referer: 'http://localhost:8080/wine/red/new',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
          Via: '2.0 9cd19437b0d776b24c104d0c56377ca8.cloudfront.net (CloudFront)',
          'X-Amz-Cf-Id': 'jO3M5qvWpCWp1U9PHZ_2MrevaMd0UlcHTcnLD10mld6_FR_P5cjoEQ==',
          'X-Amzn-Trace-Id': 'Root=1-5cd76a06-7de6e974434bcab433d82494',
          'X-Forwarded-For': '173.18.237.133, 70.132.48.132',
          'X-Forwarded-Port': '443',
          'X-Forwarded-Proto': 'https'
        },
      multiValueHeaders:
        {
          Accept: ['application/json, text/plain, */*'],
          'Accept-Encoding': ['gzip, deflate, br'],
          'Accept-Language': ['en-US,en;q=0.9'],
          'CloudFront-Forwarded-Proto': ['https'],
          'CloudFront-Is-Desktop-Viewer': ['true'],
          'CloudFront-Is-Mobile-Viewer': ['false'],
          'CloudFront-Is-SmartTV-Viewer': ['false'],
          'CloudFront-Is-Tablet-Viewer': ['false'],
          'CloudFront-Viewer-Country': ['US'],
          'content-type': ['application/json;charset=UTF-8'],
          Host: ['9vqlpxuyhl.execute-api.us-east-2.amazonaws.com'],
          origin: ['http://localhost:8080'],
          Referer: ['http://localhost:8080/wine/red/new'],
          'User-Agent':
            ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'],
          Via:
            ['2.0 9cd19437b0d776b24c104d0c56377ca8.cloudfront.net (CloudFront)'],
          'X-Amz-Cf-Id': ['jO3M5qvWpCWp1U9PHZ_2MrevaMd0UlcHTcnLD10mld6_FR_P5cjoEQ=='],
          'X-Amzn-Trace-Id': ['Root=1-5cd76a06-7de6e974434bcab433d82494'],
          'X-Forwarded-For': ['173.18.237.133, 70.132.48.132'],
          'X-Forwarded-Port': ['443'],
          'X-Forwarded-Proto': ['https']
        },
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      pathParameters: { varietal: 'SomeNewVarietal', world: 'old' },
      stageVariables: null,
      requestContext:
        {
          resourceId: '5urb97',
          resourcePath: '/wines/red/{varietal}/{world}',
          httpMethod: 'PUT',
          extendedRequestId: 'Zi2BAF35iYcFrbA=',
          requestTime: '12/May/2019:00:34:14 +0000',
          path: '/Prod/wines/red/SomeNewVarietal/old',
          accountId: '626303904667',
          protocol: 'HTTP/1.1',
          stage: 'Prod',
          domainPrefix: '9vqlpxuyhl',
          requestTimeEpoch: 1557621254489,
          requestId: 'ab3064d3-744d-11e9-8a5f-e149bb77892d',
          identity:
            {
              cognitoIdentityPoolId: null,
              accountId: null,
              cognitoIdentityId: null,
              caller: null,
              sourceIp: '173.18.237.133',
              principalOrgId: null,
              accessKey: null,
              cognitoAuthenticationType: null,
              cognitoAuthenticationProvider: null,
              userArn: null,
              userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
              user: null
            },
          domainName: '9vqlpxuyhl.execute-api.us-east-2.amazonaws.com',
          apiId: '9vqlpxuyhl'
        },
      body: '{"varietal":"SomeNewVarietal","world":"old","color":"garnet","condition":{"tart":true,"ripe":true,"overripe":true,"baked":false},"type":{"red":false,"black":false,"blue":false},"nonFruit":{"floral":false,"vegetalPyrazine":false,"vegetalTomato":false,"herbalTobacco":false,"herbalMint":false,"herbalThyme":false,"herbalTea":false,"herbalOregano":false,"herbalDried":false,"spicePepper":false,"spiceAnise":false,"spiceOther":false,"coffee":false,"cocoa":false,"game":false,"smoke":false,"balsamic":false,"carbonicMaceration":false,"volatileAcidity":false,"oxidization":false,"organic":false,"inorganic":false,"oak":false},"acidity":"moderatePlus","alcohol":"moderateMinus","climate":"moderateMinus","tannin":"moderateMinus"}',
      isBase64Encoded: false
    };

    it('correctly parses event', () => {
      const result = makeValidWineObject(event);

      expect(result).toEqual(expected);
    });

  });
});