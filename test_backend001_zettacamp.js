/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
    'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
    'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
    'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
  ];
  
  function result(sentence) {
    const words = sentence.split(' ');
    return words.length;
  }
  
  function MaxWords(sentences) {
    let maxWords = 0;
  
    sentences.forEach((sentence) => {
      const numWords = result(sentence);
  
      if (numWords > maxWords) {
        maxWords = numWords;
      }
    });
  
    return maxWords;
  }
  
  console.log(MaxWords(sentences));
  