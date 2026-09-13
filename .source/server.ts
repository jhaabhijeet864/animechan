// @ts-nocheck
import { default as __fd_glob_12 } from "../content/docs/quote/meta.json?collection=meta"
import { default as __fd_glob_11 } from "../content/docs/anime/meta.json?collection=meta"
import { default as __fd_glob_10 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_9 from "../content/docs/quote/random.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/quote/random-via-character.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/quote/random-via-anime.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/quote/quotes-by-character.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/quote/quotes-by-anime.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/quote/pagination.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/quote/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/anime/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/auth.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.doc("docs", "content/docs", {"auth.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "anime/index.mdx": __fd_glob_2, "quote/index.mdx": __fd_glob_3, "quote/pagination.mdx": __fd_glob_4, "quote/quotes-by-anime.mdx": __fd_glob_5, "quote/quotes-by-character.mdx": __fd_glob_6, "quote/random-via-anime.mdx": __fd_glob_7, "quote/random-via-character.mdx": __fd_glob_8, "quote/random.mdx": __fd_glob_9, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_10, "anime/meta.json": __fd_glob_11, "quote/meta.json": __fd_glob_12, });