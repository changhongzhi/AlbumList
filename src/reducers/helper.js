export function GetAlbumTotal(photos) {
    let ids = [];
    photos.forEach((photo) => {
        if(!ids.find(i => i === photo.albumId))
            ids.push(photo.albumId);
    });

    return ids.length;
}