import React, { Fragment } from 'react';

import { gql, useQuery } from '@apollo/client';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import LaunchesFeed from '../../components/LaunchesFeed/LaunchesFeed';

const PAST_LAUNHES = gql`
    {
        launchesPast(limit: 15) {
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
            }
            id
            mission_name
        }
    }
`;

const PastLaunches = () => {
    const { data, loading, error } = useQuery(PAST_LAUNHES);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    const launches = data.launchesPast.filter(
        launch => launch.links.article_link && launch.links.flickr_images.length > 0
    );

    console.log(launches);

    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5">Past Launches</h1>
            <LaunchesFeed launches={launches} />
        </Fragment>
    );
};

export default PastLaunches;
