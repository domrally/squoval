import fastifyStatic from '@fastify/static'
import { log } from 'console'
import fastify from 'fastify'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
;(() => {
	fastify().then(Fastify => {
		const __filename = fileURLToPath(import.meta.url),
			__dirname = dirname(__filename)

		Fastify.register(fastifyStatic, {
			root: join(__dirname, 'docs'),
			prefix: `/`,
		})
		Fastify.ready().then(() => {
			Fastify.listen({ host: '127.0.0.1', port: 3000 }).then(() => {
				log(`ready`)
			})
		})
	})
})()
