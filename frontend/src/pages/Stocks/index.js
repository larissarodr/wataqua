import React, { useState, useEffect }from 'react';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';


export default function Stocks(){

    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        api.get('stocks').then(response => {
            setStocks(response.data);
          })
    }, []);

      return (
        <>
            <Header/>
            <table className="flatTable">
                <thead>
                    <tr className="titleTr">
                        <th>STOCK ID</th>
                        <th>NAME</th>
                        <th>RESPONSIBLE</th>
                        <th>SETUP DATE</th>
                        <th>LAST CHECKED BY</th>
                        <th>LAST CHECK DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <tr className="bodyTr" key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.responsible_user_username}</td>
                            <td>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', 
                                                            minute: 'numeric'}).format(stock.setup_date)}</td>
                            <td>{stock.last_check_user_username}</td>
                            <td>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', 
                                                            minute: 'numeric'}).format(stock.last_check_date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </>
      )
}