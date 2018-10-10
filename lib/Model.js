import {getEntries} from '../services/contentful';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 22:31
 */
export default class Model {



    fetch() {
        return getEntries({content_type: 'event'});
    }

}
