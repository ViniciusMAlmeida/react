export default link => {
    const url = window.location.href
    if(url.indexOf('/todos') > 0 && link === '/todos') {
        return 'nav-item active'
    }
    if(url.indexOf('/about') > 0 && link === '/about') {
        return 'nav-item active'
    }
    return ''
}