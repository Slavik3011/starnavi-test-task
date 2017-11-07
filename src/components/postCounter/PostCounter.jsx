import React from 'react';
import { connect } from 'react-redux';

import './postCounter.sass';

const PostCounter = ({ countPosts }) => <p className="post-counter">{`Find ${countPosts} images`}</p>;

export default connect( ({ pagination }) => ({
    countPosts: pagination.countPosts
}) )(PostCounter);