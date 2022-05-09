const GOOGLE_API_KEY = "AIzaSyDoPDktnF7TqlSfBCK5Dyp2ySPH6wuuiD0";

const getMapPreview = (lat, lng)=>{
    const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`
    return imagePreview;
}