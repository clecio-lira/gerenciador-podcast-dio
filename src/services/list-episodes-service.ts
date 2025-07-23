import { PodcastTransferModel } from "../models/podcast-tranfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repoPodcast();

  if (data.length > 0) {
    responseFormat.statusCode = HttpStatusCode.OK;
  } else {
    responseFormat.statusCode = HttpStatusCode.NO_CONTENT;
  }

  responseFormat.body = data;
  return responseFormat;
};
