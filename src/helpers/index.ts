import czechifyUk from './czechify_uk';
import englifyUk from './englify_uk';
import englifyRu from './englify_ru';

export const transliterate = (
    text: string,
    inputType: string,
    outputType: string
): string => {
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

    return '';
};