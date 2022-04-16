import React from 'react';

const TickerTable = ({receivedTicker}) => {
    console.log(receivedTicker);
    return (
        <>
        {/* <ul>
            {receivedTicker.map((item)=> (<li key={item}>{item}</li>))}
        </ul> */}
        <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </table>
        </>
    );
};

export default TickerTable;