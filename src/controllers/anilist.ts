import { Request, Response } from 'express';
import AnilistService from '@services/anilist';

export default class AnilistController {
    static async handler(req: Request, res: Response): Promise<void> {
        const anilist: AnilistService = new AnilistService(req.params.type!);
        res.ok(await anilist.handle(req.params.method, req.query) as object);
    };
}
