import axios from "axios";
import { logger } from "../../errors/Winston";

export class GithubProfileUseCase {
    async execute(username: any) {
        const baseURL = process.env.BASE_URL_GITHUB;

        try {
            const url = `${baseURL}/${username}`;
            const response = await axios.get(url);
            logger.info({
                GithubProfileUseCase: {
                    username: username,
                    url: url,
                    method: response.config.method,
                    result: response.data,
                },
            });
            return response.data;
        } catch (error) {
            logger.error("invalid parameters");
        }
    }
}
