import { z } from "zod";
// chat - no cache
import { ChatOpenAI } from "langchain/chat_models/openai";
// normal 
import { OpenAI } from "langchain/llms/openai";

import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";
import { createStructuredOutputChainFromZod } from "langchain/chains/openai_functions";
import { HumanMessage, SystemMessage } from "langchain/schema";

import { RedisCache }  from "langchain/cache/redis";

import { createClient } from "redis";

// add redis for cache
const openAiKey = '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' // paid

const clientRedis = createClient({
  url: 'redis://127.0.0.1:6379/0'
});

const cache = new RedisCache(clientRedis);
clientRedis.connect()



export default defineEventHandler(async (event) => {
	console.log('cache is ', clientRedis.isOpen, clientRedis.isOpen)
	
	const llm = new ChatOpenAI({ openAIApiKey:openAiKey, modelName: "gpt-3.5-turbo-0613", temperature: 0, maxTokens: 200 });

	const zodSchema = z.object({
		name: z.string().describe("Human name"),
		surname: z.string().describe("Human surname"),
		/*
		age: z.number().describe("Human age"),
		birthplace: z.string().describe("Where the human was born"),
		appearance: z.string().describe("Human appearance description"),
		shortBio: z.string().describe("Short bio secription"),
		university: z.string().optional().describe("University name if attended"),
		gender: z.string().describe("Gender of the human"),
		*/
		interests: z
			.array(z.string())
			.describe("json array of strings human interests"),
	});
		
	const prompt = new ChatPromptTemplate({
		promptMessages: [
			SystemMessagePromptTemplate.fromTemplate(
				"Generate details of a hypothetical person."
			),
			HumanMessagePromptTemplate.fromTemplate("Additional context: {inputText}"),
		],
		inputVariables: ["inputText"],
	});

	const chain = createStructuredOutputChainFromZod(zodSchema, {
		prompt,
		llm,
		outputKey: "person",
	});
	const response = await chain.call({
		inputText:
			"Please generate a diverse group of people, but don't generate anyone who likes video games.",
	});
	
	console.log(JSON.stringify(response, null, 2));

  return {
    hello: 'team'
  }
})
