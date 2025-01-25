**E-Facture**

E-facture is a web application designed to manage and generate electronic invoices efficiently. This project is built using Laravel and includes a modern frontend setup with Vite and Tailwind CSS.

## Features

- **User Authentication**: Secure login and registration system.
- **Invoice Management**: Create, update, delete, and view invoices.
- **PDF Generation**: Generate and download invoices in PDF format.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **API Integration**: Easily extendable with API endpoints for third-party integrations.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/E-facture.git
   cd E-facture
   ```

2. **Install dependencies**:
   ```bash
   composer install
   npm install
   ```

3. **Set up environment variables**:
    - Copy `.env.example` to `.env` and update the necessary values (e.g., database credentials).
    - Generate the application key:
      ```bash
      php artisan key:generate
      ```

4. **Run migrations**:
   ```bash
   php artisan migrate
   ```

5. **Compile assets**:
   ```bash
   npm run dev
   ```

6. **Serve the application**:
   ```bash
   php artisan serve
   ```

## Usage

- Access the application via `http://localhost:8000`.
- Register a new user or log in with existing credentials.
- Navigate through the dashboard to manage invoices.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Laravel
- Tailwind CSS
- Vite
- React
- MySQL.

## Contact

For any inquiries, please contact Ahmed Hmimida at Ahmed0hmimida@gmail.com .
```
