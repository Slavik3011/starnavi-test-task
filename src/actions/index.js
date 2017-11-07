export function nextPage() {
    return {
        type: 'NEXT_PAGE'
    }
}

export function prevPage() {
    return {
        type: 'PREV_PAGE'
    }
}

export function toPage(page) {
    return {
        type: 'GO_TO_PAGE',
        payload: page
    }
}

export function setMaxPage(pages) {
    return {
        type: 'SET_MAX_PAGE',
        payload : pages
    }
}

export function setCountPosts(posts) {
    return {
        type: 'COUNT_POSTS',
        payload : posts
    }
}

export function setShowPosts(num) {
    return {
        type: 'SHOW_POSTS',
        payload: num
    }
}

export function setActivePicture(id) {
    return {
        type: 'SET_ACTIVE_PICTURE',
        payload: id
    }
}

export function setAuthors(authors) {
    return {
        type: 'SET_AUTHORS',
        payload: authors
    }
}

export function setAuthor(author) {
    return {
        type: 'SET_AUTHOR',
        payload: author
    }
}

export function setSize(size) {
    return {
        type: 'SET_SIZE',
        payload: size
    }
}