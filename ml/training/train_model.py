import pandas as pd
import joblib

from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression


# ============================================================
# SHOPMIND AI - E-COMMERCE PURCHASE INTENT
# LOGISTIC REGRESSION TRAINING
# ============================================================

BASE_DIR = Path(__file__).resolve().parents[1]

DATASET_PATH = (
    BASE_DIR
    / "dataset"
    / "dataset_04_ecommerce_purchase_intent.csv"
)

MODEL_DIR = BASE_DIR / "models"
MODEL_DIR.mkdir(parents=True, exist_ok=True)

MODEL_PATH = MODEL_DIR / "logistic_regression.pkl"


# ============================================================
# 1. LOAD DATASET
# ============================================================

print("=" * 60)
print("SHOPMIND AI - MODEL TRAINING")
print("=" * 60)

print("\nLoading dataset...")

df = pd.read_csv(DATASET_PATH)

print(f"Dataset shape: {df.shape}")


# ============================================================
# 2. DEFINE FEATURES AND TARGET
# ============================================================

FEATURES = [
    "pages_viewed",
    "session_minutes",
    "products_viewed",
    "cart_additions",
    "discount_seen",
    "previous_orders",
]

TARGET = "target"

X = df[FEATURES]
y = df[TARGET]


print("\nFeatures:")
for feature in FEATURES:
    print(f" - {feature}")

print(f"\nTarget: {TARGET}")


# ============================================================
# 3. TRAIN / TEST SPLIT
# ============================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

print("\nTrain/Test Split:")
print(f"Training samples: {len(X_train)}")
print(f"Testing samples:  {len(X_test)}")


# ============================================================
# 4. BUILD MACHINE LEARNING PIPELINE
# ============================================================

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    (
        "logistic_regression",
        LogisticRegression(
            max_iter=1000,
            random_state=42
        )
    )
])


# ============================================================
# 5. TRAIN MODEL
# ============================================================

print("\nTraining Logistic Regression model...")

pipeline.fit(X_train, y_train)

print("Model training completed.")


# ============================================================
# 6. SAVE MODEL
# ============================================================

joblib.dump(pipeline, MODEL_PATH)

print("\nModel saved successfully:")
print(MODEL_PATH)


# ============================================================
# 7. BASIC MODEL INFORMATION
# ============================================================

model = pipeline.named_steps["logistic_regression"]

print("\nModel Configuration:")
print(f"Algorithm: Logistic Regression")
print(f"Max iterations: {model.max_iter}")
print(f"Random state: {model.random_state}")

print("\nCoefficient values:")

for feature, coefficient in zip(FEATURES, model.coef_[0]):
    print(f"{feature:20s}: {coefficient:.6f}")


print("\n" + "=" * 60)
print("MODEL TRAINING COMPLETED SUCCESSFULLY")
print("=" * 60)