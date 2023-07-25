import React from 'react';

function CountrySearch({countryName, handleInput}) {
    return (
        <div>find countries <input value={countryName} onChange={handleInput}/></div>

    );
}

export default CountrySearch;