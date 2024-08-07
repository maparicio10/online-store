// Validar la URL de la imagen
export const getImageUrl = (images) => {
    if (Array.isArray(images) && images.length > 0) {
        const url = images[0];
        try {
            new URL(url); // Verifica si es una URL válida
            return url;
        } catch (_) {
            return 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // URL por defecto
        }
    }
    return 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // URL por defecto
};