import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import MainHeader from '../../components/MainHeader';
// style
import './style.scss';

const GET_COMPANY_DETAILS = gql`
    {
        company {
            name
            summary
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(GET_COMPANY_DETAILS);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    console.log(data);
    return (
        <div className="home__container d-flex align-items-center text-center text-white">
            <MainHeader name={data.company.name} description={data.company.summary} />
        </div>
    );
};

export default Home;
