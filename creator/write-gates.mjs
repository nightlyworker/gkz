import fs from 'fs/promises'

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
const openaiApiKey = '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' //process.env.OPENAI_API_KEY || ''

const model = new OpenAI({ openAIApiKey:openaiApiKey, temperature: 0.2, modelName: "gpt-3.5-turbo-0613", temperature: 0, maxTokens: 800  });


const dir = '../content/gate/'
const file = 'gate-1-human-design'



console.log(dir+file)


const l = await fs.readFile('Gates.json', { encoding: 'utf8' });

let gates = JSON.parse(l)

let no = 1
for (let item of gates) {
	console.log(no)

	const filename = dir + 'gate-'+no+'-human-design.md'
	console.log(filename, item['Gate Name'])

	let gateName = 'Human Design '+item['Gate Name']
	gateName = gateName.replace(':','')
	
	const templateA = `you are human design teacher.\n 
	we are speaking about "{product}".\n
	please write me short article (skip title as this is part of larger text) with sections: big picture, why it's matter and gifts formated in markdown
	`;

	const templateB = `you are human design teacher. \n
	we are speaking about "{product}\n"
	expand this """\n
	{instr}\n
	"""
	for 500 words
	`

	const templateC = `you are human design teacher.\n 
	we are speaking about "{product}".\n
	please write me interesting and engaging tldr for following text\n
	"""\n
	{{text}}\n
	"""\n
	`;

		
		const promptA = new PromptTemplate({
			template: templateA,
			inputVariables: ["product"],
		});

		const promptB = new PromptTemplate({
			template: templateB,
			inputVariables: ["product","instr"],
		});

		const promptC = new PromptTemplate({
			template: templateC,
			inputVariables: ["product","text"],
		});

		// Human Design Gate 1: The Creative - The Gate of Self-Expression
		no++
		
		const chainA = new LLMChain({ llm: model, prompt: promptA });
		const chainB = new LLMChain({ llm: model, prompt: promptB });
		const chainC = new LLMChain({ llm: model, prompt: promptC });

		const res = await chainA.call({ product: gateName });
		const article = res.text
		// console.log(article)

		const resB = await chainB.call({ product: gateName,
			instr: item.Description
		});
		//console.log(resB)
		const expanded = resB.text
		//console.log(expanded)
		
		const resC = await chainC.call({ product: gateName,
			text: expanded
		});
		
		const tldr = resC.text.replace('TL;DR:', '')

		//console.log(tldr)
		
		// Notable facts
		// const notableFacts = gates[no-1]['Notable facts']

		// here are i have everything to build markdown file
		// structure
		// tldr
		// 500words expanded
		// article
		// notablefact
		let content = ''
		content = content + `---\ntitle: ${gateName}\nlayout: article\ndescription:${tldr}\n---\n`
		content = content + `# ${gateName}\n`
		content = content + '## In short\n'
		content = content + tldr + '\n'
		content = content + `\n## ${gateName}\n`
		content = content + expanded + '\n'
		//console.log('## Read more')
		content = content + article

		// content  = content + '\n## Notable facts\n'
		// content = content + notableFacts

		console.log('---')
		console.log('writing to ', filename)
		// console.log(content)
		// appendFile

		const fw = await fs.writeFile(filename,  content);
		console.log('done', no)
	/*
	if (no > 5 ) {
		process.exit(1)
	}
	*/
}

/*
you are human design teacher. 
we are speaking about "Human Design Gate 1: The Creative - The Gate of Self-Expression".
please write me short article with sections: introduction, why it's matter and gifts formated in markdown

expand this """This is the energy to express yourself in your own unique way and to make a creative contribution, without limitation. You are driven to live out your authentic individuality. \n' +
    '(+) You are knowledgable about the right timing and invitation to birth your contribution from your soul into the world, and in doing so, inspire others, by example. \n' +
    '(-) You may be frustrated by waiting on right timing or by the ebbs and flows of your creative cycle. \n' +
    '(^) Honor the lows of your creative process and harness the gems of the melancholy of that time - knowing that some of the greatest, most moving pieces of creativity do come from a melancholic muse."" for 500 words

		format as tldr
		*/