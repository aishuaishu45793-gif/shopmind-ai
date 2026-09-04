# 🛍️ ShopMind AI — AISHU FASHIONS

### AI-Powered E-Commerce Purchase Intent Prediction Platform

> **AISHU FASHIONS** is a modern AI-powered e-commerce platform concept built with **ShopMind AI**, an intelligent machine learning system that predicts customer purchase intent from online shopping session behavior.

---

## 🌟 Overview

**ShopMind AI** combines an e-commerce shopping experience with machine learning-based purchase intent prediction.

The system analyzes customer session behavior such as:

- Pages viewed
- Session duration
- Products viewed
- Cart additions
- Discount interaction
- Previous orders

and predicts whether the customer is likely to make a purchase.

The core machine learning model is **Logistic Regression**, implemented according to the requirements of the E-Commerce Purchase Intent classification problem.

---

## 🎯 Project Objectives

The main objectives of ShopMind AI are:

- Build an AI-powered e-commerce platform.
- Predict customer purchase intent using machine learning.
- Provide purchase probability for each customer session.
- Create an interactive shopping experience.
- Demonstrate an end-to-end ML application.
- Connect a trained ML model with a FastAPI backend.
- Provide a foundation for personalized recommendations and business analytics.

---

# 🤖 Machine Learning

## Problem Statement

### E-Commerce Purchase Intent Classification

The task is a **binary classification problem**.

The model predicts:

| Target | Meaning |
|---|---|
| `0` | No Purchase |
| `1` | Purchase |

---

## 📊 Dataset

The project uses the provided e-commerce purchase intent dataset.

### Dataset dimensions

- **Rows:** 1,000
- **Columns:** 7
- **Input features:** 6
- **Target:** 1
- **Missing values:** 0
- **Duplicate rows:** 0
- **Target distribution:** 500 class 0 / 500 class 1

### Features

| Feature | Description |
|---|---|
| `pages_viewed` | Number of pages viewed during the session |
| `session_minutes` | Duration of the shopping session |
| `products_viewed` | Number of products viewed |
| `cart_additions` | Number of products added to cart |
| `discount_seen` | Whether a discount was seen |
| `previous_orders` | Number of previous orders |

### Target


```text
target = 0 → No Purchase
target = 1 → Purchase
🧠 Machine Learning Pipeline

The model uses the following pipeline:

Raw Dataset
     ↓
Data Inspection
     ↓
Train/Test Split
     ↓
StandardScaler
     ↓
Logistic Regression
     ↓
Prediction
     ↓
Probability Estimation
     ↓
Evaluation
Train/Test Split

The dataset is divided using:

train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

Therefore:

Training data: 80%
Testing data: 20%
Random state: 42
Stratification: Yes
⚙️ Model
Algorithm

Logistic Regression

Preprocessing

StandardScaler

Model Configuration
LogisticRegression(
    max_iter=1000,
    random_state=42
)

The scaler and classifier are implemented together using a Scikit-learn Pipeline.

📈 Model Performance

The trained model was evaluated on the held-out test dataset.

Metric	Score
Accuracy	73.00%
Precision	73.96%
Recall	71.00%
F1-Score	72.45%
ROC-AUC	80.05%
Confusion Matrix
                Predicted
              0        1
Actual  0     75       25
        1     29       71
Interpretation
True Negatives: 75
False Positives: 25
False Negatives: 29
True Positives: 71

The ROC-AUC score of 0.8005 indicates that the model has useful ability to distinguish between purchasing and non-purchasing sessions.

🔍 Feature Coefficients

The trained Logistic Regression model produced the following standardized feature coefficients:

Feature	Coefficient
pages_viewed	+0.636711
session_minutes	-0.336610
products_viewed	+0.612081
cart_additions	-0.341428
discount_seen	+0.652460
previous_orders	-0.394278
Interpretation

Positive coefficients indicate an association with a higher predicted purchase probability, while negative coefficients indicate an association with a lower predicted purchase probability within this model.

Important: These coefficients represent statistical associations in this dataset. They should not be interpreted as proof of causation.

🏗️ System Architecture
                 ┌───────────────────────┐
                 │     AISHU FASHIONS     │
                 │      React Frontend   │
                 └───────────┬───────────┘
                             │
                             │ HTTP Request
                             ▼
                 ┌───────────────────────┐
                 │      FastAPI Backend  │
                 │       /api/predict    │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   Prediction Service  │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ Logistic Regression   │
                 │      ML Pipeline      │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ Purchase Probability  │
                 │     & Intent          │
                 └───────────────────────┘
🛒 E-Commerce Platform

The frontend is designed around AISHU FASHIONS, powered by ShopMind AI.

The platform is designed to provide a modern marketplace experience including:

Shopping
Home page
Product catalog
Men collection
Women collection
Dresses
Accessories
Deals
Trending products
Product details
Search
Product filtering
Wishlist
Shopping cart
Customer Features
User account
Order management
Order history
Personalized shopping experience
AI purchase-intent prediction
Product recommendations
Coupons
Reviews
Notifications
AI Features
Purchase intent prediction
Purchase probability
Customer behavior analysis
Personalized recommendations
AI shopping assistant
Business analytics
🔌 API

The machine learning model is exposed through a FastAPI backend.

Health Check
GET /

Response:

{
  "message": "ShopMind AI API is running",
  "status": "success"
}
Health Endpoint
GET /health

Response:

{
  "status": "healthy",
  "service": "ShopMind AI"
}
Purchase Intent Prediction
POST /api/predict
Request
{
  "pages_viewed": 8,
  "session_minutes": 15,
  "products_viewed": 5,
  "cart_additions": 2,
  "discount_seen": 1,
  "previous_orders": 1
}
Response
{
  "prediction": 0,
  "purchase_probability": 0.0000,
  "purchase_probability_percent": 0.00,
  "intent": "Low Purchase Intent"
}

The probability shown above is an example response structure. Actual predictions depend on the supplied input values.

🧰 Technology Stack
Frontend
React
Vite
JavaScript
HTML5
CSS3
Backend
Python
FastAPI
Pydantic
Uvicorn
Machine Learning
Python
Pandas
NumPy
Scikit-learn
Joblib
Matplotlib
Development Tools
Git
GitHub
VS Code
📁 Project Structure
SHOPMIND-AI/
│
├── frontend/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   └── api/
│   │       └── prediction.py
│   │
│   ├── ml/
│   │   ├── model_loader.py
│   │   └── predictor.py
│   │
│   ├── models/
│   ├── schemas/
│   ├── services/
│   │   └── prediction_service.py
│   │
│   ├── config.py
│   ├── database.py
│   ├── main.py
│   └── requirements.txt
│
├── ml/
│   ├── dataset/
│   ├── notebooks/
│   ├── training/
│   ├── models/
│   │   └── logistic_regression.pkl
│   └── reports/
│       ├── metrics.json
│       ├── confusion_matrix.png
│       └── roc_curve.png
│
├── products/
├── database/
├── docs/
├── tests/
│
├── .gitignore
├── README.md
└── LICENSE
🚀 Installation
1. Clone the repository
git clone https://github.com/aishuaishu45793-gif/shopmind-ai.git
cd shopmind-ai
🐍 Backend Setup

Navigate to the backend:

cd backend

Create a virtual environment:

python -m venv .venv

Activate it on Windows:

.venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the FastAPI server:

python -m uvicorn main:app --reload --port 8000

The API will be available at:

http://127.0.0.1:8000

Swagger API documentation:

http://127.0.0.1:8000/docs
💻 Frontend Setup

Open another terminal and navigate to:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The Vite development server will provide the local frontend URL in the terminal.

🧪 Testing the API

Example request:

curl -X POST "http://127.0.0.1:8000/api/predict" ^
-H "Content-Type: application/json" ^
-d "{\"pages_viewed\":8,\"session_minutes\":15,\"products_viewed\":5,\"cart_additions\":2,\"discount_seen\":1,\"previous_orders\":1}"
📊 ML Reports

The repository contains generated model evaluation outputs:

Metrics
ml/reports/metrics.json
Confusion Matrix
ml/reports/confusion_matrix.png
ROC Curve
ml/reports/roc_curve.png
Trained Model
ml/models/logistic_regression.pkl
🔐 Data & Security
Environment variables are excluded from Git using .gitignore.
The ML dataset is kept separate from the frontend product catalog.
No customer personally identifiable information is required by the current ML model.
The current API implementation is intended for development/demo purposes.
⚠️ Limitations

The current model has several limitations:

The dataset contains only 1,000 records.
The model uses only six behavioral predictors.
The dataset may not represent real-world e-commerce customers.
Model performance may change on new customer populations.
Product information is not used as an ML predictor.
The model provides associations rather than causal explanations.
The current platform is a project/demo implementation rather than a production commerce system.
🔮 Future Improvements

Future versions of ShopMind AI can include:

Larger real-world datasets
Advanced recommendation systems
Random Forest and Gradient Boosting comparisons
XGBoost/LightGBM experiments
Deep learning models
Customer segmentation
Real-time behavioral tracking
Explainable AI
SHAP-based explanations
A/B testing
Advanced analytics
Real database integration
Production authentication
Payment gateway integration
Seller dashboard
Admin dashboard
Real-time notifications
Cloud deployment
CI/CD pipeline
Model monitoring
Model retraining pipeline
🎓 Academic Relevance

This project demonstrates concepts from:

Artificial Intelligence
Machine Learning
Binary Classification
Logistic Regression
Data Preprocessing
Feature Scaling
Train/Test Splitting
Stratified Sampling
Model Evaluation
Confusion Matrix
ROC-AUC
REST APIs
FastAPI
React
Full-Stack Development
Git & GitHub
👩‍💻 Project
AISHU FASHIONS

Powered by ShopMind AI

AI-powered e-commerce purchase intent prediction and intelligent shopping platform.

⭐ Project Highlights
✔ E-Commerce Platform
✔ AI Purchase Intent Prediction
✔ Logistic Regression
✔ FastAPI REST API
✔ React + Vite Frontend
✔ Purchase Probability
✔ ML Evaluation Reports
✔ Confusion Matrix
✔ ROC Curve
✔ GitHub Version Control
✔ Scalable Project Architecture
📌 Model Summary
Problem        : E-Commerce Purchase Intent
Task           : Binary Classification
Algorithm      : Logistic Regression
Preprocessing  : StandardScaler
Train/Test     : 80/20
Random State   : 42
Accuracy       : 73.00%
Precision      : 73.96%
Recall         : 71.00%
F1-Score       : 72.45%
ROC-AUC        : 80.05%
📜 License

This project is intended for educational, academic, portfolio, and demonstration purposes.


### Then save it

After saving `README.md`, run:

```powershell
cd C:\Users\Aishwarya\Desktop\shop-mind-ai
git add README.md
git commit -m "Add professional project README"
git push

Then verify:

git status

You should get:

On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
