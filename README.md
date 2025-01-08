# Crowdcube: A Crowd Funding Application ✨

Crowdcube is your ultimate crowdfunding platform, bridging dreamers and doers. Whether it's a creative idea, a startup, or a personal cause, Crowdcube provides the tools and community to bring your vision to life.

---

## ✨ Project Overview  

**Crowdcube** is designed to offer a seamless user experience with a modern interface, robust features, and secure transaction handling. It enables users to create, explore, and support campaigns while fostering a supportive community for innovators and contributors.

---

### ✨ Key Features  

1. **Dynamic Project Pages**: Explore real-time project details and updates with React Router DOM.  
2. **Engaging Animations**: Interactive animations using React Awesome Reveal, React Simple Typewriter, and React Tooltip.  
3. **Responsive Design**: Tailored with TailwindCSS and DaisyUI for all devices.  
4. **Authentication & Security**: Firebase Authentication ensures a secure user experience.  
5. **Smooth Payment System**: MongoDB-backed backend for safe and efficient donations.  
6. **Interactive Alerts**: Real-time notifications with React Toastify, SweetAlert2, and React Tooltip.  
7. **Community Building**: Connect contributors and campaigners seamlessly.  

---

### 🔧 Technologies Used  

#### **Frontend**  
- **React**: Component-based UI development.  
- **React Router DOM**: Dynamic and seamless navigation.  
- **TailwindCSS & DaisyUI**: Modern styling for a sleek, responsive design.  
- **React Toastify**: User-friendly notifications.  
- **React SweetAlert2**: Eye-catching alerts.  
- **React Tooltip**: Contextual tooltips for interactivity.  
- **React Simple Typewriter**: Typing animations for engaging content.  
- **React Awesome Reveal**: Animate components effortlessly.  
- **Firebase**: Authentication and hosting for blazing-fast performance.  

#### **Backend**  
- **MongoDB Atlas**: Flexible database for storing campaigns and user data.  
- **Vercel**: Reliable backend hosting.

#### **Key Dependencies**  
```json
"dependencies": {
  "@emailjs/browser": "^4.4.1",
  "@emotion/react": "^11.13.5",
  "firebase": "^11.0.2",
  "react": "^18.3.1",
  "react-router-dom": "^7.0.2",
  "react-toastify": "^10.0.6",
  "react-tooltip": "^5.28.0",
  "slick-carousel": "^1.8.1"
}
```

---

### 🖼️ Project Screenshot  

![Crowdcube Screenshot]([https://via.placeholder.com/800x400.png?text=Crowdcube+App+Screenshot](https://i.ibb.co.com/ry0tP4d/crowd-cube-2.png))  
![Crowdcube Screenshot]([https://via.placeholder.com/800x400.png?text=Crowdcube+App+Screenshot](https://i.ibb.co.com/3hXPTJS/crowd-cube-3.png)) 

---

### ⚙️ How to Run the Project Locally  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/crowdcube.git
   cd crowdcube
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Setup Firebase**:  
   - Go to [Firebase Console](https://console.firebase.google.com/).  
   - Create a new project and add your Firebase config to `src/firebaseConfig.js`.  

4. **Run the Development Server**:  
   ```bash
   npm run dev
   ```

5. **Access the App**:  
   Open your browser and navigate to `http://localhost:5173`.

---

### 🚀 Live Links  

- **Live Website**: [Crowdcube](https://crowd-cube-a10.web.app)  
- **Backend APIs**:  
  - [Campaigns API](https://crowd-cube-server.vercel.app/campaigns)  
  - [Users API](https://crowd-cube-server.vercel.app/users)  
  - [Donations API](https://crowd-cube-server.vercel.app/donations)  

---

### 🖋️ Additional Notes  

- Ensure your MongoDB Atlas database is properly configured.  
- Set environment variables for backend APIs.  
- For production deployment, use Firebase Hosting or Vercel for optimal performance.
