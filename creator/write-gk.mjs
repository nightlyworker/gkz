import fs from 'fs/promises'

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
const openaiApiKey = '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' //process.env.OPENAI_API_KEY || ''

const model = new OpenAI({ openAIApiKey:openaiApiKey, temperature: 0.2, modelName: "gpt-3.5-turbo-0613", temperature: 0, maxTokens: 800  });


const dir = '../content/gene-key/'
const file = 'gene-key-1'


const ff = await fs.readFile('./Keys-All Keys - All Data.csv', { encoding: 'utf8' });

import Papa from 'papaparse';

// let c = Papa.parse('./Keys-All Keys - All Data.csv', {header: true, delimiter: ',', quoteChar: '', escapeChar: ''});

let c = Papa.parse(ff, { header: false,delimiter: ','});


for (let gk of c.data) {
	if (gk[0] === 'Key') {
		continue
	}
	let item = {
		no: gk[0],
		title: gk[3],
		shadow: gk[4],
		gift: gk[5],
		sidhi: gk[6],
		programmingPartner: gk[10],
		physiology: gk[11],
		codonRing: gk[12],
		aminoAcid: gk[13]
	}
	console.log(item,gk)
	process.exit(1)
}



console.log(dir+file)

console.log(c)

process.exit(1)

const l = await fs.readFile('TypeAndStrategy.json', { encoding: 'utf8' });

let profiles = JSON.parse(l)

console.log(profiles)
// not used, as the text was soo vague
process.exit(1)

let no = 1
for (let item of profiles) {
	console.log(no)
	no = item['Line Number'].replace('/','')
	const filename = dir + 'line-'+no+'-human-design.md'
	console.log(filename, item['Profile Number'])
	console.log(item['Line Name'])
	console.log(item['Description'])
	console.log(item)
	
	let profileName = 'Human Design '+item['Line Number']+' Line '+item['Line Name']
	console.log(profileName)
	const templateA = `you are human design teacher.\n 
	we are speaking about "{product}".\n
	please write me engaging, attractive, informative (rich in details) short article (skip title as this is part of larger text) with sections: big picture, why it's matter and gifts formated in markdown
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

		const res = await chainA.call({ product: profileName });
		const article = res.text
		
		const resB = await chainB.call({ product: profileName,
			instr: item.Description
		});
		//console.log(resB)
		const expanded = resB.text
		console.log(expanded)

		//console.log(expanded)
		
		const resC = await chainC.call({ product: profileName,
			text: expanded
		});
		
		const tldr = resC.text.replace('TL;DR:', '')
		const tldrFixed = tldr //item['Line Number']+' '+tldr
		
		console.log(tldr)
		
		// Notable facts
		// const notableFacts = gates[no-1]['Notable facts']

		// here are i have everything to build markdown file
		// structure
		// tldr
		// 500words expanded
		// article
		// notablefact
		let content = ''
		content = content + `---\ntitle: ${profileName}\nlayout: article\ndescription: ${tldrFixed}\n---\n`
		content = content + `# ${profileName}\n`
		content = content + '## In short\n'
		content = content + tldrFixed + '\n'
		content = content + `\n## ${profileName}\n`
		content = content + expanded + '\n'
		//console.log('## Read more')
		content = content + article

		// content  = content + '\n## Notable facts\n'
		// content = content + notableFacts

		console.log('---')
		console.log('writing to ', filename)
		// console.log(content)
		// appendFile
		//console.log(content)
				
		const fw = await fs.writeFile(filename,  content);
		console.log('done', no)
		// process.exit(1)
		//process.exit(1)
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