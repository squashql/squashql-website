// let accept = document.querySelector('#accept');
// let reject = document.querySelector('#reject');
// let container = document.querySelector('#cookie-container');

// // Check if user has given consent before.
// if (getCookie('cookie-consent') === null) {
//   // Display the cookie banner.
//   container.style.display = "flex";
// } else if (getCookie('cookie-consent') === "accepted") {
//   // The user already agreed to cookies.
//   initAnalytics();
// } else {
//   // The user already rejected cookies.
// }

// accept.addEventListener('click', function() {
//   setCookie('cookie-consent', 'accepted', 365);   // Add cookie as accepted.
//   initAnalytics();                                // Start using your analytics.
//   container.style.display = "none";               // Close the banner.
// });
// reject.addEventListener('click', function() {
//   deleteAllCookie();                              // Delete all cookies.
//   setCookie('cookie-consent', 'rejected', 365);   // Add cookie as rejected.
//   container.style.display = "none";               // Close the banner.
// });

// /**
//  * 
//  * @param {string} name 
//  * @returns {string|null} 
//  */
// function getCookie(name) {
//   const cookies = document.cookie.split('; ');
//   const value = cookies
//     .find(c => c.startsWith(name))
//     ?.split('=')[1]
//   if (value === undefined) {
//     return null
//   }
//   return decodeURIComponent(value);
// }

// /**
//  * 
//  * @param {string} name 
//  * @param {string} value 
//  * @param {number} days 
//  */
// function setCookie(name, value, days) {
//   const date = new Date();
//   date.setDate(date.getDate() + days);
//   document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`;
// }

// function deleteAllCookie() {
//   document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
// }

// function initAnalytics() {
//   // TODO: setup your own analytics.
//   // EXAMPLE:
//   // gtag('js', new Date());
//   // gtag('config', 'G-XXXXXXXX', { 'send_page_view': false });
// }
