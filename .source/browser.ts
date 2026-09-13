// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"auth.mdx": () => import("../content/docs/auth.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "anime/index.mdx": () => import("../content/docs/anime/index.mdx?collection=docs"), "quote/index.mdx": () => import("../content/docs/quote/index.mdx?collection=docs"), "quote/pagination.mdx": () => import("../content/docs/quote/pagination.mdx?collection=docs"), "quote/quotes-by-anime.mdx": () => import("../content/docs/quote/quotes-by-anime.mdx?collection=docs"), "quote/quotes-by-character.mdx": () => import("../content/docs/quote/quotes-by-character.mdx?collection=docs"), "quote/random-via-anime.mdx": () => import("../content/docs/quote/random-via-anime.mdx?collection=docs"), "quote/random-via-character.mdx": () => import("../content/docs/quote/random-via-character.mdx?collection=docs"), "quote/random.mdx": () => import("../content/docs/quote/random.mdx?collection=docs"), }),
};
export default browserCollections;