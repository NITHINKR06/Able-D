# Able-D: Accessible Learning Platform

### WebApp link - https://able-d.vercel.app/

A comprehensive educational platform designed to make learning accessible for students with diverse needs, including visual impairments, hearing impairments, speech difficulties, and dyslexia.

## 🎯 Project Overview

Able-D is a full-stack application that provides:
- **AI-powered content adaptation** for different learning needs
- **Multi-modal learning support** (text, audio, visual)
- **Teacher and student dashboards** with role-based access
- **Document processing and text extraction**
- **Speech-to-text and text-to-speech capabilities**
- **Firebase authentication and MongoDB database**

## 🏗️ Architecture

```
Able-D/
├── frontend/          # React + TypeScript + Vite + Tailwind CSS
├── backend/           # Flask + Python + MongoDB + Firebase
├── docs/              # Comprehensive documentation
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (local or cloud instance)
- **Firebase project** (for authentication)
- **Azure Speech Services** (for STT/TTS)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Able-D
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   python run.py
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Environment Configuration**
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Configure your API keys and database connections

## 🔧 Key Features

### For Students
- **Adaptive UI** based on accessibility needs
- **AI-generated study notes** from uploaded documents
- **Multi-format content consumption** (text, audio, visual)
- **Personalized learning experience**

### For Teachers
- **Document upload and processing**
- **AI-powered content generation**
- **Student progress tracking**
- **Content management system**

### Technical Features
- **Real-time AI processing** using Google Gemini
- **Speech services** via Azure Cognitive Services
- **Secure authentication** with Firebase
- **Responsive design** with accessibility focus
- **RESTful API** with comprehensive documentation

## 📚 Documentation

- [Frontend Guide](frontend/README.md)
- [Backend Guide](backend/README.md)
- [API Reference](backend/docs/API_REFERENCE.md)
- [Database Guide](backend/docs/DATABASE_GUIDE.md)
- [Authentication Guide](backend/docs/AUTH.md)

## 🛠️ Development

### Running in Development Mode

1. **Start Backend**
   ```bash
   cd backend
   python run.py
   ```

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

### Testing

```bash
# Backend tests
cd backend
python -m pytest

# Frontend tests
cd frontend
npm test
```

## 🔐 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/able-d
FIREBASE_CREDENTIALS_PATH=path/to/firebase-credentials.json
AZURE_SPEECH_KEY=your_azure_speech_key
AZURE_SPEECH_REGION=your_azure_region
GEMINI_API_KEY=your_gemini_api_key
FLASK_SECRET_KEY=your_secret_key
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 📦 Deployment

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Manual Deployment
1. Build frontend: `npm run build`
2. Deploy backend to your preferred hosting service
3. Configure environment variables
4. Set up MongoDB and Firebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Prashith Shetty** - *Initial work* - [GitHub Profile]

## 🙏 Acknowledgments

- Google Gemini AI for content generation
- Azure Cognitive Services for speech processing
- Firebase for authentication
- MongoDB for data storage
- React and Flask communities for excellent frameworks

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the `docs/` folder
- Review the API reference for technical details

---

**Able-D** - Making education accessible for everyone. 🌟
