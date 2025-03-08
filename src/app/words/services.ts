import db from "@/lib/postgres";

const findWords = async () => {
  try {
    const fetchedWords = await db.query(`SELECT * FROM words`);
    return fetchedWords.rows;
  } catch (error) {
    console.error("Error fetching words: ", error);
    return [];
  }
};

const findWordId = async (word: string) => {
  try {
    const wordId = await db.query(`SELECT uuid FROM words WHERE word = $1`, [
      word,
    ]);
    if (wordId) {
      return wordId.rows[0].uuid;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error finding word:", error);
    return null;
  }
};

const findWord = async (word: string) => {
  try {
    const fetchedWord = db.query(`SELECT word FROM words WHERE word = $1`, [
      word,
    ]);
    if (fetchedWord) {
      return fetchedWord;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error finding word:", error);
    return null;
  }
};

export { findWords, findWordId, findWord };
