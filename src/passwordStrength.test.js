import test from "node:test";
import assert from "node:assert/strict";
import { scorePassword, strengthLabel } from "./passwordStrength.js";

test("empty password is weak", () => {
  assert.equal(scorePassword(""), 0);
  assert.equal(strengthLabel(""), "weak");
});

test("short letters-only password is weak", () => {
  assert.equal(scorePassword("abc"), 6);
  assert.equal(strengthLabel("abc"), "weak");
});

test("digits increase score", () => {
  const without = scorePassword("abcdefgh");
  const withDigit = scorePassword("abcdefg1");
  assert.ok(withDigit > without);
});

test("symbols increase score", () => {
  const without = scorePassword("abcdefgh");
  const withSymbol = scorePassword("abcdefg!");
  assert.ok(withSymbol > without);
});

test("long password with digit and symbol is strong", () => {
  const pwd = "DevOps2026!demo";
  assert.equal(strengthLabel(pwd), "strong");
  assert.ok(scorePassword(pwd) >= 45);
});

test("non-string throws", () => {
  assert.throws(() => scorePassword(null), TypeError);
});
