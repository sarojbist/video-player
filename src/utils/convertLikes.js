export function convertLikes(likes) {
    if (likes < 1000) {
        return likes.toString();
    } else if (likes < 1000000) {
        return (likes / 1000).toFixed(1) + 'K';
    } else {
        return (likes / 1000000).toFixed(1) + 'M';
    }
}
