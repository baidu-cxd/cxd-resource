import {BosClient} from '@baiducloud/sdk';
import credentials from './credentials';

export default new class extends BosClient {

    constructor() {
        const config = {
            credentials: {
                ak: credentials.ak,
                sk: credentials.sk
            },
            endpoint: credentials.endpoint
        };

        super(config);
    }

    listObjects(...args) {
        return super.listObjects(...args).then(res => {
            const objects = res.body.contents;
            delete res.body.commonPrefixes; // eslint-disable-line no-param-reassign
            delete res.body.contents; // eslint-disable-line no-param-reassign
            return objects
        });
    }
}
