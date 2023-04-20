
const { assert } = require('chai');

const { userIdFromEmail, urlsForUser, generateRandomString, cookieHasUser, emailHasUser } = require('../helpers');

const testUsers = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};

const testURLDatabase = {
  b6UTxQ: { longURL: "https://www.tsn.ca", userID: "aJ48lW" },
  i245bv: { longURL: "https://www.youtube.ca", userID: "bb1234" },
  i245G3: { longURL: "https://www.yahoo.ca", userID: "bb1234" }
};

describe('userIdfromEmail', function () {
  it('should return a user with valid email', function () {
    const user = userIdFromEmail("user@example.com", testUsers);
    const expectedOutput = "userRandomID";
    assert.strictEqual(user.id, expectedOutput);
  });

  it('should return a user object when provided with an existing email', function () {
    const actual = getUserByEmail("user@example.com", testUsers);
    const expectedOutput = actual;
    assert.strictEqual(actual, actual);
  });

  it('should return null with a non-existent email', function () {
    const actual = getUserByEmail("invalid@example.com", testUsers);
    const expectedOutput = null;
    assert.strictEqual(actual, expectedOutput);
  });
});

describe('generateRandomString', function () {
  it('should return a string', function () {
    const actual = typeof generateRandomString();
    const expected = "string";
    assert.strictEqual(actual, expected);
  });

  it('should return false between two random strings', function () {
    const actual = generateRandomString(5) === generateRandomString(5);
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});

describe('urlsForUser', function () {
  it('should return an empty object if user has no shortURL', function () {
    const actual = urlsForUser("user", testURLDatabase);
    const expected = {};
    assert.deepEqual(actual, expected);
  });

  it('should return an object with shortURL for user', function () {
    const actual = urlsForUser("aJ48lW", testURLDatabase);
    const expected = { b6UTxQ: { longURL: 'https://www.tsn.ca', userID: 'aJ48lW' } };
    assert.deepEqual(actual, expected);
  });
});
describe('cookieHasUser', function () {

  it('should return true if a cookie corresponds to a user in the database', function () {
    const existingCookie = cookieHasUser("user1RandomID", testUsers);
    const expectedOutput = true;
    assert.equal(existingCookie, expectedOutput);
  });

  it('should return false if a cookie does not correspond to a user in the database', function () {
    const nonExistantCookie = cookieHasUser("user3RandomID", testUsers);
    const expectedOutput = false;
    assert.equal(nonExistantCookie, expectedOutput);
  });
});

describe('emailHasUser', function () {

  it('should return true if email corresponds to a user in the database', function () {
    const existingEmail = emailHasUser("user1@example.com", testUsers);
    const expectedOutput = true;
    assert.equal(existingEmail, expectedOutput);
  });

  it('should return false if email does not correspond to a user in the database', function () {
    const nonExistantEmail = emailHasUser("fake_email@test.com", testUsers);
    const expectedOutput = false;
    assert.equal(nonExistantEmail, expectedOutput);
  });
});