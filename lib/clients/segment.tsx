'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const Segment = () => {
  const pathname = usePathname();
  useEffect(() => {
    pageEvent(pathname);
  }, [pathname]);
  return (
    <Script id="segmentScript" onLoad={() => console.log('segment loaded')}>
      {`!function(){function p(){var c=document.querySelector("link[rel='canonical']");return{__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer}}var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var n=Array.prototype.slice.call(arguments);["track","screen","alias","group","page","identify"].indexOf(e)>-1&&n.push(p());n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i);analytics._loadOptions=n};analytics._writeKey="${process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}";;analytics.SNIPPET_VERSION="5.0.1";
analytics.load("${process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS_WRITE_KEY}");
}}();`}
    </Script>
  );
};

export default Segment;

export const trackEvent = (eventName: string, properties?: Object) => {
  // @ts-ignore
  window?.analytics?.track(eventName, { ...properties });
};

export const pageEvent = (url: string) => {
  // @ts-ignore
  window?.analytics?.page(url);
};
