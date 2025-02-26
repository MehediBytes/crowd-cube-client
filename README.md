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

## 📦 Dependencies  
- **@emailjs/browser**: `^4.4.1`  
- **@emotion/react**: `^11.13.5`  
- **emailjs-com**: `^3.2.0`  
- **firebase**: `^11.0.2`  
- **localforage**: `^1.10.0`  
- **lottie-react**: `^2.4.0`  
- **match-sorter**: `^8.0.0`  
- **react**: `^18.3.1`  
- **react-awesome-reveal**: `^4.2.14`  
- **react-dom**: `^18.3.1`  
- **react-helmet-async**: `^2.0.5`  
- **react-icons**: `^5.4.0`  
- **react-router-dom**: `^7.0.2`  
- **react-scroll**: `^1.9.0`  
- **react-simple-typewriter**: `^5.0.1`  
- **react-slick**: `^0.30.2`  
- **react-toastify**: `^10.0.6`  
- **react-tooltip**: `^5.28.0`  
- **slick-carousel**: `^1.8.1`  
- **sort-by**: `^1.2.0`  
- **sweetalert2**: `^11.14.5`  

### 🛠️ DevDependencies  
- **@eslint/js**: `^9.15.0`  
- **@types/react**: `^18.3.12`  
- **@types/react-dom**: `^18.3.1`  
- **@vitejs/plugin-react**: `^4.3.4`  
- **autoprefixer**: `^10.4.20`  
- **daisyui**: `^4.12.14`  
- **eslint**: `^9.15.0`  
- **eslint-plugin-react**: `^7.37.2`  
- **eslint-plugin-react-hooks**: `^5.0.0`  
- **eslint-plugin-react-refresh**: `^0.4.14`  
- **globals**: `^15.12.0`  
- **postcss**: `^8.4.49`  
- **tailwindcss**: `^3.4.15`  
- **vite**: `^6.0.1`

---

### 🖼️ Project Screenshot  

![Crowdcube Screenshot 1](https://i.ibb.co/ry0tP4d/crowd-cube-2.png)  
![Crowdcube Screenshot 2](https://i.ibb.co/3hXPTJS/crowd-cube-3.png) 

---

### ⚙️ How to Run the Project Locally  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/MehediBytes/crowd-cube-client.git
   cd crowd-cube-client
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
  - [Donations API](https://crowd-cube-server.vercel.app/donations)  

---

### 🖋️ Additional Notes

- Ensure your MongoDB Atlas database is properly configured.  
- Set environment variables for backend APIs.  
- For production deployment, use Firebase Hosting or Vercel for optimal performance.

### 🖋️ Future Implementations

1. **Real-Time Campaign Updates**:  
   - Implement a system for real-time updates on campaign progress, allowing users to track donation milestones, comments, and changes instantly.

2. **Advanced Payment Integration**:  
   - Add support for more payment gateways (e.g., PayPal, Stripe) to give users more options for contributing to campaigns.

3. **Campaign Analytics Dashboard**:  
   - Provide campaign owners with an analytics dashboard to track the performance of their campaigns, including donor statistics, trends, and more.

4. **Social Media Sharing**:  
   - Integrate social media sharing features to allow users to promote campaigns on platforms like Facebook, Twitter, and Instagram directly from the application.

5. **Customizable Campaign Pages**:  
   - Allow campaign creators to customize their pages with advanced layouts, colors, and features to better express their campaign's theme and vision.

6. **Enhanced Search and Filters**:  
   - Implement advanced search and filtering options to help users find campaigns based on category, donation amount, location, or other criteria.

7. **User Rewards System**:  
   - Add a rewards or points system for donors, where contributors can receive incentives or recognition based on their level of support.

8. **Campaign Verification and Approval Process**:  
   - Introduce a campaign verification process to ensure the legitimacy of projects before they are live, ensuring trust and credibility on the platform.

9. **Mobile App Development**:  
   - Build a native mobile app for iOS and Android to give users a more seamless experience when browsing, donating, and managing campaigns on the go.

10. **Donation History and Management**:  
    - Provide users with a donation history feature where they can track their past contributions, receive updates on campaigns they've supported, and manage their donations.
