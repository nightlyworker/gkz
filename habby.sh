curl -X POST "https://api.credinet.co/paymentpublic/StartCredit" \
     -H "SCLocation: 0,0" \
     -H "country: co" \
     -H "SCOrigen: Staging" \
     -H "Ocp-Apim-Subscription-Key: 42fee88913d34e3b8c2c5ae45847bc32" \
     -H "Content-Type: application/json" \
     --data '{"idDocument":"123456654", "typeDocument":"CC","transactionDate": "2020-04-01T00:00:00-05:00","valueToPaid":300000.0,"vendorId":"6463edc7380a76ddd5c1970b","storeId":"6488ac289768ffecbfcfa477","orderId":"999","responseUrl":"https://www.retornocomercio.com"}'


		 "typeDocument":"CC",
 "transactionDate": "2020-04-01T00:00:00-05:00",
 "valueToPaid":300000.0,
 "vendorId":"vendor1",
 "storeId":"store1",
 "orderId":"orderId",
 "responseUrl":"https://www.retornocomercio.com",



curl -X POST "https://api.credinet.co/paymentpublic/StartCredit" \
     -H "SCLocation: 0,0" \
		 -H "SCOrigen: Staging" \
     -H "country: co" \
     -H "Ocp-Apim-Subscription-Key: 42fee88913d34e3b8c2c5ae45847bc32" \
     -H "Content-Type: application/json" \
     --data '{"idDocument":"1234567890", "typeDocument":"CC","transactionDate": "2020-04-01T00:00:00-05:00","valueToPaid":300000.0,"vendorId":"6463edc7380a76ddd5c1970b","storeId":"6488ac289768ffecbfcfa477","orderId":"999","responseUrl":"https://www.retornocomercio.com"}'


curl -X POST \
  -H "Content-Type: application/json" \
  -H "SCLocation: 0,0" \
  -H "country: co" \
  -H "SCOrigen: Staging" \
  -H "Ocp-Apim-Subscription-Key: 42fee88913d34e3b8c2c5ae45847bc32" \
  -d '{
    "idDocument": "123456654",
    "typeDocument": "CC",
    "transactionDate": null,
    "valueToPaid": 300000.0,
    "vendorId": "6463edc7380a76ddd5c1970b",
    "storeId": "6488ac289768ffecbfcfa477",
    "orderId": "100",
    "responseUrl": "https://www.retornocomercio.com"
}' \
  https://api.credinet.co/paymentpublic/StartCredit
