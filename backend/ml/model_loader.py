from pathlib import Path
import joblib


# Project root:
# C:\Users\Aishwarya\Desktop\shop-mind-ai
BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = (
    BASE_DIR
    / "ml"
    / "models"
    / "logistic_regression.pkl"
)


def load_model():
    """Load the trained ShopMind AI Logistic Regression pipeline."""

    if not MODEL_PATH.exists():
        raise FileNotFoundError(
            f"Trained model not found at: {MODEL_PATH}"
        )

    return joblib.load(MODEL_PATH)


model = load_model()