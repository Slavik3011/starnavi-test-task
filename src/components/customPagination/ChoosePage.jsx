import React from 'react';
import { connect } from 'react-redux';

import { toPage } from 'actions';


class ChoosePage extends React.Component {
    constructor() {
        super();

        this.choosePage = this.choosePage.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: 1
        }
    }

    choosePage(e) {
        if(e.keyCode == 13) {
            let { value: page } = this.state,
                { maxPage, toPage } = this.props;

            if(page < 1) page = 1;
            if(page > maxPage) page = maxPage;
            toPage(page);
        }
    }

    handleChange(e) {
        this.setState({
            value: +e.target.value
        })
    }

    render() {
        return (
            <input className="to-page" type="number" value={this.state.value} onChange={this.handleChange} min="1" max={this.props.maxPage} onKeyDown={this.choosePage}/>
        )
    }
}

export default connect( ({ pagination }) => ({
    maxPage: pagination.maxPage
}), {
    toPage
} )(ChoosePage);