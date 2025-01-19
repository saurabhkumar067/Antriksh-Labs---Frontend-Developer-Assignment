Sure! Here's a more human-readable version of the documentation:

---

# **Project Overview**

This project is a simple task management application built using **Next.js** and **React**. It allows users to manage their tasks by categorizing them into different statuses: **Pending**, **In Progress**, and **Completed**. The application also features a light/dark mode toggle, dynamic task management, and an intuitive layout that adapts to different screen sizes.

---

## **Components**

### **1. Header**

The **Header** component sits at the top of the page and serves a few key purposes:
- **Theme Toggle**: A button that lets users switch between light and dark mode.
- **User Profile**: Displays the username and a profile icon, providing a more personalized experience.

It’s built using React context to manage the theme preference globally across the app.

### **2. Sidebar**

The **Sidebar** is a vertical navigation bar that contains links to different sections of the app:
- **Dashboard**
- **Tasks**
- **Profile**
- **Settings**

Each link has an associated icon for better visual cues. The active link (the section you're currently on) is highlighted to make navigation easier. This sidebar is also designed to be responsive, adjusting its layout based on the screen size.

### **3. Cards**

The **Cards** component displays each task in a card layout. These cards show:
- **Task ID**: A unique identifier for the task.
- **Task Description**: A brief description of the task.
- **Status**: The current status of the task, which can be "Pending", "In Progress", or "Completed."

Each card has a menu icon (three dots) that opens a dropdown to show the task’s status. The dropdown can be toggled by clicking on the menu.

### **4. Dashboard**

The **Dashboard** is the main area where tasks are displayed. Here’s how it works:
- **Fetching Data**: It fetches task data from a `data.json` file and displays it dynamically.
- **Task Categories**: Tasks are categorized into three sections based on their status: **To Do** (Pending), **In Progress**, and **Completed**.
- **Responsive Design**: The layout adjusts itself according to the screen size, so it looks good both on mobile devices and desktop screens.
- **Loading State**: While the task data is being fetched, a loading message is displayed.

### **5. BioContext**

The **BioContext** is a simple global state management solution using React Context. It’s used to manage the light/dark mode toggle throughout the app. Whenever a user changes the theme, it persists across different pages and reloads, keeping the user’s preference intact.

### **6. data.json**

This is a simple JSON file that contains all the task data, including:
- **ID**: A unique task identifier.
- **Title**: The task's title.
- **Description**: A brief description of what the task involves.
- **Status**: The current status of the task (Pending, In Progress, Completed).

---

## **Features**

- **Task Management**: Tasks can be viewed and categorized by their status: Pending, In Progress, and Completed.
- **Theme Toggle**: Users can switch between light and dark modes using a toggle button.
- **Interactive Task Cards**: Each task can be clicked to show additional information, such as its current status.
- **Responsive Design**: The app layout adjusts depending on the screen size, so it works well on both desktops and mobile devices.

---

## **Installation & Setup**

### **1. Clone the Repository:**
To get started, clone the repository to your local machine:
```bash
git clone https://github.com/your-repository.git
```

### **2. Install Dependencies:**
Next, go into the project folder and install the necessary dependencies:
```bash
cd project-directory
npm install
```

### **3. Run the Application:**
Once the dependencies are installed, run the following command to start the development server:
```bash
npm run dev
```
This will start the app locally at `http://localhost:3000`.

---

## **Conclusion**

This task management app provides a clean, user-friendly interface for managing tasks. It’s built with modern technologies like React and Next.js, which ensures the app is fast and responsive. With its light/dark mode toggle, easy navigation, and dynamic task management, this app offers a smooth experience for users. 

---