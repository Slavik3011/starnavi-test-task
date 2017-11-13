import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Picture from '../picture/Picture';
import './gallery.sass';

import { setMaxPage, setCountPosts, setAuthors, setActivePicture } from 'actions';

class Gallery extends React.Component {
    constructor() {
        super();

        this.list = this.list.bind(this);

        this.state = {
            gallery: [],
            filteredGallery: []
        }
    }

    componentDidMount() {
        axios.get('https://picsum.photos/list')
            .then(res => {
                let posts = res.data,
                    { showPosts, setMaxPage, setCountPosts, setAuthors, author, size } = this.props,
                    set = new Set(),
                    authors = [],
                    filteredGallery;

                posts.forEach(post => set.add(post.author));
                set.forEach(author => authors.push(author));
                authors.splice(15);

                filteredGallery = posts.filter(post => {
                    let postSize = 'Large';
                    if(1200 <= post.width < 2200) postSize = 'Medium';
                    if(post.width < 1200) postSize = 'Small';
                    return author == post.author || author == '' && size == '' || size == postSize
                });

                let maxPages = Math.ceil(filteredGallery.length/showPosts);

                this.setState({
                    gallery: posts,
                    filteredGallery: filteredGallery
                });

                setAuthors(authors);
                setMaxPage(maxPages);
                setCountPosts(filteredGallery.length)
            });
    }

    componentWillReceiveProps(nextProps) {
        let { gallery: posts } = this.state,
            { showPosts, setMaxPage, setCountPosts, author, size } = nextProps,
            filteredGallery;

        filteredGallery = posts.filter(post => {
            let postSize = 'Large';
            if(1200 <= post.width && post.width < 2200) postSize = 'Medium';
            if(post.width < 1200) postSize = 'Small';

            return (author == post.author || author == '') && (size == '' || size == postSize)
        });

        let maxPages = Math.ceil(filteredGallery.length/showPosts);

        this.setState({
            filteredGallery
        });
        console.log(author)

        setMaxPage(maxPages);
        setCountPosts(filteredGallery.length)
    }

    list() {
        let list = [],
            { filteredGallery } = this.state,
            { currentPage, showPosts, setActivePicture, activePicture } = this.props,
            startPost = showPosts * (currentPage - 1),
            lastPost = showPosts * currentPage;

        if(lastPost >= filteredGallery.length) lastPost = filteredGallery.length;

        if(filteredGallery.length) {
            for(let i = startPost; i < lastPost; i++) {
                let item = filteredGallery[i];
                list.push(<Picture key={item.id}
                                   id={item.id}
                                   setActivePicture={setActivePicture}
                                   activePicture={activePicture}
                                   src={`https://picsum.photos/${item.width}/${item.height}?image=${item.id}`} />)
            }
        }

        return list;
    }

    render() {
        return (
            <ul className="gallery">
                {this.list()}
            </ul>
        )
    }
}

export default connect( ({ pagination, filters, activePicture }) => ({
    currentPage: pagination.currentPage,
    showPosts: pagination.showPosts,
    author: filters.author,
    size: filters.size,
    activePicture
}), {
    setMaxPage,
    setCountPosts,
    setAuthors,
    setActivePicture
} )(Gallery);
