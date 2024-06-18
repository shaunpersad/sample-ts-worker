// @ts-ignore
import welcome from './views/welcome.html';
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(welcome, {
			headers: {
				'content-type': 'text/html'
			}
		});
	},
} satisfies ExportedHandler<Env>;
