import React from 'react';

import Link from 'next/link';
import {noop} from 'lib';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 20:31
 */
export default ({link, onClick = noop, children}) => (
    <button onClick={onClick}>
        {(link)
        && <Link href={link}>{<a>{children}</a>}</Link>
        || <a>{children}</a>
        }
    </button>
);
