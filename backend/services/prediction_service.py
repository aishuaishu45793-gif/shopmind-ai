import pandas as pd

from ml.model_loader import model


FEATURES = [
    "pages_viewed",
    "session_minutes",
    "products_viewed",
    "cart_additions",
    "discount_seen",
    "previous_orders",
]


def predict_purchase_intent(
    pages_viewed: int,
    session_minutes: float,
    products_viewed: int,
    cart_additions: int,
    discount_seen: int,
    previous_orders: int,
):
    """
    Predict e-commerce purchase intent using
    the trained Logistic Regression model.
    """

    input_data = pd.DataFrame(
        [
            {
                "pages_viewed": pages_viewed,
                "session_minutes": session_minutes,
                "products_viewed": products_viewed,
                "cart_additions": cart_additions,
                "discount_seen": discount_seen,
                "previous_orders": previous_orders,
            }
        ],
        columns=FEATURES,
    )

    prediction = int(model.predict(input_data)[0])

    probability = float(
        model.predict_proba(input_data)[0][1]
    )

    if prediction == 1:
        intent = "High Purchase Intent"
    else:
        intent = "Low Purchase Intent"

    return {
        "prediction": prediction,
        "purchase_probability": round(probability, 4),
        "purchase_probability_percent": round(
            probability * 100, 2
        ),
        "intent": intent,
    }