// define(function() {
//   return {
//     baseUrl: SERVICE_API_URL, // Change this to your API URL
//     request: function
//     (endpoint, method, params, headers, successCallback, errorCallback) {
//       try {
//         var httpClient = new kony.net.HttpRequest();
//         var url = this.baseUrl + endpoint;
//         httpClient.open(method, url);
//         httpClient.setRequestHeader("Content-Type", "application/json");
//         // Add additional headers if provided
//         if (headers) {
//           for (var key in headers) {
//             httpClient.setRequestHeader(key, headers[key]);
//           }
//         }
//         httpClient.onReadyStateChange = function() {
//           if (httpClient.readyState === 4) {
//             if (httpClient.status >= 200 && httpClient.status < 300) {
//               var response = JSON.parse(httpClient.responseText);
//               successCallback(response);
//             } else {
//               errorCallback(httpClient.status, httpClient.responseText);
//             }
//           }
//         };

//         if (params) {
//           httpClient.send(JSON.stringify(params));
//         } else {
//           httpClient.send();
//         }
//       } catch (error) {
//         errorCallback(500, error);
//       }
//     },
//     getActiveOrder: function (headers, successCallback, errorCallback) {
//       var body = {
//         "query": "query ActiveOrder { activeOrder { id lines { productVariant { id } } } }",
//       }
//       this.request('', 'POST', body, headers, successCallback, errorCallback)
//     },
//   };
// });
