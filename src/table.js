import React from 'react';
import './table.css';
import numeral from 'numeral';

function table({countries}) {
    return (
        <div className="table">
            {countries.map(({country,cases}) => (
                <tr>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format("000,000")}</strong></td>
                </tr>
            ))}
        </div>
    );
}

export default table;
