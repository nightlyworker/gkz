export default defineEventHandler((event) => {

// https://gist.github.com/srestraj/c61d0a025f53ab7f99bd875eace5cc84	

// https://gist.github.com/Atinux/05836469acca9649fa2b9e865df898a2

	setHeader(event, 'cache-control', 'no-cache')
  setHeader(event, 'connection', 'keep-alive')
  setHeader(event, 'content-type', 'text/event-stream')
  setResponseStatus(event, 200)

  let counter = 0

  const sendEvent = (data) => {
    event.node.res.write(`id: ${++counter}\n`);
    event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
  }

	return {
    hello: 'stream'
  }
})
