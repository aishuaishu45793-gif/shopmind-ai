from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.prediction import router as prediction_router


app = FastAPI(
    title="ShopMind AI API",
    description="AI-powered e-commerce purchase intent prediction API",
    version="1.0.0",
)


# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register API routes
app.include_router(prediction_router)


@app.get("/")
def root():
    return {
        "message": "ShopMind AI API is running",
        "status": "success",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "ShopMind AI",
    }