import io from 'socket.io-client'
let STRAPI_ENDPOINT
if (process.env.NODE_ENV !== 'production') {
  STRAPI_ENDPOINT = process.env.WS_URL
} else {
  STRAPI_ENDPOINT = process.env.WS_URL
}
const socket= io;
export const WS = {socket, url:STRAPI_ENDPOINT}
