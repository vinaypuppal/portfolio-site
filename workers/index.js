import { getEventHandler } from '@cinematix/next-cloudflare';
import routesManifest from '../.next/routes-manifest.json';

const handleEvent = getEventHandler(routesManifest);

addEventListener('fetch', handleEvent);
