import React from 'react';
import { Link } from 'react-router-dom';

import PageCard from '../../components/page-card/page-card.component';

const ErrorPage = () => (

    <PageCard>
        <h1>
            404 NOT FOUND
        </h1>
        <h5>
            Sorry, we couldn't find that page
        </h5>
        <Link to='/'>
            EWP Homepage
        </Link>
    </PageCard>

);

export default ErrorPage;
