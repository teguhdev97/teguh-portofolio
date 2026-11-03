import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
const source = (await readFile(new URL('../src/lib/content.js', import.meta.url), 'utf8'))
  .replace("import { supabase } from './supabase';", '')
  .replace('export async function', 'async function');
const load = client => new Function('supabase', `${source}; return getContent;`)(client);
test('requires database configuration', async () => {
  await assert.rejects(load(null)('portfolio'), /environment variables/);
});
test('filters content and keeps authoritative row identifiers', async () => {
  const calls = [];
  const query = {
    select(value) { calls.push(['select', value]); return this; },
    eq(...args) { calls.push(['eq', ...args]); return this; },
    order(value) { calls.push(['order', value]); return this; },
    then(resolve) { resolve({ data: [{ id: 'real', slug: 'project', data: { id: 'bad', name: 'Project' } }], error: null }); }
  };
  const rows = await load({ from(table) { assert.equal(table, 'portfolio_content'); return query; } })('portfolio', 'project');
  assert.deepEqual(rows, [{ id: 'real', slug: 'project', name: 'Project' }]);
  assert.ok(calls.some(c => c.join() === 'eq,kind,portfolio'));
  assert.ok(calls.some(c => c.join() === 'eq,slug,project'));
});
test('database errors propagate instead of returning empty data', async () => {
  const failure = new Error('database unavailable');
  const query = { select() { return this; }, eq() { return this; }, order() { return Promise.resolve({ error: failure }); } };
  await assert.rejects(load({ from: () => query })('skill'), failure);
});
