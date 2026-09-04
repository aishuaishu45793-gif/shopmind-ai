import pandas as pd
from pathlib import Path

# Dataset location
DATASET_PATH = Path(__file__).resolve().parents[1] / "dataset" / "dataset_04_ecommerce_purchase_intent.csv"

# Load dataset
df = pd.read_csv(DATASET_PATH)

print("=" * 60)
print("SHOPMIND AI - DATASET INSPECTION")
print("=" * 60)

print("\nDataset path:")
print(DATASET_PATH)

print("\nDataset shape:")
print(df.shape)

print("\nColumns:")
print(df.columns.tolist())

print("\nFirst 5 rows:")
print(df.head())

print("\nData types:")
print(df.dtypes)

print("\nMissing values:")
print(df.isnull().sum())

print("\nDuplicate rows:")
print(df.duplicated().sum())

print("\nTarget distribution:")
print(df["target"].value_counts().sort_index())

print("\nTarget percentages:")
print(df["target"].value_counts(normalize=True).sort_index() * 100)

print("\nStatistical summary:")
print(df.describe())

print("\n" + "=" * 60)
print("DATASET INSPECTION COMPLETED")
print("=" * 60)