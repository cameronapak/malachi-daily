// Book data provided by https://bolls.life/api

export const selectedBibleVersions: readonly string[] = ["NIV", "ESV", "NLT", "KJV", "MSG"] as const
export type bibleVersion = typeof selectedBibleVersions[number]
export const bibleVersionData: { [key in bibleVersion]: { readableName: string, attribution: string } } = {
    "NIV": {
        readableName: "NIV - New International Version",
        attribution: "Scriptures taken from the Holy Bible, New International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission of Zondervan. All rights reserved worldwide. www.zondervan.com The “NIV” and “New International Version” are trademarks registered in the United States Patent and Trademark Office by Biblica, Inc.™"
    },
    "ESV": {
        readableName: "ESV - English Standard Version",
        attribution: "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved."
    },
    "NLT": {
        readableName: "NLT - New Living Translation",
        attribution: "Scripture quotations are taken from the Holy Bible, New Living Translation, copyright ©1996, 2004, 2015 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Carol Stream, Illinois 60188. All rights reserved."
    },
    "KJV": {
        readableName: "KJV - King James Version",
        attribution: "Rights in the Authorized (King James) Version in the United Kingdom are vested in the Crown. Published by permission of the Crown’s patentee, Cambridge University Press."
    },
    "MSG": {
        readableName: "MSG - The Message",
        attribution: "All Scripture quotations are taken from The Message, copyright © 1993, 2002, 2018 by Eugene H. Peterson. Used by permission of NavPress. . All rights reserved. Represented by Tyndale House Publishers."
    }
}

export type BookName = "Genesis" | "Exodus" | "Leviticus" | "Numbers" | "Deuteronomy" | "Joshua" | "Judges" | "Ruth" | "1 Samuel" | "2 Samuel" | "1 Kings" | "2 Kings" | "1 Chronicles" | "2 Chronicles" | "Ezra" | "Nehemiah" | "Esther" | "Job" | "Psalms" | "Proverbs" | "Ecclesiastes" | "Song of Solomon" | "Isaiah" | "Jeremiah" | "Lamentations" | "Ezekiel" | "Daniel" | "Hosea" | "Joel" | "Amos" | "Obadiah" | "Jonah" | "Micah" | "Nahum" | "Habakkuk" | "Zephaniah" | "Haggai" | "Zechariah" | "Malachi" | "Matthew" | "Mark" | "Luke" | "John" | "Acts" | "Romans" | "1 Corinthians" | "2 Corinthians" | "Galatians" | "Ephesians" | "Philippians" | "Colossians" | "1 Thessalonians" | "2 Thessalonians" | "1 Timothy" | "2 Timothy" | "Titus" | "Philemon" | "Hebrews" | "James" | "1 Peter" | "2 Peter" | "1 John" | "2 John" | "3 John" | "Jude" | "Revelation" | "Psalm"

export type Book = {
    bookid: number;
    // This is the chapter name of the book, such as "Genesis"
    name: BookName;
    chronorder: number;
    chapters: number;
}

export const NLT_BOOKS: Book[] = [{ "bookid": 1, "name": "Genesis", "chronorder": 1, "chapters": 50 }, { "bookid": 2, "name": "Exodus", "chronorder": 3, "chapters": 40 }, { "bookid": 3, "name": "Leviticus", "chronorder": 4, "chapters": 27 }, { "bookid": 4, "name": "Numbers", "chronorder": 5, "chapters": 36 }, { "bookid": 5, "name": "Deuteronomy", "chronorder": 6, "chapters": 34 }, { "bookid": 6, "name": "Joshua", "chronorder": 7, "chapters": 24 }, { "bookid": 7, "name": "Judges", "chronorder": 8, "chapters": 21 }, { "bookid": 8, "name": "Ruth", "chronorder": 9, "chapters": 4 }, { "bookid": 9, "name": "1 Samuel", "chronorder": 10, "chapters": 31 }, { "bookid": 10, "name": "2 Samuel", "chronorder": 11, "chapters": 24 }, { "bookid": 11, "name": "1 Kings", "chronorder": 15, "chapters": 22 }, { "bookid": 12, "name": "2 Kings", "chronorder": 28, "chapters": 25 }, { "bookid": 13, "name": "1 Chronicles", "chronorder": 12, "chapters": 29 }, { "bookid": 14, "name": "2 Chronicles", "chronorder": 16, "chapters": 36 }, { "bookid": 15, "name": "Ezra", "chronorder": 37, "chapters": 10 }, { "bookid": 16, "name": "Nehemiah", "chronorder": 38, "chapters": 13 }, { "bookid": 17, "name": "Esther", "chronorder": 36, "chapters": 10 }, { "bookid": 18, "name": "Job", "chronorder": 2, "chapters": 42 }, { "bookid": 19, "name": "Psalms", "chronorder": 13, "chapters": 150 }, { "bookid": 20, "name": "Proverbs", "chronorder": 17, "chapters": 31 }, { "bookid": 21, "name": "Ecclesiastes", "chronorder": 18, "chapters": 12 }, { "bookid": 22, "name": "Song of Solomon", "chronorder": 14, "chapters": 8 }, { "bookid": 23, "name": "Isaiah", "chronorder": 25, "chapters": 66 }, { "bookid": 24, "name": "Jeremiah", "chronorder": 29, "chapters": 52 }, { "bookid": 25, "name": "Lamentations", "chronorder": 30, "chapters": 5 }, { "bookid": 26, "name": "Ezekiel", "chronorder": 32, "chapters": 48 }, { "bookid": 27, "name": "Daniel", "chronorder": 33, "chapters": 12 }, { "bookid": 28, "name": "Hosea", "chronorder": 23, "chapters": 14 }, { "bookid": 29, "name": "Joel", "chronorder": 20, "chapters": 3 }, { "bookid": 30, "name": "Amos", "chronorder": 21, "chapters": 9 }, { "bookid": 31, "name": "Obadiah", "chronorder": 31, "chapters": 1 }, { "bookid": 32, "name": "Jonah", "chronorder": 19, "chapters": 4 }, { "bookid": 33, "name": "Micah", "chronorder": 22, "chapters": 7 }, { "bookid": 34, "name": "Nahum", "chronorder": 24, "chapters": 3 }, { "bookid": 35, "name": "Habakkuk", "chronorder": 27, "chapters": 3 }, { "bookid": 36, "name": "Zephaniah", "chronorder": 26, "chapters": 3 }, { "bookid": 37, "name": "Haggai", "chronorder": 34, "chapters": 2 }, { "bookid": 38, "name": "Zechariah", "chronorder": 35, "chapters": 14 }, { "bookid": 39, "name": "Malachi", "chronorder": 39, "chapters": 4 }, { "bookid": 40, "name": "Matthew", "chronorder": 40, "chapters": 28 }, { "bookid": 41, "name": "Mark", "chronorder": 58, "chapters": 16 }, { "bookid": 42, "name": "Luke", "chronorder": 52, "chapters": 24 }, { "bookid": 43, "name": "John", "chronorder": 66, "chapters": 21 }, { "bookid": 44, "name": "Acts", "chronorder": 54, "chapters": 28 }, { "bookid": 45, "name": "Romans", "chronorder": 46, "chapters": 16 }, { "bookid": 46, "name": "1 Corinthians", "chronorder": 44, "chapters": 16 }, { "bookid": 47, "name": "2 Corinthians", "chronorder": 45, "chapters": 13 }, { "bookid": 48, "name": "Galatians", "chronorder": 41, "chapters": 6 }, { "bookid": 49, "name": "Ephesians", "chronorder": 47, "chapters": 6 }, { "bookid": 50, "name": "Philippians", "chronorder": 49, "chapters": 4 }, { "bookid": 51, "name": "Colossians", "chronorder": 50, "chapters": 4 }, { "bookid": 52, "name": "1 Thessalonians", "chronorder": 42, "chapters": 5 }, { "bookid": 53, "name": "2 Thessalonians", "chronorder": 43, "chapters": 3 }, { "bookid": 54, "name": "1 Timothy", "chronorder": 55, "chapters": 6 }, { "bookid": 55, "name": "2 Timothy", "chronorder": 59, "chapters": 4 }, { "bookid": 56, "name": "Titus", "chronorder": 57, "chapters": 3 }, { "bookid": 57, "name": "Philemon", "chronorder": 51, "chapters": 1 }, { "bookid": 58, "name": "Hebrews", "chronorder": 53, "chapters": 13 }, { "bookid": 59, "name": "James", "chronorder": 48, "chapters": 5 }, { "bookid": 60, "name": "1 Peter", "chronorder": 56, "chapters": 5 }, { "bookid": 61, "name": "2 Peter", "chronorder": 60, "chapters": 3 }, { "bookid": 62, "name": "1 John", "chronorder": 61, "chapters": 5 }, { "bookid": 63, "name": "2 John", "chronorder": 62, "chapters": 1 }, { "bookid": 64, "name": "3 John", "chronorder": 63, "chapters": 1 }, { "bookid": 65, "name": "Jude", "chronorder": 64, "chapters": 1 }, { "bookid": 66, "name": "Revelation", "chronorder": 65, "chapters": 22 }]

// Create obj of the books with the name as the key and the obj itself as the value
export const books = {} as { [key in BookName]: Book }
NLT_BOOKS.forEach(book => {
    books[book.name] = book
})

const bibleDotComVersionsAndIDs: { [key in bibleVersion]: number } = {
    'NIV': 111,
    'NLT': 116,
    'ESV': 59,
    'MSG': 97,
    'KJV': 1
}

// https://ubsicap.github.io/usfm/identification/books.html
const booksAndUsfmShortcodes: { [key in BookName]: string } = {
    'Genesis': 'GEN',
    'Exodus': 'EXO',
    'Leviticus': 'LEV',
    'Numbers': 'NUM',
    'Deuteronomy': 'DEU',
    'Joshua': 'JOS',
    'Judges': 'JDG',
    'Ruth': 'RUT',
    '1 Samuel': '1SA',
    '2 Samuel': '2SA',
    '1 Kings': '1KI',
    '2 Kings': '2KI',
    '1 Chronicles': '1CH',
    '2 Chronicles': '2CH',
    'Ezra': 'EZR',
    'Nehemiah': 'NEH',
    'Esther': 'EST',
    'Job': 'JOB',
    'Psalms': 'PSA',
    'Psalm': 'PSA',
    'Proverbs': 'PRO',
    'Ecclesiastes': 'ECC',
    'Song of Solomon': 'SNG',
    'Isaiah': 'ISA',
    'Jeremiah': 'JER',
    'Lamentations': 'LAM',
    'Ezekiel': 'EZK',
    'Daniel': 'DAN',
    'Hosea': 'HOS',
    'Joel': 'JOL',
    'Amos': 'AMO',
    'Obadiah': 'OBA',
    'Jonah': 'JON',
    'Micah': 'MIC',
    'Nahum': 'NAM',
    'Habakkuk': 'HAB',
    'Zephaniah': 'ZEP',
    'Haggai': 'HAG',
    'Zechariah': 'ZEC',
    'Malachi': 'MAL',
    'Matthew': 'MAT',
    'Mark': 'MRK',
    'Luke': 'LUK',
    'John': 'JHN',
    'Acts': 'ACT',
    'Romans': 'ROM',
    '1 Corinthians': '1CO',
    '2 Corinthians': '2CO',
    'Galatians': 'GAL',
    'Ephesians': 'EPH',
    'Philippians': 'PHP',
    'Colossians': 'COL',
    '1 Thessalonians': '1TH',
    '2 Thessalonians': '2TH',
    '1 Timothy': '1TI',
    '2 Timothy': '2TI',
    'Titus': 'TIT',
    'Philemon': 'PHM',
    'Hebrews': 'HEB',
    'James': 'JAS',
    '1 Peter': '1PE',
    '2 Peter': '2PE',
    '1 John': '1JN',
    '2 John': '2JN',
    '3 John': '3JN',
    'Jude': 'JUD',
    'Revelation': 'REV'
}

export function constructBibleDotComChapterURL({
    book,
    chapter,
    versionShortCode
}: {
    book: BookName,
    chapter: number,
    versionShortCode: bibleVersion
}) {
    const originUrl = 'https://www.bible.com';
    const bookShortCode = booksAndUsfmShortcodes[book];
    return `${originUrl}/bible/${bibleDotComVersionsAndIDs[versionShortCode]}/${bookShortCode}.${chapter}.${versionShortCode}?utm_source=malachi-daily-web-app&utm_medium=referral`;
}
