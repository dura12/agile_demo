/**
 * Score a password using length, digits, and symbols (demo rules for class).
 * @param {string} password
 * @returns {number}
 */
export function scorePassword(password) {
  if (typeof password !== "string") {
    throw new TypeError("password must be a string");
  }

  let score = 0;
  score += Math.min(password.length * 2, 24);
  if (/\d/.test(password)) score += 15;
  if (/[^a-zA-Z0-9]/.test(password)) score += 15;
  return score;
}

/**
 * @param {string} password
 * @returns {"weak" | "medium" | "strong"}
 */
export function strengthLabel(password) {
  const score = scorePassword(password);
  if (score < 25) return "weak";
  if (score < 45) return "medium";
  return "strong";
}
