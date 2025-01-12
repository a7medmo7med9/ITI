function calculateGuessCount(wordLength, level) {
  if (level === "easy") {
    return Math.min(9, Math.max(5, wordLength));
  } else if (level === "medium") {
    return Math.min(6, Math.max(4, wordLength));
  } else if (level === "hard") {
    return Math.min(4, Math.max(2, wordLength));
  }
}

const WordsDB = {
  easy: {
    فاكهة: [
      { value: "موز", guessCount: calculateGuessCount(3, "easy") },
      { value: "تين", guessCount: calculateGuessCount(3, "easy") },
      { value: "عنب", guessCount: calculateGuessCount(4, "easy") },
      { value: "تفاح", guessCount: calculateGuessCount(5, "easy") },
      { value: "رمان", guessCount: calculateGuessCount(4, "easy") },
      { value: "برتقال", guessCount: calculateGuessCount(7, "easy") },
      { value: "كيوي", guessCount: calculateGuessCount(4, "easy") },
      { value: "كمثرى", guessCount: calculateGuessCount(6, "easy") },
      { value: "ليمون", guessCount: calculateGuessCount(5, "easy") },
      { value: "خوخ", guessCount: calculateGuessCount(3, "easy") },
      { value: "مشمش", guessCount: calculateGuessCount(5, "easy") },
      { value: "توت", guessCount: calculateGuessCount(3, "easy") },
      { value: "أناناس", guessCount: calculateGuessCount(6, "easy") },
      { value: "بطيخ", guessCount: calculateGuessCount(5, "easy") },
      { value: "مانجو", guessCount: calculateGuessCount(5, "easy") },
      { value: "جوافة", guessCount: calculateGuessCount(6, "easy") },
      { value: "كريز", guessCount: calculateGuessCount(5, "easy") },
      { value: "توتة", guessCount: calculateGuessCount(4, "easy") },
      { value: "تفاحة", guessCount: calculateGuessCount(6, "easy") },
      { value: "مشمشة", guessCount: calculateGuessCount(6, "easy") },
    ],
    حيوان: [
      { value: "ثعلب", guessCount: calculateGuessCount(5, "easy") },
      { value: "اسد", guessCount: calculateGuessCount(3, "easy") },
      { value: "نمر", guessCount: calculateGuessCount(3, "easy") },
      { value: "ذئب", guessCount: calculateGuessCount(3, "easy") },
      { value: "غزال", guessCount: calculateGuessCount(5, "easy") },
      { value: "خروف", guessCount: calculateGuessCount(5, "easy") },
      { value: "فيل", guessCount: calculateGuessCount(3, "easy") },
      { value: "كلب", guessCount: calculateGuessCount(3, "easy") },
      { value: "قط", guessCount: calculateGuessCount(2, "easy") },
      { value: "حصان", guessCount: calculateGuessCount(5, "easy") },
      { value: "عصفور", guessCount: calculateGuessCount(6, "easy") },
      { value: "بقرة", guessCount: calculateGuessCount(5, "easy") },
      { value: "دجاجة", guessCount: calculateGuessCount(6, "easy") },
      { value: "بطريق", guessCount: calculateGuessCount(6, "easy") },
      { value: "سلحفاة", guessCount: calculateGuessCount(7, "easy") },
      { value: "غوريلا", guessCount: calculateGuessCount(7, "easy") },
      { value: "نورس", guessCount: calculateGuessCount(4, "easy") },
      { value: "قنفذ", guessCount: calculateGuessCount(5, "easy") },
      { value: "طاووس", guessCount: calculateGuessCount(6, "easy") },
      { value: "هدهد", guessCount: calculateGuessCount(5, "easy") },
    ],
    طيور: [
      { value: "حمام", guessCount: calculateGuessCount(4, "easy") },
      { value: "نسر", guessCount: calculateGuessCount(3, "easy") },
      { value: "صقر", guessCount: calculateGuessCount(4, "easy") },
      { value: "بط", guessCount: calculateGuessCount(2, "easy") },
      { value: "نعامة", guessCount: calculateGuessCount(6, "easy") },
      { value: "عصفور", guessCount: calculateGuessCount(6, "easy") },
      { value: "ببغاء", guessCount: calculateGuessCount(5, "easy") },
      { value: "هدهد", guessCount: calculateGuessCount(5, "easy") },
      { value: "بلبل", guessCount: calculateGuessCount(5, "easy") },
      { value: "غراب", guessCount: calculateGuessCount(5, "easy") },
    ],
  },
  medium: {
    فاكهة: [
      { value: "أناناس", guessCount: calculateGuessCount(6, "medium") },
      { value: "بطيخ", guessCount: calculateGuessCount(5, "medium") },
      { value: "مانجو", guessCount: calculateGuessCount(5, "medium") },
      { value: "مشمش", guessCount: calculateGuessCount(5, "medium") },
      { value: "توت", guessCount: calculateGuessCount(4, "medium") },
      { value: "كرز", guessCount: calculateGuessCount(4, "medium") },
      { value: "جوافة", guessCount: calculateGuessCount(6, "medium") },
      { value: "رمان", guessCount: calculateGuessCount(5, "medium") },
      { value: "خوخ", guessCount: calculateGuessCount(4, "medium") },
      { value: "بندورة", guessCount: calculateGuessCount(6, "medium") },
      { value: "ليمون", guessCount: calculateGuessCount(5, "medium") },
      { value: "موز", guessCount: calculateGuessCount(3, "medium") },
      { value: "توتة", guessCount: calculateGuessCount(4, "medium") },
      { value: "عناب", guessCount: calculateGuessCount(4, "medium") },
      { value: "برتقال", guessCount: calculateGuessCount(7, "medium") },
      { value: "كمثرى", guessCount: calculateGuessCount(6, "medium") },
      { value: "خيار", guessCount: calculateGuessCount(5, "medium") },
      { value: "طماطم", guessCount: calculateGuessCount(6, "medium") },
      { value: "عنب", guessCount: calculateGuessCount(4, "medium") },
    ],
    حيوان: [
      { value: "جمل", guessCount: calculateGuessCount(3, "medium") },
      { value: "غزال", guessCount: calculateGuessCount(5, "medium") },
      { value: "دب", guessCount: calculateGuessCount(2, "medium") },
      { value: "نمر", guessCount: calculateGuessCount(3, "medium") },
      { value: "ذئب", guessCount: calculateGuessCount(3, "medium") },
      { value: "فيل", guessCount: calculateGuessCount(3, "medium") },
      { value: "قط", guessCount: calculateGuessCount(2, "medium") },
      { value: "كلب", guessCount: calculateGuessCount(3, "medium") },
      { value: "حصان", guessCount: calculateGuessCount(5, "medium") },
      { value: "أسد", guessCount: calculateGuessCount(3, "medium") },
      { value: "دجاجة", guessCount: calculateGuessCount(6, "medium") },
      { value: "بقرة", guessCount: calculateGuessCount(5, "medium") },
      { value: "سلحفاة", guessCount: calculateGuessCount(7, "medium") },
      { value: "غوريلا", guessCount: calculateGuessCount(7, "medium") },
      { value: "بطة", guessCount: calculateGuessCount(3, "medium") },
      { value: "قنفذ", guessCount: calculateGuessCount(5, "medium") },
      { value: "طائر", guessCount: calculateGuessCount(5, "medium") },
      { value: "طاووس", guessCount: calculateGuessCount(6, "medium") },
      { value: "نحلة", guessCount: calculateGuessCount(5, "medium") },
    ],
    طيور: [
      { value: "ببغاء", guessCount: calculateGuessCount(6, "medium") },
      { value: "بلبل", guessCount: calculateGuessCount(5, "medium") },
      { value: "حمامة", guessCount: calculateGuessCount(6, "medium") },
      { value: "طائر", guessCount: calculateGuessCount(5, "medium") },
      { value: "نعامة", guessCount: calculateGuessCount(6, "medium") },
      { value: "عصفور", guessCount: calculateGuessCount(6, "medium") },
      { value: "نسر", guessCount: calculateGuessCount(3, "medium") },
      { value: "غراب", guessCount: calculateGuessCount(5, "medium") },
      { value: "صقر", guessCount: calculateGuessCount(4, "medium") },
      { value: "بومة", guessCount: calculateGuessCount(4, "medium") },
    ],
  },
  hard: {
    فاكهة: [
      { value: "أناناس", guessCount: calculateGuessCount(6, "hard") },
      { value: "مشمش", guessCount: calculateGuessCount(5, "hard") },
      { value: "توتة", guessCount: calculateGuessCount(4, "hard") },
      { value: "جوافة", guessCount: calculateGuessCount(6, "hard") },
      { value: "كمثرى", guessCount: calculateGuessCount(6, "hard") },
      { value: "برقوق", guessCount: calculateGuessCount(6, "hard") },
      { value: "رمان", guessCount: calculateGuessCount(5, "hard") },
      { value: "تفاح", guessCount: calculateGuessCount(5, "hard") },
      { value: "موز", guessCount: calculateGuessCount(3, "hard") },
      { value: "بطيخ", guessCount: calculateGuessCount(5, "hard") },
      { value: "خوخ", guessCount: calculateGuessCount(4, "hard") },
      { value: "برتقال", guessCount: calculateGuessCount(7, "hard") },
      { value: "ليمون", guessCount: calculateGuessCount(5, "hard") },
      { value: "توت", guessCount: calculateGuessCount(4, "hard") },
      { value: "عنب", guessCount: calculateGuessCount(4, "hard") },
      { value: "طماطم", guessCount: calculateGuessCount(6, "hard") },
      { value: "كرز", guessCount: calculateGuessCount(4, "hard") },
      { value: "عناب", guessCount: calculateGuessCount(4, "hard") },
      { value: "حبحب", guessCount: calculateGuessCount(5, "hard") },
    ],
    حيوان: [
      { value: "جمل", guessCount: calculateGuessCount(3, "hard") },
      { value: "قنفذ", guessCount: calculateGuessCount(4, "hard") },
      { value: "سلحفاة", guessCount: calculateGuessCount(7, "hard") },
      { value: "غوريلا", guessCount: calculateGuessCount(7, "hard") },
      { value: "نمر", guessCount: calculateGuessCount(3, "hard") },
      { value: "فيل", guessCount: calculateGuessCount(3, "hard") },
      { value: "دب", guessCount: calculateGuessCount(2, "hard") },
      { value: "بقرة", guessCount: calculateGuessCount(5, "hard") },
      { value: "طائر", guessCount: calculateGuessCount(5, "hard") },
      { value: "أسد", guessCount: calculateGuessCount(3, "hard") },
      { value: "طاووس", guessCount: calculateGuessCount(6, "hard") },
      { value: "نحلة", guessCount: calculateGuessCount(5, "hard") },
      { value: "عصفور", guessCount: calculateGuessCount(6, "hard") },
      { value: "حصان", guessCount: calculateGuessCount(5, "hard") },
      { value: "بطة", guessCount: calculateGuessCount(3, "hard") },
      { value: "غزال", guessCount: calculateGuessCount(5, "hard") },
      { value: "دجاجة", guessCount: calculateGuessCount(6, "hard") },
      { value: "ببغاء", guessCount: calculateGuessCount(6, "hard") },
      { value: "دلفين", guessCount: calculateGuessCount(6, "hard") },
    ],
    طيور: [
      { value: "طائر", guessCount: calculateGuessCount(5, "hard") },
      { value: "بومة", guessCount: calculateGuessCount(4, "hard") },
      { value: "نسر", guessCount: calculateGuessCount(3, "hard") },
      { value: "صقر", guessCount: calculateGuessCount(4, "hard") },
      { value: "عصفور", guessCount: calculateGuessCount(6, "hard") },
      { value: "ببغاء", guessCount: calculateGuessCount(6, "hard") },
      { value: "حمامة", guessCount: calculateGuessCount(6, "hard") },
      { value: "نحلة", guessCount: calculateGuessCount(5, "hard") },
      { value: "طاووس", guessCount: calculateGuessCount(6, "hard") },
      { value: "غراب", guessCount: calculateGuessCount(5, "hard") },
    ],
  },
};

const arabicLetters = [
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
  "أ",
  "إ",
  "آ",
  "ى",
  "ء",
  "ة",
  "ئ",
  "ؤ",
];
