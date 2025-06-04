export const environment = [
    {
        name: 'local',
        apiUrl: 'http://localhost:5173/api',
        baseUrl: 'http://localhost:5173/',
        production: false,
        version: '0.0.01-local'
    },
    {
        name: 'development',
        apiUrl: 'http://localhost:3000/api',
        baseUrl: 'http://localhost:3000/',
        production: false,
        version: '1.0.0-dev'
    },
    {
        name: 'production',
        apiUrl: 'https://api.duckhats.com',
        baseUrl: 'https://duckhats.com/',
        production: true,
        version: '1.0.0'
    }
]
    