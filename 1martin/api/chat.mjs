// https://js.langchain.com/docs/modules/memory/examples/buffer_memory_chat

import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";
import { BufferMemory } from "langchain/memory";


import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanChatMessage, AIChatMessage } from "langchain/schema";


const openAiKey = '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' // paid

export const run = async () => {
  const chat = new ChatOpenAI({ openAIApiKey:openAiKey, modelName: "gpt-3.5-turbo-0613", temperature: 0, maxTokens: 20 });

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know."
    ),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

	const pastMessages = [
		new HumanMessage("My name's Jonas"),
		new AIMessage("Nice to meet you, Jonas!"),
	];
	
	chatHistory = new ChatMessageHistory(pastMessages)

  const chain = new ConversationChain({
    memory: new BufferMemory({ chatHistory: chatHistory, returnMessages: true, memoryKey: "history" }),
    prompt: chatPrompt,
    llm: chat,
  });

  const response = await chain.call({
    input: "hi! whats up?",
  });

  console.log(response);
};

run()