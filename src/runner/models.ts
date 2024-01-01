import { ChatModel, createOpenAIClient } from '@dexaai/dexter/model'

import * as config from '~/lib/config'

const baseUrl: string = process.env.PROXY_BASE_URL || ''

// TODO: support non-OpenAI models
export const chatModel = new ChatModel({
  client: createOpenAIClient({
    ...(baseUrl && { baseUrl })
  }),
  debug: config.isDev
})
