class Place{
    constructor ( title, imageUri, address, location, ){
        this.title = title; // text
        this.imageUri = imageUri; // url
        this.address = address; // text
        this.location = location; // {lat: 0.12553, lng:125.165},
        this.id = new Date().valueOf() + (Math.random() + 1).toString(36).substring(2)
    }
}