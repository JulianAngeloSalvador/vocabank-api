import {
  languageData,
  romanizationsData,
  translationsData,
  Word,
  wordsData,
} from "@/lib/seed-helper";
import { Request, Response } from "express";
import { findWords } from "./services";

// const words = wordsData;

const getWords = async (req: Request, res: Response) => {
  const words = await findWords();
  res.render("./pages/words", { words });
};

// const getWord = (req: Request, res: Response) => {
//   // get word id
//   const wordId: string = req.query.word;

//   // get available translations for the word
//   const translations = translationsData.filter(
//     (translation) => translation.word_id.toString() === wordId
//   );

//   // map translations to include language names and romanizations
//   const filteredTranslations = translations.map((translation) => {
//     // find language name based on translation's language ID
//     const language = languageData.find(
//       (lang) => lang.language_id === translation.language_id
//     );

//     // find romanization based on translation ID
//     const romanization = romanizationsData.find(
//       (rom) => rom.translation_id === translation.translation_id
//     );

//     return {
//       // return a populated object w/ optional chaining to handle undefined or null values
//       translatedWord: translation.translated_word,
//       languageName: language ? language.language_name : "Language not found",
//       languageCode: language
//         ? language.language_code
//         : "No Language Code provided",
//       romanization: romanization ? romanization.romanized_text : "N/A",
//     };
//   });

//   const wordData = {
//     word: fetchedWord?.english_word,
//     translations: filteredTranslations,
//   };

//   res.render("./pages/word-viewer", { wordData });
// };

// const searchWord = (req: Request, res: Response) => {
//   // get user input
//   const searchTerm = req.query.word as string;

//   // check existence
//   const result = words.find((word) => word.english_word === searchTerm);
//   // word not found
//   if (!result) {
//     return res.redirect("/words");
//   }

//   // word available
//   const filteredWords = words.filter((word) =>
//     word.english_word.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   res.render("./pages/words", { words: filteredWords });
// };

export { getWords };
