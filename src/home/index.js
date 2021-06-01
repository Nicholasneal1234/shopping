import React from 'react';
import { connect } from 'react-redux';
import Product from './product/index.js';

function Home () {
    return(
    	    <Product/>
    	)
}

export default connect (null, null)(Home);