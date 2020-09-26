/* eslint-disable require-await */
'use strict'

import { postProcessRoute } from './process/postProcessRoute'
import { postRulesRoute } from './rules/postNewRule/postRulesRoute'
import { getAllRulesRoute } from './rules/getAllRules/getAllRulesRoute'
import { getRuleByIdRoute } from './rules/getRuleById/getRuleByIdRoute'

const API_VERSION = '/v1'

export const api = async (fastify) => {
  fastify.register((fastify) => postProcessRoute(fastify), {
    prefix: API_VERSION,
  })
  fastify.register((fastify) => postRulesRoute(fastify), {
    prefix: API_VERSION,
  })
  fastify.register((fastify) => getAllRulesRoute(fastify), {
    prefix: API_VERSION,
  })
  fastify.register((fastify) => getRuleByIdRoute(fastify), {
    prefix: API_VERSION,
  })
}
