import json
import joblib
import pandas as pd
import matplotlib.pyplot as plt

from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    confusion_matrix,
    ConfusionMatrixDisplay,
    roc_curve,
)


# ============================================================
# SHOPMIND AI - MODEL EVALUATION
# ============================================================

BASE_DIR = Path(__file__).resolve().parents[1]

DATASET_PATH = (
    BASE_DIR
    / "dataset"
    / "dataset_04_ecommerce_purchase_intent.csv"
)

MODEL_PATH = BASE_DIR / "models" / "logistic_regression.pkl"

REPORT_DIR = BASE_DIR / "reports"
REPORT_DIR.mkdir(parents=True, exist_ok=True)


# ============================================================
# 1. LOAD DATASET
# ============================================================

print("=" * 60)
print("SHOPMIND AI - MODEL EVALUATION")
print("=" * 60)

df = pd.read_csv(DATASET_PATH)

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


# ============================================================
# 2. SAME TRAIN/TEST SPLIT
# ============================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)


# ============================================================
# 3. LOAD TRAINED MODEL
# ============================================================

print("\nLoading trained model...")

model = joblib.load(MODEL_PATH)

print("Model loaded successfully.")


# ============================================================
# 4. MAKE PREDICTIONS
# ============================================================

print("\nMaking predictions...")

y_pred = model.predict(X_test)
y_probability = model.predict_proba(X_test)[:, 1]


# ============================================================
# 5. CALCULATE METRICS
# ============================================================

accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, zero_division=0)
recall = recall_score(y_test, y_pred, zero_division=0)
f1 = f1_score(y_test, y_pred, zero_division=0)
roc_auc = roc_auc_score(y_test, y_probability)

cm = confusion_matrix(y_test, y_pred)


# ============================================================
# 6. PRINT RESULTS
# ============================================================

print("\n" + "=" * 60)
print("MODEL PERFORMANCE")
print("=" * 60)

print(f"\nAccuracy : {accuracy:.4f} ({accuracy * 100:.2f}%)")
print(f"Precision: {precision:.4f} ({precision * 100:.2f}%)")
print(f"Recall   : {recall:.4f} ({recall * 100:.2f}%)")
print(f"F1-score : {f1:.4f} ({f1 * 100:.2f}%)")
print(f"ROC-AUC  : {roc_auc:.4f}")


# ============================================================
# 7. CONFUSION MATRIX
# ============================================================

print("\nConfusion Matrix:")
print(cm)

tn, fp, fn, tp = cm.ravel()

print(f"\nTrue Negatives : {tn}")
print(f"False Positives: {fp}")
print(f"False Negatives: {fn}")
print(f"True Positives : {tp}")


# ============================================================
# 8. SAVE METRICS
# ============================================================

metrics = {
    "accuracy": round(float(accuracy), 6),
    "precision": round(float(precision), 6),
    "recall": round(float(recall), 6),
    "f1_score": round(float(f1), 6),
    "roc_auc": round(float(roc_auc), 6),
    "confusion_matrix": cm.tolist(),
    "test_samples": len(X_test),
    "train_samples": len(X_train),
    "features": FEATURES,
    "algorithm": "Logistic Regression",
    "test_size": 0.20,
    "random_state": 42,
    "stratified": True,
}

metrics_path = REPORT_DIR / "metrics.json"

with open(metrics_path, "w") as f:
    json.dump(metrics, f, indent=4)

print(f"\nMetrics saved to:")
print(metrics_path)


# ============================================================
# 9. SAVE CONFUSION MATRIX IMAGE
# ============================================================

plt.figure(figsize=(7, 6))

disp = ConfusionMatrixDisplay(
    confusion_matrix=cm,
    display_labels=["No Purchase", "Purchase"]
)

disp.plot()

plt.title("ShopMind AI - Confusion Matrix")
plt.tight_layout()

cm_path = REPORT_DIR / "confusion_matrix.png"

plt.savefig(cm_path, dpi=300, bbox_inches="tight")
plt.close()

print(f"Confusion matrix saved to:")
print(cm_path)


# ============================================================
# 10. ROC CURVE
# ============================================================

fpr, tpr, thresholds = roc_curve(
    y_test,
    y_probability
)

plt.figure(figsize=(7, 6))

plt.plot(
    fpr,
    tpr,
    label=f"Logistic Regression (AUC = {roc_auc:.3f})"
)

plt.plot(
    [0, 1],
    [0, 1],
    linestyle="--",
    label="Random Classifier"
)

plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ShopMind AI - ROC Curve")
plt.legend()
plt.grid(True)

roc_path = REPORT_DIR / "roc_curve.png"

plt.savefig(roc_path, dpi=300, bbox_inches="tight")
plt.close()

print(f"\nROC curve saved to:")
print(roc_path)


# ============================================================
# COMPLETED
# ============================================================

print("\n" + "=" * 60)
print("MODEL EVALUATION COMPLETED SUCCESSFULLY")
print("=" * 60)