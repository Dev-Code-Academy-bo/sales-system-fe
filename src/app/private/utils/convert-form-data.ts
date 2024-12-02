export function converUserToFormData(data: any): FormData {
    const formData = new FormData;
    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('ci', data.ci);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('address', data.address);
    formData.append('birthdate', data.birthdate);
    formData.append('photo', data.photo);
    
    return formData
} 

