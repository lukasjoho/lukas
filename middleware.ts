import { Kafka } from '@upstash/kafka';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const kafka = new Kafka({
    url: process.env.UPSTASH_KAFKA_URL,
    username: process.env.UPSTASH_KAFKA_USERNAME,
    password: process.env.UPSTASH_KAFKA_PASSWORD,
  });

  const message = {
    country: req.geo?.country,
    city: req.geo?.region,
    url: req.url,
    path: req.nextUrl.pathname,
    ip: req.headers.get('x-real-ip'),
    mobile: req.headers.get('sec-ch-ua-mobile'),
    platform: req.headers.get('sec-ch-ua-platform'),
    useragent: req.headers.get('user-agent'),
  };

  const p = kafka.producer();
  const topic = 'analytics';
  console.log('MESSAGE: ', message);
  event.waitUntil(p.produce(topic, JSON.stringify(message)));

  return NextResponse.next();
}
