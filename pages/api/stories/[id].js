// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../../lib/db';
import { getStory } from '../../../lib/stories';

export default async function handler(req, res) {
	await db();
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case 'GET':
			res.status(200).json(await getStory(id));
		case 'POST':

		case 'DELETE':
	}
}
