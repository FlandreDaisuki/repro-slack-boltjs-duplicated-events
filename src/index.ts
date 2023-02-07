import { App, ExpressReceiver } from '@slack/bolt';

const fatalEnv = (name: string) => {
  const e = process.env[name];
  if (!e) {
    console.error(`Missing environment: ${name}`);
    process.exit(1);
  }
  return e;
};

const receiver = new ExpressReceiver({
  signingSecret: fatalEnv('SLACK_SECRET'),
  processBeforeResponse: true,
});

const app = new App({
  receiver,
  token: fatalEnv('BOT_TOKEN'),
  processBeforeResponse: true,
});

app.message(/^!debug\s/i, async ({ message, logger, say, event, body } ) => {
  logger.info(JSON.stringify({ event, message, body }));
  const result = await say('```\n' + JSON.stringify({ event, message, body }) + '\n```');
  logger.info(JSON.stringify(result));
});

export const entry = receiver.app;
