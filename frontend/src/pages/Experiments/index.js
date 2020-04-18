import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column'
import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Experiments(){
    return (
        <>
            <Header/>
            <div className="experiments-container">
              <h1>Registered Experiments</h1>
              
                {/* {experiments.map(experiment => ( */}
                  <DataTable value="test">
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                  </DataTable>
                {/* ))} */}
              
          </div>
            <Footer/>
        </>
    );
}