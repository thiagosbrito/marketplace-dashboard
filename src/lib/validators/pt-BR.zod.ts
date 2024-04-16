import i18next from 'i18next';
import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import translation from '../../i18n/pt-br/zod.json';

i18next.init({
    lng: 'pt',
    resources: {
        pt: { zod: translation}
    }
});
z.setErrorMap(zodI18nMap);

export { z };