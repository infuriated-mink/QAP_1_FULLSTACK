// The url module in Node.js is like a helper for working with web addresses. It can take a web address and break it into parts, like the website's name and the specific page you want to visit.

const url = require('url');

// Sample URL
const urlString = 'https://www.google.ca/search?q=url+global+object&sca_esv=600400644&sxsrf=ACQVn0-9jKGRDxbYoBIotFRrvNI8AMds3w%3A1705946982468&source=hp&ei=Zq-uZaCnGqWpptQPrP-64AU&iflsig=ANes7DEAAAAAZa69diDCtqjjZ0E4wDaMoXfbFKO5LWEr&ved=0ahUKEwig8pLfy_GDAxWllIkEHay_DlwQ4dUDCA8&uact=5&oq=url+global+object&gs_lp=Egdnd3Mtd2l6IhF1cmwgZ2xvYmFsIG9iamVjdDIFECEYoAEyBRAhGJ8FSO0lUPUFWIkjcAJ4AJABAJgBgAGgAa8OqgEEOC4xMLgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICCxAAGIAEGIoFGJECwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARivAcICDhAuGIAEGLEDGMcBGNEDwgIFEC4YgATCAg4QABiABBiKBRiRAhixA8ICBRAAGIAEwgIKEAAYgAQYFBiHAsICBhAAGBYYHsICCBAAGBYYHhgKwgIIEAAYFhgeGA_CAgsQABiABBiKBRiGA8ICBxAhGAoYoAE&sclient=gws-wiz';

// Parse the URL
const parsedUrl = url.parse(urlString, true);

// Display the parsed URL components
console.log('Original URL:', urlString);
console.log('Parsed URL Object:', parsedUrl);
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.query);
console.log('Fragment:', parsedUrl.hash);
