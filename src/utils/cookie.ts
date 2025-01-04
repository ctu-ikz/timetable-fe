
// export function setCookie(name: string, value : string, days: number = 0): void{

//     const expires = days ? `expires=${new Date(Date.now() + days * 864e5).toUTCString()}` : '';
//     document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
// }

// export function getCookie(name: string): string | null{
//     const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
//         const [key, val] = cookie.split('=');
//         acc[key] = decodeURIComponent(val);
//         return acc;
//     }, {} as Record<string, string>);
//     return cookies[name] || null;
// }

// export function deleteCookie(name: string): void{
//     document.cookie = `${name}=; Max-Age=0; path=/`;
// }