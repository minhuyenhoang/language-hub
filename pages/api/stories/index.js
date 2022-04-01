import db from '../../../lib/db';
import { getAllStories } from '../../../lib/stories';

export default async function handler(req, res) {
	await db();
	res.status(200).json(await getAllStories());
}
