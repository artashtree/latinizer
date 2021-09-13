import czechifyUk from './czechify_uk';
import englifyUk from './englify_uk';
import englifyRu from './englify_ru';

export default (text, inputType, outputType) => {
  if (inputType === 'uk') {
    switch (outputType) {
      case 'cz':
        return czechifyUk(text);
      case 'en':
        return englifyUk(text);
    }    
  }

  if (inputType === 'ru') {
    return englifyRu(text);
  }
}