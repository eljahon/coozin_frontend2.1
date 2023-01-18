export default ({app, router, route,query, params}, inject)=> {
 async function Pusher (itemQuery) {
const data=await app.router.push({path: app.localePath(app.router.path), query: {...app.router.query, ...itemQuery}})
   return data;
  }
  inject('routePush', Pusher)
}
