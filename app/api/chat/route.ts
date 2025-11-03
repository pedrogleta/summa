import { NextResponse } from 'next/server';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';

const llm = new ChatOpenAI({
  modelName: process.env.LM_STUDIO_MODEL,
  apiKey: 'N/A',
  configuration: {
    baseURL: process.env.LM_STUDIO_ENDPOINT,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 },
      );
    }

    console.log('Sending to LM Studio:', prompt);
    const response = await llm.invoke([new HumanMessage(prompt)]);
    console.log('Received from LM Studio:', response.content);

    return NextResponse.json({ reply: response.content });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
