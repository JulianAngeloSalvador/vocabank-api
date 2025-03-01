import {
  languageData,
  romanizationsData,
  translationsData,
  Word,
  wordsData,
} from "@/lib/seed-helper";
import { Request, Response } from "express";

const words = wordsData;

const getWords = (req: Request, res: Response) => {
  res.render("./pages/words", { words });
};

const getWord = (req: Request, res: Response) => {
  // get word id
  const wordId: string = req.body.word;

  // get word data (check Word interface)
  // convert word_id from seed data (number type) to string for evaluation with wordId
  const fetchedWord = words.find((word) => word.word_id.toString() === wordId);

  // get available translations for the word
  const translations = translationsData.filter(
    (translation) => translation.word_id.toString() === wordId
  );

  // map translations to include language names and romanizations
  const filteredTranslations = translations.map((translation) => {
    // find language name based on translation's language ID
    const language = languageData.find(
      (lang) => lang.language_id === translation.language_id
    );

    // find romanization based on translation ID
    const romanization = romanizationsData.find(
      (rom) => rom.translation_id === translation.translation_id
    );

    return {
      // return a populated object w/ optional chaining to handle undefined or null values
      translatedWord: translation.translated_word,
      languageName: language ? language.language_name : "Language not found",
      languageCode: language
        ? language.language_code
        : "No Language Code provided",
      romanization: romanization ? romanization.romanized_text : "N/A",
    };
  });

  const wordData = {
    word: fetchedWord?.english_word,
    translations: filteredTranslations,
  };

  res.render("./pages/word-viewer", { wordData });
};

export { getWords, getWord };
