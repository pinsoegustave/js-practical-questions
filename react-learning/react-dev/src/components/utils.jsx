export default function getImageUrl(person, size = 's') {
    return (
        'https://i.imgUr.com/' + 
        person.imageId +
        size + 
        '.jpg'
    )
}