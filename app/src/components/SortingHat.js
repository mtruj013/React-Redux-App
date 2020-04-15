import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchResult } from '../store/actions/sortActions'

const SortingHat = props => {

    useEffect(() => {
       props.fetchResult();
    }, [])

    return (
        <div>
            <h3>"Oh you may not think I'm pretty, but don't judge on what you see, I'll eat myself if you can find a smarter hat than me."</h3>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        result: state.sort.result,
        isLoading: state.sort.isLoading,
        error: state.sort.error
    }
}

export default connect(
    mapStateToProps,
    { fetchResult }
)(SortingHat);