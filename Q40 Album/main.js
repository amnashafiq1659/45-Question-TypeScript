"use strict";
// Question 40:
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artistName, albumTitle, albumTracks) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (albumTracks !== undefined) {
        album.tracks = albumTracks;
    }
    ;
    return album;
}
;
let album1 = makeAlbum("Asim Azhar", "Bematlab");
console.log(album1);
let album2 = makeAlbum("Atif Aslam", "Meri Kahani");
console.log(album2);
let album3 = makeAlbum("Talah Anjum", "Open Letter", 14);
console.log(album3);
let album4 = makeAlbum("Ali Zafar", "Jhoom", 12);
console.log(album4);
let album5 = makeAlbum("Talhah Yunus", "Shikwa", 10);
console.log(album5);
let album6 = makeAlbum("Farhan Saeed", "Piyaar Sufiyana");
console.log(album6);
