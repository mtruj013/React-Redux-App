import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchResult } from '../store/actions/sortActions';
import Loader from 'react-loader-spinner';

const SortingHat = props => {

    useEffect(() => {
       props.fetchResult();
    }, [])

    return (
        <div>
            <h2>"Oh you may not think I'm pretty, but don't judge on what you see, I'll eat myself if you can find a smarter hat than me."</h2>
            {props.isLoading && (
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            )}
            {props.result && <h3>{props.result}</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchResult}>Get Sorted</button>
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